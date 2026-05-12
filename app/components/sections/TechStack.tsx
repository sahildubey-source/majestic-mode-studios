'use client';

import { motion } from 'framer-motion';

const tools = [
  { name: 'Meta Ads',    icon: '📘' },
  { name: 'Google Ads',  icon: '🔴' },
  { name: 'OpenAI',      icon: '🤖' },
  { name: 'Midjourney',  icon: '🎨' },
  { name: 'Runway ML',   icon: '🎬' },
  { name: 'Webflow',     icon: '🌐' },
  { name: 'Figma',       icon: '✏️' },
  { name: 'HubSpot',     icon: '🟠' },
  { name: 'Zapier',      icon: '⚡' },
  { name: 'Semrush',     icon: '📊' },
  { name: 'Klaviyo',     icon: '📧' },
];

export default function TechStack() {
  return (
    <section className="section-pad" style={{ background: 'transparent' }}>
      <div className="container-main">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span style={{ 
            color: 'var(--accent-primary)', 
            fontWeight: 700, 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: '16px'
          }}>
            Our Stack
          </span>
          <h2 style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Powered by the World's Best <span className="text-highlight">Technology</span>
          </h2>
          <p style={{ maxWidth: '540px', margin: '0 auto' }}>
            We combine leading AI platforms and premium marketing tools to give your brand an unfair advantage.
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '16px',
          justifyContent: 'center',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '16px 28px',
                background: '#fff',
                border: '1px solid var(--border-light)',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                boxShadow: 'var(--shadow-soft)',
                transition: 'all 0.3s ease',
              }}
            >
              <span>{tool.icon}</span>
              <span>{tool.name}</span>
            </motion.div>
          ))}
        </div>

        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: '40px', 
          flexWrap: 'wrap',
          marginTop: '80px',
          padding: '32px',
          background: 'rgba(255, 255, 255, 0.4)',
          borderRadius: '24px',
          border: '1px solid var(--border-light)',
        }}>
          {[
            { label: 'Meta Business Partner', icon: '✓' },
            { label: 'Google Ads Certified', icon: '✓' },
            { label: 'SOC 2 Compliant', icon: '🔒' },
            { label: 'Privacy First', icon: '🛡️' },
          ].map(badge => (
            <div key={badge.label} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13px',
              fontWeight: 700,
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              <span style={{ color: 'var(--accent-primary)' }}>{badge.icon}</span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
