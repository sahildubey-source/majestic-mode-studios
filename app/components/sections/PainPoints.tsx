'use client';

import { motion } from 'framer-motion';

const pains = [
  {
    icon: '🔥',
    title: 'Burning Ad Budget',
    description: "You're spending thousands on ads every month with nothing to show for it. The clicks come, the money goes, but customers don't.",
  },
  {
    icon: '📉',
    title: 'Website Doesn\'t Convert',
    description: "Traffic lands on your site and vanishes. Your website looks fine but it fails to turn visitors into leads, calls, or customers.",
  },
  {
    icon: '📊',
    title: 'Getting Outranked',
    description: "Your competitors show up on Google's first page. You're invisible. Every day you're not ranking is a day they're taking your customers.",
  },
];

export default function PainPoints() {
  return (
    <section className="section-pad" style={{ background: 'transparent' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{ 
            color: 'var(--accent-primary)', 
            fontWeight: 700, 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: '16px'
          }}>
            The Reality
          </span>
          <h2 style={{ maxWidth: '700px', margin: '0 auto 24px' }}>Stop Wasting Resources on <span className="text-highlight">Broken Systems</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Ambitious brands don't need just another agency. They need creative intelligence that converts traffic into sustainable growth.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {pains.map((pain, i) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-white"
              style={{ height: '100%' }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                background: 'var(--bg-gradient-lavender)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                marginBottom: '32px',
              }}>
                {pain.icon}
              </div>
              <h3 style={{ marginBottom: '16px', fontSize: '24px' }}>{pain.title}</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.7 }}>{pain.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
