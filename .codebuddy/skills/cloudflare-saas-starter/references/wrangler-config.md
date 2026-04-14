# wrangler.toml 三环境配置模板

```toml
name = "myapp"
account_id = "YOUR_ACCOUNT_ID"
main = "worker/src/index.ts"
compatibility_date = "2024-12-01"

[observability]
enabled = true
[observability.logs]
enabled = true
invocation_logs = true

# ======== 正式环境 (默认, wrangler deploy) ========
[vars]
ENVIRONMENT = "production"
APP_URL = "https://myapp.com"
GOOGLE_REDIRECT_URI = "https://myapp.com/api/auth/google/callback"
PAYPAL_API_BASE = "https://api-m.paypal.com"

[[d1_databases]]
binding = "DB"
database_name = "myapp-db"
database_id = "xxx"

[[r2_buckets]]
binding = "R2"
bucket_name = "myapp-files"

[[kv_namespaces]]
binding = "KV"
id = "xxx"

[[queues.producers]]
queue = "myapp-tasks"
binding = "TASK_QUEUE"

[[queues.consumers]]
queue = "myapp-tasks"
max_retries = 2
max_batch_timeout = 0

# ======== 测试环境 (wrangler deploy --env staging) ========
[env.staging]
name = "myapp-staging"
[env.staging.vars]
ENVIRONMENT = "staging"
APP_URL = "https://myapp-staging.pages.dev"
GOOGLE_REDIRECT_URI = "https://myapp-staging.pages.dev/api/auth/google/callback"
PAYPAL_API_BASE = "https://api-m.sandbox.paypal.com"
# ... staging 资源 ID ...

# ======== 本地开发 (wrangler dev) ========
[env.dev]
[env.dev.vars]
ENVIRONMENT = "development"
APP_URL = "http://localhost:3000"
GOOGLE_REDIRECT_URI = "http://localhost:8787/api/auth/google/callback"
```

## Env interface 模板

```typescript
export interface Env {
  DB: D1Database;
  R2: R2Bucket;
  KV: KVNamespace;
  TASK_QUEUE: Queue;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
  GOOGLE_REDIRECT_URI: string;
  PAYPAL_CLIENT_ID: string;
  PAYPAL_CLIENT_SECRET: string;
  PAYPAL_API_BASE: string;
  APP_URL: string;
  SESSION_SECRET: string;
  ENVIRONMENT: string;
}
```

注意：同域部署下 APP_URL 和 API 是同一个域名，GOOGLE_REDIRECT_URI 也在同域下。
