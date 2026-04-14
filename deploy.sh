#!/bin/bash
# 部署脚本：构建 Next.js 并发布到 Cloudflare Pages
# 使用方式：./deploy.sh

set -e

PROJECT_NAME="sickleaverights"

# 检查环境变量
if [ -z "$cloudflare_token" ] || [ -z "$cloudflare_accountid" ]; then
  echo "❌ 缺少环境变量：cloudflare_token 或 cloudflare_accountid"
  exit 1
fi

echo "🔨 构建中..."
cd src && npm run build && cd ..

echo "🚀 部署到 Cloudflare Pages..."
CLOUDFLARE_API_TOKEN=$cloudflare_token \
CLOUDFLARE_ACCOUNT_ID=$cloudflare_accountid \
npx wrangler@4.82.0 pages deploy src/out \
  --project-name $PROJECT_NAME \
  --branch main

echo "✅ 部署完成！"
echo "   预览地址: https://${PROJECT_NAME}.pages.dev"
echo "   正式地址: https://sickleaverights.com"
