# PayPal 支付集成

## 两阶段提交流程

```
pending → paid → credited

POST /api/payment/create-order → PayPal create order → 返回 approve_url → 前端跳转
前端回调 /payment/success?token=orderId
POST /api/payment/capture-order
  → Phase 1: CAS pending→paid（PayPal capture + 记录 capture_id）
  → Phase 2: credits + 积分 + credit_logs + 标记 credited
```

## 幂等性保障

```typescript
if (payment.status === 'credited') return json({ ... }); // 已完成
if (payment.status === 'paid') { await creditUser(...); } // 重试 Phase 2
// Phase 1: CAS 防并发
const lock = await env.DB.prepare(
  `UPDATE payments SET status='paid', gateway_capture_id=? WHERE gateway_order_id=? AND status='pending'`
).bind(captureId, orderId).run();
if (!lock.meta.changes) return json({ ... }); // 已被处理
```

## creditUser 批量操作

```typescript
await env.DB.batch([
  env.DB.prepare('UPDATE users SET credits = credits + ? WHERE id = ?').bind(amount, userId),
  env.DB.prepare('INSERT INTO credit_logs (...) VALUES (...)').bind(...),
  env.DB.prepare('UPDATE payments SET status = "credited" WHERE id = ?').bind(paymentId),
]);
```

## 环境切换

正式: `PAYPAL_API_BASE = "https://api-m.paypal.com"`
沙箱: `PAYPAL_API_BASE = "https://api-m.sandbox.paypal.com"`
