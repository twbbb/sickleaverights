# CAS 乐观锁 + Queue 异步 Pipeline

## CAS 乐观锁

```sql
-- 积分扣除（余额不足则 changes=0）
UPDATE users SET credits = credits - ? WHERE id = ? AND credits >= ?

-- 任务终态更新（幂等，已 done 则跳过）
UPDATE tasks SET status = 'done', ... WHERE id = ? AND status != 'done'

-- 用户生成锁（3 分钟超时自动释放）
UPDATE users SET generating_since = ? WHERE id = ?
  AND (generating_since = '' OR generating_since < ?)

-- BFL 任务抢锁（generating→saving，saving 卡 2 分钟也可抢）
UPDATE bfl_tasks SET status = 'saving' WHERE id = ?
  AND (status = 'generating' OR (status = 'saving' AND updated_at < ?))
```

## Queue 异步 Pipeline

```
POST /api/generate
  → 校验 + 扣积分 + 上传 R2 → 发 Queue 消息 → 返回 task_id

Queue Consumer（15 分钟墙钟）:
  1. Gemini 分析照片 → 3 个场景 prompt
  2. 顺序提交 3 个 BFL 生图任务（带 webhook）

BFL Webhook 回调（每个场景独立）:
  3. 下载 BFL 图 → 上传 R2
  4. 智能美颜 → 上传 R2
  5. checkAndFinalizeTask: 3 个都终态 → 标记 task done

补偿机制（前端轮询触发）:
  - generating > 30s 的 bfl_task → 主动 polling BFL API
  - saving > 1.5min 的 bfl_task → 重新处理
  - pending > 3min 的 bfl_task → 标记超时
```

## 按比例退款

```typescript
if (failedCount > 0) {
  const refundAmount = Math.ceil(totalCost * failedCount / totalScenes);
  await env.DB.prepare('UPDATE users SET credits = credits + ? WHERE id = ?').bind(refundAmount, userId).run();
  await env.DB.prepare('INSERT INTO credit_logs ...').bind(refundAmount, 'refund_partial_fail', ...).run();
}
```

## 超时保护

```typescript
// pending/analyzing > 12 分钟 → 标记失败 + 全额退款
// generating > 30 分钟 → 强制所有 bfl_tasks failed + finalize
```
