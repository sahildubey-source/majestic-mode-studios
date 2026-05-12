import type { Metadata } from 'next';
import FinalCTA from '../components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Contact | Book Your Free Strategy Call',
  description: 'Book a free 30-minute strategy call with Majestic Mode Studios. We\'ll audit your marketing and show you exactly how to grow.',
  alternates: { canonical: 'https://majesticmodestudios.com/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section style={{ 
        paddingTop: '180px', 
        paddingBottom: '40px', 
        background: 'transparent', 
        textAlign: 'center' 
      }}>
        <div className="container-main">
          <span style={{ 
            color: 'var(--accent-primary)', 
            fontWeight: 700, 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: '16px'
          }}>
            ✦ Let&apos;s Talk
          </span>
          <h1 style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Start With a <span className="text-highlight">Conversation</span>
          </h1>
          <p style={{ maxWidth: '520px', margin: '0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
            No sales pitch. No pressure. Just a 30-minute call to understand your brand and identify your biggest growth levers.
          </p>
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
