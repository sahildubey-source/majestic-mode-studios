'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const caseStudies = [
  { 
    tag: 'D2C Fashion', 
    client: 'Veloura Fashion', 
    metric: '17.8x ROAS', 
    description: 'Scaled a women’s fashion brand to ₹67.9L in revenue using high-converting Meta ad creatives, audience testing, and funnel optimization.', 
    services: ['Meta Ads', 'Performance Marketing', 'Creative Strategy'], 
    color: 'var(--accent-primary)' 
  },
  { 
    tag: 'Luxury Jewellery', 
    client: 'Aurelia Jewels', 
    metric: '8.23x ROAS', 
    description: 'Boosted revenue for a jewellery brand through festive campaign creatives, precision retargeting, and conversion-focused ad funnels.', 
    services: ['Meta Ads', 'Retargeting', 'Conversion Funnels'], 
    color: 'var(--accent-peach)' 
  },
  { 
    tag: 'Wellness / Spirituality', 
    client: 'Enlightened Circle', 
    metric: '2,800+ Leads', 
    description: 'Executed large-scale lead generation campaigns for meditation and wellness programs with optimized targeting and low CPL acquisition.', 
    services: ['Lead Generation', 'Meta Ads', 'Audience Targeting'], 
    color: 'var(--accent-primary)' 
  },
  { 
    tag: 'Education', 
    client: 'ABGI Institute', 
    metric: '708K+ Clicks', 
    description: 'Managed high-volume student acquisition campaigns with optimized CPC, large-scale awareness reach, and lead-focused Google advertising.', 
    services: ['Google Ads', 'Lead Generation', 'Paid Media'], 
    color: 'var(--accent-peach)' 
  },
  { 
    tag: 'Healthcare', 
    client: 'Swastikas CDC', 
    metric: 'UI/UX Design', 
    description: 'Designed and developed a modern healthcare website experience focused on clarity, trust-building, and seamless user navigation for families.', 
    services: ['Web Development', 'UI/UX', 'Healthcare Branding'], 
    color: 'var(--accent-primary)' 
  },
  { 
    tag: 'Food & Beverage', 
    client: 'Bowl Mami', 
    metric: 'Social Growth', 
    description: 'Created visually engaging social media creatives and content systems to strengthen online brand presence and audience engagement.', 
    services: ['Social Media Management', 'Creative Design', 'Brand Strategy'], 
    color: 'var(--accent-peach)' 
  },
];

export default function WorkPage() {
  return (
    <>
      <section style={{ paddingTop: '180px', paddingBottom: '100px', background: 'transparent' }}>
        <div className="container-main" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
              ✦ Our Results
            </span>
            <h1 style={{ maxWidth: '800px', margin: '0 auto 24px' }}>Proven Performance <br/>For <span className="text-highlight">Ambitious Brands</span></h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
              We don't just provide services. We provide outcomes. Here is the proof of what happens when creative intelligence meets relentless execution.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'transparent' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '32px' }}>
            {caseStudies.map((c, i) => (
              <motion.div
                key={c.client}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-white"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: c.color,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  padding: '6px 12px',
                  background: 'var(--bg-base)',
                  borderRadius: '100px',
                  display: 'inline-block',
                  width: 'fit-content'
                }}>
                  {c.tag}
                </div>

                <h3 style={{ fontSize: '20px', color: 'var(--text-tertiary)', fontWeight: 500, marginBottom: '8px' }}>{c.client}</h3>
                
                <div style={{ 
                  fontFamily: "'Syne', sans-serif", 
                  fontWeight: 800, 
                  fontSize: '56px', 
                  color: 'var(--text-primary)', 
                  letterSpacing: '-0.03em', 
                  lineHeight: 1, 
                  marginBottom: '24px' 
                }}>
                  {c.metric}
                </div>

                <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '32px', flex: 1 }}>
                  {c.description}
                </p>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
                  {c.services.map(s => (
                    <span key={s} style={{ 
                      fontSize: '12px', 
                      fontWeight: 600,
                      padding: '6px 12px', 
                      background: 'var(--accent-soft)',
                      borderRadius: '100px', 
                      color: 'var(--accent-primary)' 
                    }}>
                      {s}
                    </span>
                  ))}
                </div>


              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '140px 0', background: 'transparent', textAlign: 'center' }}>
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-white"
            style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 40px' }}
          >
            <h2 style={{ maxWidth: '600px', margin: '0 auto 24px' }}>Ready to Be Our Next <span className="text-highlight">Success Story?</span></h2>
            <p style={{ maxWidth: '480px', margin: '0 auto 48px', fontSize: '18px', color: 'var(--text-secondary)' }}>
              Book your free strategy audit and let&apos;s map out the growth infrastructure your brand needs to dominate.
            </p>
            <Link href="/contact" className="btn-purple" style={{ padding: '18px 40px', fontSize: '16px' }}>
              Book Your Free Call ↗
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
