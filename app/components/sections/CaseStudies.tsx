'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'eCommerce / DTC',
    client: 'Nova Brands Co.',
    metric: '3.8x',
    metricLabel: 'ROAS',
    description: 'Scaled from $8k/mo to $60k/mo ad spend in 90 days with AI-optimized creative testing and full-funnel paid media strategy.',
  },
  {
    tag: 'SaaS / B2B',
    client: 'Stellar Analytics',
    metric: '247%',
    metricLabel: 'Traffic Growth',
    description: 'Implemented technical SEO overhaul + AI content engine. Ranked 14 target keywords on page 1 within 5 months.',
  },
  {
    tag: 'Local Service',
    client: 'Apex Medical Group',
    metric: '4.2x',
    metricLabel: 'Lead Volume',
    description: 'Rebuilt Google Ads structure and launched location-specific landing pages. Reduced cost-per-lead by 62%.',
  },
  {
    tag: 'Real Estate',
    client: 'Crest Properties',
    metric: '91%',
    metricLabel: 'Conversion Lift',
    description: 'Redesigned the main site with conversion architecture. Monthly pipeline value increased from $200k to $1.2M.',
  },
];

export default function CaseStudies() {
  return (
    <section className="section-pad" style={{ background: 'transparent' }}>
      <div className="container-main">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '64px' }}>
          <div>
            <span style={{ 
              color: 'var(--accent-primary)', 
              fontWeight: 700, 
              fontSize: '12px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: '16px'
            }}>
              Proof of Results
            </span>
            <h2 style={{ maxWidth: '600px' }}>Systems That Deliver <span className="text-highlight">Outsized Returns</span></h2>
          </div>
          <Link href="/work" className="btn-white">
            View All Work <ArrowUpRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
        }}>
          {cases.map((c, i) => (
            <motion.div
              key={c.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-white"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '24px',
              }}>
                {c.tag}
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--text-tertiary)', fontWeight: 500, marginBottom: '8px' }}>
                  {c.client}
                </h3>
                <div style={{
                  fontSize: '48px',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}>
                  {c.metric}
                </div>
                <div style={{
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--accent-primary)',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}>
                  {c.metricLabel}
                </div>
              </div>

              <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--text-secondary)', marginBottom: '32px', flex: 1 }}>
                {c.description}
              </p>

              <Link
                href="/work"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
              >
                Case Study <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
