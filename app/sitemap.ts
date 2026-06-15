import { MetadataRoute } from 'next';
import { client } from '@/sanity/lib/client';
import { ALL_POST_SLUGS_QUERY } from '@/sanity/lib/queries';

export const revalidate = 3600; // Revalidate sitemap every hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  // Fetch blog post slugs dynamically from Sanity
  let blogSlugs: { slug: string }[] = [];
  try {
    blogSlugs = await client.fetch(ALL_POST_SLUGS_QUERY);
  } catch (e) {
    // Fail gracefully — sitemap won't include blog posts if Sanity is unreachable
    console.error('Sitemap: failed to fetch blog slugs from Sanity', e);
  }

  const blogEntries = blogSlugs.map(({ slug }) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
