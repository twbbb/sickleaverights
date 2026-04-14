# Deployment Guide — SickLeaveRights

## Cloudflare Pages Setup

1. Push this repo to GitHub
2. Go to Cloudflare Dashboard → Pages → Create a project
3. Connect GitHub repository: `sickleaverights`
4. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `cd src && npm run build`
   - **Build output directory**: `src/out`
   - **Node.js version**: 18
5. Deploy!

## Custom Domain

After deployment, go to Pages → Custom domains → Add `sickleaverights.com`

## After Go-Live Checklist

- [ ] Replace GA4 placeholder in `src/app/layout.tsx` (line ~26)
- [ ] Replace AdSense placeholder in `src/app/layout.tsx` (line ~22)
- [ ] Replace AdSense slot IDs in AdSlot components
- [ ] Apply for Google AdSense (requires Privacy Policy + Disclaimer pages ✓)
- [ ] Submit sitemap to Google Search Console: https://sickleaverights.com/sitemap.xml

## Local Development

```bash
cd src
npm run dev     # start dev server at localhost:3000
npm run build   # production build + sitemap generation
```
