# sickleaverights.com MVP 实现计划

> 日期: 2026-04-14 | 目标: 3 天内上线最小可用版本

## 目标

抢在 Reddit 热度窗口（1-2 周）内上线，先用辞职信生成器 + 2 篇 SEO 文章拿到流量，再迭代加功能。

## 技术栈（精简版 cloudflare-saas-starter）

| 层 | 技术 | 说明 |
|---|---|---|
| 前端 | Next.js 14 (App Router, `output: 'export'`) | 纯静态导出，零服务端 |
| 样式 | Tailwind CSS v4 | 快速 UI |
| 数据 | JSON 文件 | 政策数据随代码部署 |
| 部署 | Cloudflare Pages | 全球 CDN，自定义域名，免费 |
| SEO | next-sitemap + JSON-LD Schema | sitemap/robots 自动生成 |
| 分析 | GA4 脚本嵌入 | 免费 |
| 广告 | AdSense 脚本嵌入 | 上线后申请 |

> **不需要**：Worker 后端、D1、KV、Queue、OAuth、PayPal（后期加 Pro 版时再引入）

## 项目结构

```
sickleaverights/
├── src/                          # Next.js 项目根目录
│   ├── app/
│   │   ├── layout.tsx            # 根 layout（GA4 + AdSense script）
│   │   ├── page.tsx              # 首页 - 工具导航 + 价值主张
│   │   ├── resignation-letter-generator/
│   │   │   └── page.tsx          # 🔥 辞职信生成器（核心工具）
│   │   ├── blog/
│   │   │   ├── can-boss-deny-sick-leave/
│   │   │   │   └── page.tsx      # 🔥 SEO 文章 #1（事件驱动热词）
│   │   │   └── earned-leave-vs-sick-leave/
│   │   │       └── page.tsx      # 🔥 SEO 文章 #2（飙升对比词）
│   │   ├── privacy/
│   │   │   └── page.tsx          # AdSense 必须：隐私政策
│   │   ├── disclaimer/
│   │   │   └── page.tsx          # AdSense 必须：免责声明
│   │   └── sitemap.ts            # next-sitemap 配置
│   ├── components/
│   │   ├── Header.tsx            # 导航栏
│   │   ├── Footer.tsx            # 页脚（含法律链接）
│   │   ├── ResignationForm.tsx   # 辞职信表单组件
│   │   ├── LetterPreview.tsx     # 辞职信预览/复制/下载
│   │   └── AdSlot.tsx            # AdSense 广告位组件
│   ├── data/
│   │   └── resignation-templates.json  # 辞职信模板数据（6 种场景）
│   ├── lib/
│   │   ├── generate-letter.ts    # 模板引擎：变量替换生成辞职信
│   │   └── seo.ts                # SEO 工具函数（metadata/JSON-LD）
│   ├── next.config.js            # output: 'export' 配置
│   ├── tailwind.config.ts
│   ├── tsconfig.json
│   └── package.json
├── docs/                         # 项目文档（不部署）
├── PLAN.md
├── README.md
└── keyword-research-report.md
```

## 任务清单

### Phase 1: 项目骨架（Task 1-3）

- [ ] **Task 1**: 初始化 Next.js 项目 + Tailwind + TypeScript 配置
  - `npx create-next-app@14 src --typescript --tailwind --app --src-dir=false`
  - 配置 `next.config.js` → `output: 'export'`
  - 配置 Tailwind v4
  - 文件: `src/next.config.js`, `src/tailwind.config.ts`, `src/tsconfig.json`, `src/package.json`

- [ ] **Task 2**: 全局 Layout + Header/Footer 组件
  - 根 layout.tsx: meta viewport, 字体加载, GA4 script placeholder
  - Header: logo + 导航链接（首页 / 辞职信生成器 / 博客）
  - Footer: copyright + Privacy / Disclaimer 链接
  - 响应式设计，移动端汉堡菜单
  - 文件: `src/app/layout.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`

- [ ] **Task 3**: 首页
  - Hero: "Know Your Rights. Write Your Future." 标题 + 工具入口卡片
  - 价值主张区：3 个特性卡片（免费/专业/即用）
  - SEO metadata + JSON-LD Organization schema
  - 文件: `src/app/page.tsx`, `src/lib/seo.ts`

### Phase 2: 核心工具（Task 4-5）

- [ ] **Task 4**: 辞职信模板数据
  - 6 种场景模板 JSON: two-week-notice / immediate / professional / friendly / toxic-boss / career-change
  - 每个模板包含: id, name, description, template (含 `{{变量}}` 占位符), tone
  - 模板引擎函数: 接收 formData + templateId → 替换变量 → 返回完整信件
  - 文件: `src/data/resignation-templates.json`, `src/lib/generate-letter.ts`

- [ ] **Task 5**: 辞职信生成器页面
  - 表单: 你的名字 / 经理名字 / 公司名 / 最后工作日 / 辞职原因 / 语气风格（6选1）
  - 实时预览区: 渲染生成的信件
  - 操作按钮: 📋 复制到剪贴板 / 📄 下载为 .txt / 🔄 换模板
  - SEO: title="Free Resignation Letter Generator" + HowTo JSON-LD
  - 纯前端实现，`'use client'` 组件
  - 文件: `src/app/resignation-letter-generator/page.tsx`, `src/components/ResignationForm.tsx`, `src/components/LetterPreview.tsx`

### Phase 3: SEO 内容（Task 6-7）

- [ ] **Task 6**: 博客文章 "Can Your Boss Deny Sick Leave?"
  - 2000+ 字 SEO 长文，覆盖关键词: can boss deny sick leave, sick leave rights, FMLA
  - 结构: 引言 → 法律依据 → 各州差异 → 怎么办 → FAQ → CTA（辞职信生成器）
  - Article JSON-LD + Breadcrumb schema
  - 内嵌 AdSense 广告位（文中 2 个 + 侧边 1 个）
  - Indeed/ZipRecruiter affiliate 链接（"找新工作"段落）
  - 文件: `src/app/blog/can-boss-deny-sick-leave/page.tsx`

- [ ] **Task 7**: 博客文章 "Earned Leave vs Sick Leave"
  - 1500+ 字对比文章，覆盖关键词: earned leave vs sick leave, types of leave
  - 结构: 定义对比表 → 各国差异 → 常见误解 → 如何计算 → FAQ
  - Article JSON-LD
  - 文件: `src/app/blog/earned-leave-vs-sick-leave/page.tsx`

### Phase 4: 合规 + 部署（Task 8-10）

- [ ] **Task 8**: Privacy Policy + Disclaimer 页面
  - Privacy: GDPR/CCPA 合规模板，声明 GA4 + AdSense cookie 使用
  - Disclaimer: 声明非法律建议，内容仅供参考
  - 文件: `src/app/privacy/page.tsx`, `src/app/disclaimer/page.tsx`

- [ ] **Task 9**: SEO 收尾
  - next-sitemap 配置: 自动生成 sitemap.xml + robots.txt
  - 所有页面 metadata 检查: 唯一 title/description/OG 标签
  - AdSense 广告位组件: 响应式自适应广告单元
  - 文件: `src/next-sitemap.config.js`, `src/components/AdSlot.tsx`

- [ ] **Task 10**: Cloudflare Pages 部署
  - 项目根目录 build: `cd src && npm run build`
  - 输出目录: `src/out/`
  - 连接 GitHub → Cloudflare Pages 自动部署
  - 绑定自定义域名: sickleaverights.com
  - 验证: Lighthouse Performance ≥ 95, SEO ≥ 95

## 依赖清单

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.3.0",
    "typescript": "^5.5.0",
    "tailwindcss": "^4.0.0",
    "next-sitemap": "^4.2.0"
  }
}
```

## 后续迭代（MVP 上线后）

| 优先级 | 功能 | 预计时间 |
|:---:|------|:---:|
| P1 | 病假权利计算器 | +2 天 |
| P1 | 再加 5 篇 SEO 文章 | +3 天 |
| P2 | 员工权益检测器 | +2 天 |
| P2 | 模板库（15 种辞职信 + 8 种病假邮件） | +2 天 |
| P3 | 50 州 + 30 国政策数据库 | +3 天 |
| P3 | ~~Pro 辞职信包 $4.99~~ **可选/远期**：仅当月流量 >10k 再考虑，需加 Worker + PayPal | — |

## 验收标准

- [ ] 辞职信生成器可正常填写 → 预览 → 复制/下载
- [ ] 2 篇博文 Lighthouse SEO ≥ 95
- [ ] sitemap.xml + robots.txt 正常生成
- [ ] Cloudflare Pages 部署成功，sickleaverights.com 可访问
- [ ] 移动端响应式正常
- [ ] Privacy + Disclaimer 页面存在（AdSense 申请前置条件）
