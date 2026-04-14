# 项目结构模板

前后端同仓库，共享类型，统一部署。

```
project/
├── package.json              # 根 package：scripts 管理 dev/build/deploy
├── wrangler.toml             # Workers 配置（三环境 + D1/R2/KV/Queue bindings）
├── tsconfig.json             # 根 tsconfig
├── .dev.vars                 # 正式环境密钥（不入 git）
├── .dev_test.vars            # 测试环境密钥（不入 git）
├── deploy.sh                 # 一键部署脚本 (production/staging)
├── set-secrets.sh            # Secrets 批量设置
│
├── shared/                   # 前后端共享
│   └── types.ts              # 共享 TypeScript 类型（API 响应、业务模型）
│
├── worker/                   # Cloudflare Worker 后端（API 层）
│   └── src/
│       ├── env.ts            # Env interface（bindings + secrets + vars）
│       ├── index.ts          # 入口：fetch 路由分发 + queue 消费
│       ├── routes/           # 路由模块（auth, generate, payment, webhook...）
│       ├── services/         # 业务服务（AI 调用, 美颜, 图片处理...）
│       └── utils/
│           ├── common.ts     # uuid(), nowISO(), minutesAgo(), expiresAt()
│           ├── logger.ts     # 腾讯云 CLS 日志上报
│           ├── response.ts   # json(), error(), cors(), redirect()
│           └── session.ts    # KV-based Session（HttpOnly Cookie）
│
├── web/                      # Next.js 前端
│   ├── next.config.ts        # output:'export', images:{unoptimized:true}, trailingSlash:true
│   ├── postcss.config.mjs    # @tailwindcss/postcss
│   └── src/
│       ├── app/              # App Router 页面（服务端组件，导出 metadata）
│       ├── components/       # 客户端组件（从 page 分离，支持 metadata 导出）
│       └── lib/
│           ├── api.ts        # API 客户端（Cookie 自动携带，相对路径 /api/xxx）
│           ├── auth.tsx      # AuthContext（Cookie 认证 + localStorage 用户缓存）
│           └── rum.tsx       # 前端监控（Aegis RUM）
│
├── public/                   # 静态资源（favicon, og-image, robots.txt, sitemap.xml）
├── research/                 # 产品文档、DB Schema、API 规格
└── paizhang/                 # 排障工具（DB 查询、日志查看脚本）
```

## 同域部署方式

Worker 和 Pages 部署在同一域名下：
- `myapp.com/api/*` → Worker 处理
- `myapp.com/*` → Pages 静态文件

实现方式：
1. Next.js `output: 'export'` 生成静态文件到 `web/out/`
2. Cloudflare Pages 部署静态文件，绑定自定义域名
3. Worker 部署到同域名的 `/api/*` 路由（Workers Routes 或 Pages Functions）

也可用 Pages Functions 方式：把 worker 代码放到 `functions/` 目录下，Pages 自动挂载。
