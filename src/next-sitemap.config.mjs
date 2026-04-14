/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://sickleaverights.com',
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: [],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
