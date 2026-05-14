import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'About Us — AI-Powered Growth Agency',
  description: 'Meet Majestic Mode Studios — a creative intelligence agency helping ambitious global brands dominate with AI video ads, paid media, SEO, and automation.',
  alternates: { canonical: 'https://www.majesticmodestudios.com/about' },
};

export default function AboutPage() {
  return <AboutClient />;
}
