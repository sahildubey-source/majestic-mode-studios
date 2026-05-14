import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'AI Marketing Services — Web, Ads, SEO & Automation',
  description: 'Explore Majestic Mode Studios full-stack services: AI website development, performance marketing, social media, SEO, and automation systems for global brands.',
  alternates: { canonical: 'https://www.majesticmodestudios.com/services' },
  openGraph: {
    title: 'AI Marketing Services — Web, Ads, SEO & Automation | Majestic Mode Studios',
    description: 'Explore Majestic Mode Studios full-stack services: AI website development, performance marketing, social media, SEO, and automation systems for global brands.',
    url: 'https://www.majesticmodestudios.com/services',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
