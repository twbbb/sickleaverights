---
name: cloudflare-saas-starter
description: Cloudflare 全栈 SaaS 应用脚手架。技术栈：Next.js (static export) + Cloudflare Workers/D1/R2/KV/Queue/Pages + Google OAuth + PayPal + Tailwind CSS。前后端同仓库，同域部署。当用户要创建新的 SaaS 项目、AI 图片生成类应用、或基于 Cloudflare 全栈开发时，应使用此 skill。涵盖项目结构、三环境部署、认证、积分支付、异步任务 pipeline、SEO、前端监控等完整模式。
---

# Cloudflare SaaS Starter

从 bdayphoto.com 项目提炼的全栈 SaaS 应用架构模式，前后端同仓库同域部署。

## 技术栈

| 层 | 技术 |
|---|---|
| 前端 | Next.js (App Router, static export) + Tailwind CSS v4 |
| 后端 | Cloudflare Workers (TypeScript) |
| 部署 | 前后端同域：Worker 服务 API (`/api/*`) + Pages 托管静态文件 |
| 数据库 | D1 (SQLite) |
| 文件存储 | R2（带生命周期规则自动清理） |
| Session | KV（14 天 TTL，同域 Cookie） |
| 异步任务 | Queues（15 分钟墙钟，突破 Worker 30s 限制） |
| 认证 | Google OAuth 2.0（同域 Cookie 直接设置） |
| 支付 | PayPal REST API v2（两阶段提交） |
| 日志 | 腾讯云 CLS（匿名 JSON 上传） |
| 前端监控 | 腾讯云 Aegis RUM |

## 核心架构：前后端同域

前后端部署在同一域名下（如 `myapp.com`），Worker 处理 `/api/*` 路由，Pages 托管前端静态文件。

**优势：**
- 认证简化：OAuth 回调后直接 Set-Cookie，无需跨域 exchange code
- Session 用 HttpOnly Cookie，比 localStorage 更安全
- 无 CORS 问题，前端 API 调用用相对路径 `/api/xxx`
- 一条命令部署全部

## 核心设计模式

### 1. 三环境管理
- production / staging / dev，wrangler.toml 统一管理
- 详见 `references/wrangler-config.md` 和 `references/deploy-scripts.md`

### 2. 同域认证
- OAuth 回调后直接 Set-Cookie + 302 回首页
- Session 基于 KV，HttpOnly Secure Cookie
- 前端 localStorage 缓存用户信息防 Header 闪烁
- 详见 `references/google-oauth.md`

### 3. 积分 + 支付
- PayPal 两阶段提交：pending → paid → credited，确保幂等
- CAS 乐观锁扣积分 + D1 batch 批量操作
- 详见 `references/paypal-payment.md`

### 4. 异步任务 Pipeline
- Queue Consumer 实现长时间异步任务（AI 生图等）
- Webhook + 补偿轮询双保险 + CAS 抢锁防并发
- 详见 `references/cas-queue-patterns.md`

### 5. SEO 架构
- 页面组件分离：page.tsx 服务端导出 metadata，组件 'use client'
- JSON-LD + 静态博客模块
- 详见 `references/nextjs-seo.md`

### 6. 前端通用模式
- 图片压缩、异步轮询、进度条、API 客户端
- 详见 `references/frontend-patterns.md`

### 7. 日志 + 监控
- Worker Logger (CLS) + 前端 Aegis RUM
- 详见 `references/logger-and-rum.md`

## 新项目启动清单

1. 按 `references/project-structure.md` 创建项目目录
2. 按 `references/wrangler-config.md` 配置 wrangler.toml
3. 创建 Cloudflare 资源（D1/R2/KV/Queue），填入 ID
4. 按 `references/deploy-scripts.md` 创建部署脚本
5. 实现认证（`references/google-oauth.md`）
6. 实现支付（`references/paypal-payment.md`）
7. 实现异步任务（`references/cas-queue-patterns.md`）
8. 配置 SEO（`references/nextjs-seo.md`）
9. 接入日志和监控（`references/logger-and-rum.md`）
