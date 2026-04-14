# Logger + 前端监控

## Worker Logger（腾讯云 CLS 匿名上传）

```typescript
export class Logger {
  private buffer: LogEntry[] = [];
  private requestId: string;
  private globals: Record<string, unknown> = {};

  constructor(env: Env, requestId?: string) {
    this.requestId = requestId || crypto.randomUUID().slice(0, 8);
  }

  setGlobals(fields: Record<string, unknown>) { Object.assign(this.globals, fields); }
  info/warn/error(message, extra?) → push to buffer + console.log

  // 关键：外部 API 调用前预刷新，防止卡死丢日志
  async flushBeforeExternalCall() { await uploadToCLS(buffer); buffer = []; }
  async flush() { await uploadToCLS(buffer); buffer = []; }
}

// CLS 匿名上传
POST https://{region}.cls.tencentcs.com/tracklog?topic_id={topicId}
Body: { logs: [{ contents: {...}, time: epoch }], source: "production" }
```

### 日志值过滤

- FILTER_KEYS: image, base64, input_image 等 → `[FILTERED]`
- data:image/ 或疑似 base64 → `[BASE64 xxxKB]`
- 超过 500 字符 → 截断

### 使用模式

```typescript
// 入口
const logger = new Logger(env, requestId);
logger.setGlobals({ path, method });
// 认证后
logger.setGlobal('userId', session.userId);
// 外部调用前
logger.info('Calling API', { type: 'pipeline', step: 'start' });
await logger.flushBeforeExternalCall(); // ← 关键
// 响应后异步上报
ctx.waitUntil(logger.flush());
```

## 前端监控（Aegis RUM）

```tsx
// 动态 import aegis-web-sdk，配置 spa/reportApiSpeed/webVitals 等
// 自定义返回码: retCodeHandler 解析 { success: true/false }
// 埋点: reportEvent('generate_submit', resolution)
// 用户标识: setRumUser(email)
```
