'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MidCTA() {
  return (
    <section className="section-pad" style={{
      position: 'relative',
      background: 'transparent',
      overflow: 'hidden',
    }}>
      <div className="container-main" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-white"
          style={{ 
            maxWidth: '900px', 
            margin: '0 auto', 
            padding: 'clamp(40px, 8vw, 80px)',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FBFBFE 100%)',
            border: '1px solid var(--accent-soft)',
          }}
        >
          <span style={{ 
            color: 'var(--accent-primary)', 
            fontWeight: 700, 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: '20px'
          }}>
            The Next Step
          </span>
          <h2 style={{ maxWidth: '700px', margin: '0 auto 24px', fontSize: 'clamp(32px, 4vw, 48px)' }}>
            Ready to Build Your <span className="text-highlight">Growth Engine?</span>
          </h2>
          <p style={{ maxWidth: '580px', margin: '0 auto 48px', fontSize: '18px', color: 'var(--text-secondary)' }}>
            Stop wasting budget on strategies that don't compound. Let's audit your current systems and show you the roadmap to dominance.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-purple" style={{ padding: '18px 40px', fontSize: '16px' }}>
              Book Your Free Call ↗
            </Link>
            <Link href="/services" className="btn-white" style={{ padding: '18px 40px', fontSize: '16px' }}>
              Explore Services
            </Link>
          </div>

          <p style={{ marginTop: '32px', fontSize: '14px', color: 'var(--text-tertiary)', fontWeight: 500 }}>
             ⚡ 100% Free Strategy Session. No pressure.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
