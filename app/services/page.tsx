'use client';

import Link from 'next/link';
import { ArrowUpRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'web-dev',
    number: '01',
    icon: '💻',
    title: 'AI-Powered Website Development',
    tagline: 'Built to rank. Built to convert. Built to scale.',
    description: 'Most businesses immediately understand the value of a professional website. We design and build high-performance websites and landing pages in Next.js, Webflow, or WordPress, conversion-optimized from the ground up.',
    features: [
      'Business Websites',
      'Landing Pages',
      'E-commerce Stores',
      'WordPress Websites',
      'Custom Web Apps',
      'High-Converting UI/UX',
      'Mobile Responsive Design',
      'Fast Loading Optimization',
    ],
    color: 'var(--accent-primary)',
    results: '90+ Lighthouse Score & 3x Conversion Lift',
  },
  {
    id: 'performance-marketing',
    number: '02',
    icon: '📈',
    title: 'Performance Marketing & Paid Ads',
    tagline: 'High-ROI campaigns driven by data, not guesswork.',
    description: 'We manage Meta Ads, Google Ads, and TikTok Ads with a data-first approach. From audience architecture to bidding strategy, we own the entire paid acquisition system.',
    features: [
      'Meta Ads',
      'Google Ads',
      'Lead Generation Campaigns',
      'Retargeting Ads',
      'Sales Funnel Setup',
      'Ad Creatives',
      'ROI Optimization',
    ],
    color: 'var(--accent-peach)',
    results: 'Average 3.2x ROAS across clients',
  },
  {
    id: 'social-media',
    number: '03',
    icon: '📱',
    title: 'Social Media Management',
    tagline: 'Build authority and grow an audience that buys.',
    description: 'Consistent, on-brand content systems that build authority and grow engaged audiences across every platform. We handle everything from reels strategy to brand positioning.',
    features: [
      'Instagram Management',
      'LinkedIn Growth',
      'Content Scheduling',
      'Reels Strategy',
      'Brand Positioning',
      'Engagement Growth',
      'Monthly Content Planning',
    ],
    color: 'var(--accent-primary)',
    results: '10k+ Monthly Organic Reach',
  },
  {
    id: 'ai-content',
    number: '04',
    icon: '🎨',
    title: 'AI Content Creation & Creative Design',
    tagline: 'This becomes your differentiator.',
    description: 'Stop the scroll with machine-speed creativity. We use generative AI tools like Midjourney and Runway ML to produce high-converting assets that put your brand in a category of its own.',
    features: [
      'AI-Powered Creatives',
      'Ad Video Editing',
      'Motion Graphics',
      'Reels Editing',
      'Thumbnail Design',
      'Carousel Posts',
      'Brand Visual Identity',
    ],
    color: '#FFB800',
    results: '10x Faster Asset Production',
  },
  {
    id: 'seo-organic',
    number: '05',
    icon: '🔍',
    title: 'SEO & Organic Growth',
    tagline: 'Builds long-term credibility and compounding traffic.',
    description: 'Technical SEO foundations, AI-assisted content production, and strategic link building aligned to your revenue targets. Durable growth that lowers your customer acquisition costs.',
    features: [
      'On-Page SEO',
      'Technical SEO',
      'Local SEO',
      'Blog Optimization',
      'Keyword Research',
      'Website Audit',
      'Google Ranking Strategy',
    ],
    color: 'var(--accent-primary)',
    results: '150-300% Avg. Organic Growth',
  },
  {
    id: 'automation-ai',
    number: '06',
    icon: '⚡',
    title: 'Automation & AI Integrations',
    tagline: 'Makes your agency look advanced/premium.',
    description: 'Zapier, Make, and custom AI workflows that eliminate manual work. We build systems that run 24/7, from lead capture to CRM automation and AI business solutions.',
    features: [
      'Chatbots',
      'CRM Automation',
      'AI Workflow Systems',
      'Lead Capture Automation',
      'Email Automation',
      'API Integrations',
      'AI Business Solutions',
    ],
    color: 'var(--accent-peach)',
    results: '40+ Hours Saved Per Week',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{
        paddingTop: '180px',
        paddingBottom: '50px',
        background: 'transparent',
      }}>
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
              ✦ Our Expertise
            </span>
            <h1 style={{ maxWidth: '900px', margin: '0 auto 24px' }}>
              High-Performance Systems <br/>For <span className="text-highlight">Modern Brands</span>
            </h1>
            <p style={{ maxWidth: '600px', margin: '0 auto 48px', fontSize: '18px', color: 'var(--text-secondary)' }}>
              We don't do "marketing." We build integrated systems that engineer demand and compound revenue month over month.
            </p>
            <Link href="/contact" className="btn-purple" style={{ padding: '18px 40px', fontSize: '16px' }}>
              Book Your Free Strategy Session ↗
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services deep-dive */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          style={{
            padding: '50px 0',
            background: 'transparent',
          }}
        >
          <div className="container-main">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '80px',
              alignItems: 'center',
            }}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ order: i % 2 === 0 ? 0 : 1 }}
              >
                <div style={{
                  fontSize: '13px',
                  fontWeight: 800,
                  color: svc.color,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}>
                  {svc.number} / Service
                </div>

                <div style={{ fontSize: '48px', marginBottom: '24px' }}>{svc.icon}</div>

                <h2 style={{ marginBottom: '16px', fontSize: 'clamp(32px, 3.5vw, 48px)' }}>
                  {svc.title}
                </h2>

                <p style={{
                  fontSize: '19px',
                  color: svc.color,
                  fontWeight: 600,
                  marginBottom: '24px',
                  lineHeight: 1.4,
                }}>
                  {svc.tagline}
                </p>

                <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '32px' }}>
                  {svc.description}
                </p>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '100px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  boxShadow: 'var(--shadow-soft)',
                  marginBottom: '40px',
                }}>
                  <span style={{ color: 'var(--accent-primary)' }}>📊</span> {svc.results}
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <Link href="/contact" className="btn-purple" style={{ padding: '14px 28px', fontSize: '15px' }}>
                    Get Started ↗
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="card-white"
                style={{
                  padding: '48px',
                  border: '1px solid var(--border-light)',
                  order: i % 2 === 0 ? 1 : 0,
                }}
              >
                <h3 style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '32px' }}>
                  What&apos;s Included
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {svc.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '16px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      <CheckCircle size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section style={{ padding: '50px 0', background: 'transparent', textAlign: 'center' }}>
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-white"
            style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 40px' }}
          >
            <h2 style={{ maxWidth: '600px', margin: '0 auto 24px' }}>
              Unsure Which System <span className="text-highlight">You Need?</span>
            </h2>
            <p style={{ maxWidth: '480px', margin: '0 auto 48px', fontSize: '18px', color: 'var(--text-secondary)' }}>
              Let&apos;s hop on a quick call to audit your current marketing and identify the highest-leverage opportunities for growth.
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
