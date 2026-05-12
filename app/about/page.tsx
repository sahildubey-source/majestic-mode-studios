'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const values = [
  { icon: '🎯', title: 'Strategy First', description: 'Every execution decision starts with a data-backed strategy. No guesswork.' },
  { icon: '⚡', title: 'AI-Augmented', description: 'We use AI to do more, faster — without sacrificing quality or strategy.' },
  { icon: '📊', title: 'Metrics-Obsessed', description: 'We track what matters: revenue, ROAS, CPL, conversions. Not vanity.' },
  { icon: '🤝', title: 'True Partnership', description: 'We treat your budget like it\'s our own money on the line. Always.' },
  { icon: '🔄', title: 'Always Optimizing', description: 'Campaigns, content, and copy get better every single week. Relentlessly.' },
  { icon: '🇺🇸', title: 'USA-Focused', description: 'We understand the US market, consumer, and competitive landscape.' },
];

const team = [
  { name: 'Alex Torres', role: 'Founder & Creative Director', color: '#7B5CF0', bio: '8+ years building growth systems for DTC and SaaS brands. Former head of growth at a $40M eCommerce brand.' },
  { name: 'Jamie Chen', role: 'Head of Paid Media', color: '#FF8A65', bio: 'Managed $2M+ in monthly ad spend. Google and Meta certified. Ex-agency media buyer turned in-house specialist.' },
  { name: 'Morgan Ellis', role: 'AI Creative Lead', color: '#00D4FF', bio: 'Pioneering AI-assisted video production since 2022. Expert in Runway ML, Midjourney, and generative workflows.' },
  { name: 'Riley Parker', role: 'SEO & Content Strategist', color: '#FFB800', bio: 'Built organic traffic engines generating 1M+ monthly visits. Technical SEO and AI-assisted content specialist.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: '180px', paddingBottom: '100px', background: 'transparent' }}>
        <div className="container-main">
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
              ✦ Our Story
            </span>
            <h1 style={{ maxWidth: '900px', marginBottom: '24px', lineHeight: 1.1 }}>
              We Built the Studio We <br/>Always <span className="text-highlight">Wished Existed</span>
            </h1>
            <p style={{ maxWidth: '640px', fontSize: '18px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '64px' }}>
              Majestic Mode Studios was founded on one belief: most agencies are selling outdated playbooks. We built something different — a studio that weaponizes creative intelligence to deliver durability and growth.
            </p>
            <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
              {[
                { metric: '40+', label: 'Brands Served' },
                { metric: '$12M+', label: 'Spend Managed' },
                { metric: '3.4x', label: 'Average ROAS' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '56px', color: 'var(--text-primary)', lineHeight: 1, letterSpacing: '-0.02em' }}>{stat.metric}</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--accent-primary)', marginTop: '8px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Our DNA
            </span>
            <h2 style={{ maxWidth: '600px', margin: '0 auto' }}>Principles That <span className="text-highlight">Drive Results</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-white"
              >
                <div style={{ fontSize: '32px', marginBottom: '24px' }}>{v.icon}</div>
                <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{v.title}</h3>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              The Minds
            </span>
            <h2 style={{ maxWidth: '600px', margin: '0 auto' }}>The Team Behind <span className="text-highlight">The Magic</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-white"
              >
                <div style={{
                  width: '72px', height: '72px', borderRadius: '20px', background: member.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', fontWeight: 800, color: '#fff',
                  marginBottom: '24px',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                }}>{member.name.split(' ').map(n => n[0]).join('')}</div>
                <h3 style={{ fontSize: '22px', marginBottom: '6px' }}>{member.name}</h3>
                <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '20px' }}>{member.role}</p>
                <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
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
            <h2 style={{ maxWidth: '600px', margin: '0 auto 24px' }}>Want to Work With <span className="text-highlight">This Team?</span></h2>
            <p style={{ maxWidth: '480px', margin: '0 auto 48px', fontSize: '18px', color: 'var(--text-secondary)' }}>
              Book your free strategy call and let&apos;s talk about your brand&apos;s goals. No pressure, no pitch — just an honest conversation.
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
