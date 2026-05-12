'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Strategy Audit',
    description: 'We analyze your brand, market, and competitors to find your biggest growth opportunities and identify exactly where money is being left on the table.',
    icon: '🔎',
  },
  {
    number: '02',
    title: 'Systems Build',
    description: 'We engineer your custom growth system: creatives, campaigns, SEO, automations, and web — all integrated and optimized for your specific market.',
    icon: '🔧',
  },
  {
    number: '03',
    title: 'Relentless Scale',
    description: 'We optimize obsessively. Every week, every metric. Until your numbers compound month over month and your brand becomes impossible to ignore.',
    icon: '🚀',
  },
];

export default function Process() {
  return (
    <section className="section-pad" style={{ background: 'transparent' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ 
            color: 'var(--accent-primary)', 
            fontWeight: 700, 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: '16px'
          }}>
            How We Win
          </span>
          <h2 style={{ maxWidth: '600px', margin: '0 auto 24px' }}>
            A Proven Roadmap to <span className="text-highlight">Dominance</span>
          </h2>
          <p style={{ maxWidth: '480px', margin: '0 auto' }}>
            Three focused phases. Precision execution. Outcomes that compound.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ position: 'relative' }}
            >
              {/* Giant background number */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                left: '-10px',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '140px',
                lineHeight: 1,
                color: 'var(--accent-soft)',
                userSelect: 'none',
                pointerEvents: 'none',
                zIndex: 0,
                opacity: 0.5,
              }}>
                {step.number}
              </div>

              <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: '#fff',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                  marginBottom: '32px',
                  boxShadow: 'var(--shadow-soft)',
                  border: '1px solid var(--border-light)',
                }}>
                  {step.icon}
                </div>

                <div style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: 'var(--accent-primary)',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                }}>
                  Step {step.number}
                </div>

                <h3 style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  marginBottom: '16px',
                  color: 'var(--text-primary)',
                }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
