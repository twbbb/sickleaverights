# 前端通用模式

## 图片压缩（Canvas 二分法，目标 2MB 以内）

```typescript
const compressImage = async (f: File, maxSize = 2 * 1024 * 1024): Promise<File> => {
  if (f.size <= maxSize) return f;
  const bitmap = await createImageBitmap(f);
  const canvas = document.createElement('canvas');
  let { width, height } = bitmap;
  const maxDim = 2048;
  if (Math.max(width, height) > maxDim) {
    const scale = maxDim / Math.max(width, height);
    width = Math.round(width * scale); height = Math.round(height * scale);
  }
  canvas.width = width; canvas.height = height;
  canvas.getContext('2d')!.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  // 二分法查找 JPEG 质量
  let lo = 0.1, hi = 0.92, blob: Blob | null = null;
  for (let i = 0; i < 4; i++) {
    const mid = Math.round(((lo + hi) / 2) * 10) / 10;
    const b = await new Promise<Blob|null>(r => canvas.toBlob(r, 'image/jpeg', mid));
    if (b && b.size <= maxSize) { blob = b; lo = mid; } else hi = mid;
  }
  // 仍超限则缩小尺寸（同样二分法）
  if (!blob || blob.size > maxSize) { /* 缩小尺寸循环 */ }
  return new File([blob!], f.name.replace(/\.\w+$/, '.jpg'), { type: 'image/jpeg' });
};
```

## 异步轮询（分段策略 + 递归 setTimeout）

```typescript
const getPollingInterval = (createdAt: string) => {
  const elapsed = (Date.now() - new Date(createdAt).getTime()) / 1000;
  if (elapsed < 20) return 6000;   // 前 20s 慢轮询
  if (elapsed < 40) return 4000;   // 中段加速
  if (elapsed < 70) return 3000;   // 高峰期 3s
  return 6000;                      // 后期回落
};

// 递归 setTimeout（比 setInterval 更灵活，到终态自动停止）
const schedulePoll = () => {
  setTimeout(async () => {
    const updated = await getTask(taskId);
    updateTaskInList(updated);
    if (updated.status !== 'done' && updated.status !== 'failed') schedulePoll();
  }, getPollingInterval(createdAt));
};
```

## 进度条（时间缓动，防刷新跳到 99%）

```typescript
// 120s 线性增长到 90%，超时后对数曲线逼近 99%
// 刷新页面后 5 秒内从 70% 平滑过渡到实际进度
```

## API 客户端（同域 Cookie + 统一错误处理）

```typescript
const API_BASE = process.env.NEXT_PUBLIC_API_URL || ''; // 同域部署时为空，用相对路径

async function request<T>(path: string, opts: RequestInit = {}): Promise<T> {
  const headers: any = { ...opts.headers, 'X-Request-Id': crypto.randomUUID() };
  const resp = await fetch(`${API_BASE}${path}`, { ...opts, credentials: 'include', headers });
  const data = await resp.json();
  if (!data.success) { const err = new Error(data.error?.message); (err as any).code = data.error?.code; throw err; }
  return data.data;
}
```

## 水印下载

```typescript
// Canvas drawImage → 右下角半透明文字（阴影 + 前景双层）→ toBlob → 触发下载
```
