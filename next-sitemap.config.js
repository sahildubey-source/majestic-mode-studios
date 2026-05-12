/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://majesticmodestudios.com',
  generateRobotsTxt: false,
  sitemapSize: 7000,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/services'),
    await config.transform(config, '/work'),
    await config.transform(config, '/about'),
    await config.transform(config, '/blog'),
    await config.transform(config, '/contact'),
  ],
};
