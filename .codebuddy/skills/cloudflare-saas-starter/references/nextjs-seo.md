# Next.js SEO 架构

## 页面组件分离（解决 'use client' 无法导出 metadata）

```
src/app/xxx/page.tsx          → 服务端组件：export metadata + JsonLd + import 客户端组件
src/components/xxx-page.tsx   → 'use client' 客户端组件：所有交互逻辑
```

```tsx
// app/page.tsx（服务端）
import type { Metadata } from "next";
import HomePage from "@/components/home-page";
import { JsonLd } from "@/components/json-ld";

export const metadata: Metadata = {
  title: "...", description: "...", keywords: [...],
  openGraph: { ... }, twitter: { ... },
  alternates: { canonical: "https://app.com" },
};
// 私有页面: robots: "noindex, nofollow"

export default function Page() {
  return <><JsonLd data={jsonLdData} /><HomePage /></>;
}
```

## JsonLd 组件

```tsx
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
```

## JSON-LD 类型清单

| 位置 | Schema 类型 |
|------|------------|
| layout | WebSite + Organization |
| 首页 | SoftwareApplication + FAQPage |
| 定价页 | Product + Offer |
| 博客列表 | Blog |
| 博客详情 | BlogPosting + BreadcrumbList |

## 静态博客模块

```
src/lib/blog-data.ts        → BlogPost[] 结构化数据
src/app/blog/page.tsx        → 列表页
src/app/blog/[slug]/page.tsx → generateStaticParams + generateMetadata
```

## robots.txt / sitemap.xml

- robots.txt: Allow 公开页，Disallow 私有页（/gallery/、/generate/ 等）
- sitemap.xml: 仅公开页面 + 博客文章
