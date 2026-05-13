'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const cases = [
  {
    tag: 'D2C Fashion',
    client: 'Veloura Fashion',
    metric: '17.8x',
    metricLabel: 'ROAS',
    description: 'Scaled a women’s fashion brand using high-converting Meta ad creatives, audience testing, and funnel optimization.',
  },
  {
    tag: 'Luxury Jewellery',
    client: 'Aurelia Jewels',
    metric: '8.23x',
    metricLabel: 'ROAS',
    description: 'Boosted revenue through festive campaign creatives, precision retargeting, and conversion-focused ad funnels.',
  },
  {
    tag: 'Wellness / Spirituality',
    client: 'Enlightened Circle',
    metric: '2,800+',
    metricLabel: 'Leads Generated',
    description: 'Executed large-scale lead generation campaigns with optimized targeting and low CPL acquisition.',
  },
  {
    tag: 'Education',
    client: 'ABGI Institute',
    metric: '708K+',
    metricLabel: 'Ad Clicks',
    description: 'Managed high-volume student acquisition campaigns with optimized CPC and lead-focused Google advertising.',
  },
  {
    tag: 'Healthcare',
    client: 'Swastikas CDC',
    metric: 'UI/UX',
    metricLabel: 'User Experience',
    description: 'Designed and developed a modern healthcare website experience focused on clarity, trust-building, and seamless navigation.',
  },
  {
    tag: 'Food & Beverage',
    client: 'Bowl Mami',
    metric: 'Social',
    metricLabel: 'Brand Growth',
    description: 'Created engaging social media creatives and content systems to strengthen online brand presence and audience engagement.',
  },
];

export default function CaseStudies() {
  return (
    <section className="section-pad" style={{ background: 'transparent' }}>
      <div className="container-main">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px', marginBottom: '32px' }}>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
