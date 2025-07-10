/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.awwtomation.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 1,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  // Explicitly include your important pages
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/services/blog-automation'),
    await config.transform(config, '/services/seo-automation'),
    await config.transform(config, '/services/crm-automation'),
    await config.transform(config, '/services/social-media-automation'),
    await config.transform(config, '/services/email-marketing-automation'),
    await config.transform(config, '/about'),
    await config.transform(config, '/blog'),
  ]
}