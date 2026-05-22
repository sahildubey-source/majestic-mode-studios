import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.majesticmodestudios.com';

  // Static routes
  const staticRoutes = [
    '',
    '/services',
    '/work',
    '/about',
    '/blog',
    '/contact',
    '/terms',
    '/privacy-policy',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/work' || route === '/blog' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1 : (route === '/services' || route === '/work' ? 0.8 : (route === '/blog' ? 0.7 : 0.5)),
  }));

  // Dynamic blog post slugs (all 9 valid posts)
  const blogSlugs = [
    'ai-video-ads-2025',
    'social-media-ecommerce-2025',
    'google-ads-failing',
    'google-ads-10x-roas',
    'marketing-funnel-ecommerce',
    'instagram-reels-strategy-2025',
    'automation-marketing-agency',
    'landing-page-conversion-rate',
    'seo-compound-growth',
  ];

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
