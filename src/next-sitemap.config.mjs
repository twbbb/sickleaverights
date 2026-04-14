/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://sickleaverights.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: [],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  transform: async (config, path) => {
    // 首页最高优先级
    if (path === '/') {
      return { loc: path, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() };
    }
    // 博客页面
    if (path.startsWith('/blog/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    }
    // 工具页面
    if (path === '/resignation-letter-generator/') {
      return { loc: path, changefreq: 'monthly', priority: 0.8, lastmod: new Date().toISOString() };
    }
    // 其他页面（privacy, disclaimer）
    return { loc: path, changefreq: 'yearly', priority: 0.3, lastmod: new Date().toISOString() };
  },
};
