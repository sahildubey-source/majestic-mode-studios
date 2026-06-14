import type { Metadata } from 'next';
import ContactForm from '../components/sections/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | Get Your Free Marketing Audit',
  description: 'Tell us about your brand and get a free 30-minute strategy audit from Majestic Mode Studios. No pitch, no pressure — just a clear growth roadmap.',
  alternates: { canonical: 'https://www.majesticmodestudios.com/contact' },
  openGraph: {
    title: 'Contact | Get Your Free Marketing Audit | Majestic Mode Studios',
    description: 'Tell us about your brand and get a free 30-minute strategy audit from Majestic Mode Studios. No pitch, no pressure — just a clear growth roadmap.',
    url: 'https://www.majesticmodestudios.com/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section style={{
        paddingTop: '160px',
        paddingBottom: '24px',
        background: 'transparent',
        textAlign: 'center',
      }}>
        <div className="container-main">
          <span style={{
            color: 'var(--accent-primary)',
            fontWeight: 700,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: '16px',
          }}>
            ✦ Free Audit — No Commitment
          </span>
          <h1 style={{ maxWidth: '720px', margin: '0 auto 20px', lineHeight: 1.1 }}>
            Tell Us About{' '}
            <span className="text-highlight">Your Brand</span>
          </h1>
          <p style={{
            maxWidth: '480px',
            margin: '0 auto',
            fontSize: '18px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
          }}>
            Fill in the form below. We read every submission personally and reply within 2 hours with a clear plan.
          </p>
        </div>
      </section>

      {/* ── Main: Form + Right Rail ── */}
      <section className="section-pad" style={{ background: 'transparent' }}>
        <div className="container-main">
          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,0.6fr)',
            gap: 'clamp(28px, 4vw, 60px)',
            alignItems: 'start',
          }}>

            {/* ─ Left: Form ─ */}
            <ContactForm />

            {/* ─ Right: Info Rail ─ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* What Happens Next */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
              }}>
                <p style={{
                  fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: 'var(--accent-primary)',
                  marginBottom: '20px',
                }}>
                  What Happens Next
                </p>
                {[
                  {
                    num: '01',
                    title: 'We review your message',
                    body: 'Our team reads every submission personally — no templates.',
                  },
                  {
                    num: '02',
                    title: 'Reply within 2 hours',
                    body: 'Direct email with a calendar link to pick a convenient time.',
                  },
                  {
                    num: '03',
                    title: '30-min strategy audit',
                    body: 'We map your biggest growth levers. Zero pitch, zero pressure.',
                  },
                ].map((step, i) => (
                  <div
                    key={step.num}
                    style={{
                      display: 'flex',
                      gap: '14px',
                      paddingBottom: i < 2 ? '20px' : 0,
                      marginBottom: i < 2 ? '20px' : 0,
                      borderBottom: i < 2 ? '1px solid var(--border-light)' : 'none',
                    }}
                  >
                    <div style={{
                      flexShrink: 0,
                      width: '34px', height: '34px',
                      borderRadius: '50%',
                      background: 'var(--accent-soft)',
                      border: '1px solid var(--border-accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: 800, color: 'var(--accent-primary)',
                    }}>
                      {step.num}
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '13px', marginBottom: '3px' }}>
                        {step.title}
                      </p>
                      <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(123,92,240,0.05) 0%, rgba(255,138,101,0.05) 100%)',
                border: '1px solid var(--border-accent)',
                borderRadius: '20px',
                padding: '24px',
              }}>
                <p style={{
                  fontSize: '11px', fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: 'var(--accent-primary)', marginBottom: '16px',
                }}>
                  Why brands choose us
                </p>
                {[
                  { icon: '⚡', text: 'Average reply in under 2 hrs' },
                  { icon: '🌍', text: 'Clients across 12+ countries' },
                  { icon: '📈', text: '4.6× average ROAS delivered' },
                  { icon: '🔒', text: 'Your data stays private. Always.' },
                ].map(b => (
                  <div key={b.text} style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    marginBottom: '12px', fontSize: '13px', color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}>
                    <span style={{ fontSize: '16px', lineHeight: 1 }}>{b.icon}</span>
                    {b.text}
                  </div>
                ))}
              </div>

              {/* Prefer email directly */}
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: '16px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}>
                <span style={{
                  width: '40px', height: '40px', flexShrink: 0,
                  background: 'var(--accent-soft)',
                  borderRadius: '12px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px',
                }}>
                  ✉
                </span>
                <div>
                  <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', marginBottom: '2px' }}>
                    Prefer email?
                  </p>
                  <a
                    href="mailto:hello@majesticmodestudios.com"
                    className="contact-email-link"
                    style={{ fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}
                  >
                    hello@majesticmodestudios.com
                  </a>
                </div>
              </div>

              {/* Or book a call link */}
              <div style={{ textAlign: 'center', paddingTop: '4px' }}>
                <p style={{ fontSize: '13px', color: 'var(--text-tertiary)', marginBottom: '10px' }}>
                  Or skip the form and book directly —
                </p>
                <Link
                  href="https://calendly.com/majesticmode/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-white"
                  style={{ fontSize: '13px', padding: '10px 20px', borderRadius: '10px', display: 'inline-flex' }}
                >
                  📅 Book a Call on Calendly →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
