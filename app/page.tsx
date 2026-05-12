import type { Metadata } from 'next';
import Hero from './components/sections/Hero';
import PainPoints from './components/sections/PainPoints';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import MidCTA from './components/sections/MidCTA';
import CaseStudies from './components/sections/CaseStudies';
import Testimonials from './components/sections/Testimonials';
import TechStack from './components/sections/TechStack';
import FAQ from './components/sections/FAQ';
import FinalCTA from './components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'AI-Powered Creative & Growth Studio | Majestic Mode Studios',
  description: 'Majestic Mode Studios builds full-stack growth systems for ambitious global brands — AI video ads, paid media, SEO, and automation that compound results. Book your free strategy audit today.',
  alternates: {
    canonical: 'https://www.majesticmodestudios.com',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <Process />
      <MidCTA />
      <CaseStudies />
      <Testimonials />
      <TechStack />
      <FAQ />
      <FinalCTA />
    </>
  );
}
