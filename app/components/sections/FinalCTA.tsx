'use client';

import { motion } from 'framer-motion';
import Script from 'next/script';

export default function FinalCTA() {
  return (
    <section className="section-pad" style={{
      position: 'relative',
      background: 'transparent',
      overflow: 'hidden',
    }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      <div className="container-main" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span style={{
            color: 'var(--accent-primary)',
            fontWeight: 700,
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: '16px'
          }}>
            Ready for results?
          </span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            maxWidth: '800px',
            margin: '0 auto 24px',
            lineHeight: 1.1,
          }}>
            Book Your Free <span className="text-highlight">Strategy Audit</span>
          </h2>
          <p style={{
            maxWidth: '560px',
            margin: '0 auto 64px',
            fontSize: '18px',
            color: 'var(--text-secondary)',
          }}>
            Select a time that works for you. No sales pitch. Just a 30-minute deep dive into your brand&apos;s growth opportunities.
          </p>
        </motion.div>

        {/* Calendly Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-white"
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '24px',
            minHeight: '700px',
            overflow: 'hidden'
          }}
        >
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/majesticmode"
            style={{ minWidth: '320px', height: '700px' }}
          />
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="lazyOnload"
          />
        </motion.div>

        {/* Trust signals */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'center',
          marginTop: '48px',
        }}>
          {[
            { icon: '📅', text: "30-Min Session" },
            { icon: '⚡', text: "Instant Booking" },
          ].map(item => (
            <div key={item.text} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--text-tertiary)',
            }}>
              <span>{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
