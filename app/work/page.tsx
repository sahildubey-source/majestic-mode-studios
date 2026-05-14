import type { Metadata } from 'next';
import WorkClient from './WorkClient';

export const metadata: Metadata = {
  title: 'Case Studies & Results — Real Brand Growth',
  description: 'See how Majestic Mode Studios delivered 17.8x ROAS, 2800+ leads, and 708K+ ad clicks for brands across fashion, jewellery, healthcare, and education.',
  alternates: { canonical: 'https://www.majesticmodestudios.com/work' },
  openGraph: {
    title: 'Case Studies & Results — Real Brand Growth | Majestic Mode Studios',
    description: 'See how Majestic Mode Studios delivered 17.8x ROAS, 2800+ leads, and 708K+ ad clicks for brands across fashion, jewellery, healthcare, and education.',
    url: 'https://www.majesticmodestudios.com/work',
  },
};

export default function WorkPage() {
  return <WorkClient />;
}
