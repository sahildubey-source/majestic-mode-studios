import type { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Marketing Blog — AI, Ads & Growth Insights',
  description: 'Insights on AI marketing, paid ads, SEO, and growth systems from the Majestic Mode Studios team.',
  alternates: { canonical: 'https://www.majesticmodestudios.com/blog' },
  openGraph: {
    title: 'Marketing Blog — AI, Ads & Growth Insights | Majestic Mode Studios',
    description: 'Insights on AI marketing, paid ads, SEO, and growth systems from the Majestic Mode Studios team.',
    url: 'https://www.majesticmodestudios.com/blog',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
