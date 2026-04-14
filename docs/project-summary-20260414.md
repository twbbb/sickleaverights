# 项目总结 — sickleaverights.com MVP

> 完成时间：2026-04-14

## 🎯 目标

为 `sickleaverights.com` 构建一个**零维护被动收入站**，通过长尾 SEO 获取自然流量，靠 AdSense + Affiliate 自动变现。

---

## 🏗️ 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Next.js 14 App Router，`output: 'export'` 纯静态导出 |
| 样式 | Tailwind CSS v3 |
| 语言 | TypeScript 5 |
| 数据 | JSON 文件（零数据库） |
| SEO | next-sitemap（自动生成 sitemap.xml + robots.txt） |
| 部署目标 | Cloudflare Pages |

---

## 📁 创建的文件结构

```
src/
├── app/
│   ├── layout.tsx                             # 根 Layout（GA4/AdSense 预留）
│   ├── page.tsx                               # 首页 Hero + 工具卡片
│   ├── resignation-letter-generator/page.tsx  # 辞职信生成器页
│   ├── blog/
│   │   ├── can-boss-deny-sick-leave/page.tsx  # SEO 文章 #1（2000+ 字）
│   │   └── earned-leave-vs-sick-leave/page.tsx # SEO 文章 #2（1500+ 字）
│   ├── privacy/page.tsx                       # 隐私政策（AdSense 前置）
│   └── disclaimer/page.tsx                    # 免责声明（AdSense 前置）
├── components/
│   ├── Header.tsx                             # 导航栏（响应式 + 汉堡菜单）
│   ├── Footer.tsx                             # 页脚（法律链接）
│   ├── ResignationForm.tsx                    # 辞职信表单（6 种风格选择）
│   ├── LetterPreview.tsx                      # 预览 + 复制 + 下载
│   └── AdSlot.tsx                             # AdSense 广告位占位组件
├── data/
│   └── resignation-templates.json             # 6 种辞职信场景模板
├── lib/
│   ├── generate-letter.ts                     # 模板引擎（变量替换）
│   └── seo.ts                                 # SEO 工具函数（metadata/JSON-LD）
└── next-sitemap.config.js                     # sitemap 配置
```

---

## ✅ 核心功能

### 辞职信生成器

- 6 种语气模板：Two-Week Notice / Immediate / Professional / Friendly / Toxic Boss / Career Change
- 纯前端实现，零服务端，隐私安全
- 实时预览 + 一键复制剪贴板 + 下载 `.txt`

### SEO 博客文章

- *Can Your Boss Deny Sick Leave?* — 覆盖 FMLA、州法律、维权步骤，嵌入 Indeed/ZipRecruiter affiliate 链接
- *Earned Leave vs Sick Leave* — 对比表 + US/India/UK 三国比较 + FAQ

### SEO 基础设施

- 每页独立 `metadata`（title/description/OG/canonical）
- Article + BreadcrumbList + HowTo + Organization JSON-LD Schema
- 自动生成 `sitemap.xml` + `robots.txt`

### 合规页面（AdSense 申请前置条件）

- Privacy Policy：GDPR/CCPA 合规，声明 GA4 + AdSense cookie
- Disclaimer：声明非法律建议 + Affiliate 披露

---

## 📊 构建结果

```
Route                                    Size     First Load JS
○ /                                     175 B       96.3 kB
○ /resignation-letter-generator         4.6 kB      101 kB
○ /blog/can-boss-deny-sick-leave        420 B       96.5 kB
○ /blog/earned-leave-vs-sick-leave      420 B       96.5 kB
○ /privacy                              142 B       87.5 kB
○ /disclaimer                           142 B       87.5 kB
```

所有 6 个页面 HTTP 200，构建零错误。

---

## 🚀 上线步骤（剩余）

1. 替换 `src/app/layout.tsx` 中的 GA4 ID 和 AdSense ID
2. 按 `DEPLOY.md` 连接 GitHub → Cloudflare Pages
   - 构建命令：`cd src && npm run build`
   - 输出目录：`src/out`
   - Node.js 版本：18
3. 绑定自定义域名 `sickleaverights.com`
4. Google Search Console 提交 sitemap：`https://sickleaverights.com/sitemap.xml`
5. 申请 Google AdSense（Privacy + Disclaimer 页面已就绪）

---

## 📈 后续迭代计划

| 优先级 | 功能 | 预计时间 |
|:---:|------|:---:|
| P1 | 病假权利计算器 | +2 天 |
| P1 | 再加 5 篇 SEO 文章 | +3 天 |
| P2 | 员工权益检测器 | +2 天 |
| P2 | 模板库（15 种辞职信 + 8 种病假邮件） | +2 天 |
| P3 | 50 州 + 30 国政策数据库 | +3 天 |
