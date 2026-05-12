'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Majestic Mode completely transformed our paid ads. We went from burning $15k/month with 0.8x ROAS to consistently hitting 4.1x within 60 days. They don't just manage ads — they engineer systems.",
    name: 'Ryan Kelsey',
    role: 'Founder & CEO',
    company: 'Nova Brands Co.',
    color: '#7B5CF0',
  },
  {
    quote: "Our organic traffic grew 247% in 5 months. We now rank on the first page for 14 competitive keywords. The ROI on SEO alone has been extraordinary.",
    name: 'Sarah Mitchell',
    role: 'VP Marketing',
    company: 'Stellar Analytics',
    color: '#FF8A65',
  },
  {
    quote: "The AI video ads they created outperformed our best-performing static ads by 3x on Meta. The quality is insane — and they produce it 10× faster.",
    name: 'James Liu',
    role: 'Marketing Director',
    company: 'Apex Medical Group',
    color: '#00D4FF',
  },
  {
    quote: "Before Majestic Mode, our website had a 1.2% conversion rate. Now it's 6.4%. They rebuilt everything with conversion architecture in mind.",
    name: 'Tara Patel',
    role: 'Head of Growth',
    company: 'Crest Properties',
    color: '#FFB800',
  },
];

export default function Testimonials() {
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
            Client Success
          </span>
          <h2 style={{ maxWidth: '600px', margin: '0 auto 24px' }}>
            Trusted by Leaders in <span className="text-highlight">Every Industry</span>
          </h2>
          <p style={{ maxWidth: '420px', margin: '0 auto' }}>
            Real brands. Real compounding growth.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-white"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', gap: '2px', marginBottom: '24px' }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={16} fill="var(--accent-primary)" color="var(--accent-primary)" style={{ opacity: 0.8 }} />
                ))}
              </div>

              <blockquote style={{
                fontSize: '17px',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
                marginBottom: '32px',
                flex: 1,
                fontWeight: 500,
              }}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '24px', borderTop: '1px solid var(--border-light)' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: t.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: 800,
                  color: '#fff',
                  flexShrink: 0,
                }}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '2px' }}>
                    {t.name}
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 600 }}>
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
