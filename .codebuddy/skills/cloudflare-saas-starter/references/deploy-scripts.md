# 部署脚本模板

## deploy.sh（同仓库统一部署）

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"
ENV="${1:-production}"  # production 或 staging
ACTION="${2:-all}"      # worker|web|all

deploy_worker() {
  echo "🚀 发布 Worker ($ENV)..."
  if [ "$ENV" = "staging" ]; then
    npx wrangler deploy --env staging 2>&1 | cat
  else
    npx wrangler deploy 2>&1 | cat
  fi
}

deploy_web() {
  echo "🚀 构建并发布 Web ($ENV)..."
  cd web
  # staging 时设置环境变量
  if [ "$ENV" = "staging" ]; then
    NEXT_PUBLIC_API_URL="" npm run build 2>&1 | tail -5  # 同域，空即可
  else
    npm run build 2>&1 | tail -5
  fi
  cd ..
  # 部署静态文件到 Pages
  local project_name="myapp"
  [ "$ENV" = "staging" ] && project_name="myapp-staging"
  CLOUDFLARE_ACCOUNT_ID=xxx npx wrangler pages deploy web/out \
    --project-name "$project_name" --commit-dirty=true 2>&1 | cat
}

case "$ACTION" in
  worker) deploy_worker ;; web) deploy_web ;; all) deploy_worker; deploy_web ;;
  *) echo "用法: $0 [production|staging] [worker|web|all]" ;;
esac
echo "🎉 $ENV 部署完成！"
```

## set-secrets.sh

```bash
#!/bin/bash
set -e
cd "$(dirname "$0")"
ENV="${1:-production}"
VARS_FILE=".dev.vars"
EXTRA_ARGS=""
if [ "$ENV" = "staging" ]; then
  VARS_FILE=".dev_test.vars"
  EXTRA_ARGS="--env staging"
fi
while IFS='=' read -r key value; do
  [[ -z "$key" || "$key" =~ ^# ]] && continue
  key=$(echo "$key" | xargs); value=$(echo "$value" | xargs)
  [[ "$value" == your_* ]] && continue
  echo "$value" | npx wrangler secret put "$key" $EXTRA_ARGS 2>&1 | grep -E "Success|ERROR" || true
done < "$VARS_FILE"
```

## 前端环境变量

同域部署下前端 API 调用使用相对路径 `/api/xxx`，无需 NEXT_PUBLIC_API_URL。

本地开发时 Next.js 和 Worker 端口不同，需配置：

| 文件 | 场景 | NEXT_PUBLIC_API_URL |
|------|------|---------------------|
| .env.local | 本地开发 | http://localhost:8787 |
| (不设置) | 正式/staging | (空，用相对路径 /api/xxx) |

## 本地开发

```bash
# 启动 Worker（端口 8787）
npx wrangler dev

# 启动 Next.js（端口 3000）
cd web && npm run dev

# 或并行启动
npx concurrently "npx wrangler dev" "cd web && npm run dev"
```
