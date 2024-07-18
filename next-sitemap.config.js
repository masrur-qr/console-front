/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://itisconsole.com', // Replace with your actual domain
    changefreq: 'daily', // Default changefreq for all URLs
    priority: 0.7, // Default priority for all URLs
    sitemapSize: 5000,
    generateRobotsTxt: true,
    exclude: ['/admin/*', '/api/*'],
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/', disallow: ['/admin', '/api'] }],
      additionalSitemaps: [
        'https://itisconsole.com/my-custom-sitemap-1.xml',
        'https://itisconsole.com/my-custom-sitemap-2.xml',
      ],
    },
    // Additional configurations for specific URLs
    // Ensure to replace '/en', '/ru', '/en/portfolio', '/ru/portfolio', '/en/brief', '/ru/brief' with actual paths in your project
    i18n: true, // Enable i18n support
    locales: ['en', 'ru'], // Add all supported locales here
    defaultLocale: 'en', // Default locale
    pagesConfig: {
      '/en': {
        changefreq: 'daily',
        priority: 1.0,
      },
      '/ru': {
        changefreq: 'daily',
        priority: 1.0,
      },
      '/en/portfolio': {
        changefreq: 'weekly',
        priority: 0.8,
      },
      '/ru/portfolio': {
        changefreq: 'weekly',
        priority: 0.8,
      },
      '/en/brief': {
        changefreq: 'monthly',
        priority: 0.6,
      },
      '/ru/brief': {
        changefreq: 'monthly',
        priority: 0.6,
      },
    },
  };
  