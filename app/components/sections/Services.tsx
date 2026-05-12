'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 'web-dev',
    icon: '💻',
    title: 'AI-Powered Website Development',
    description: 'High-performing websites and landing pages built in Next.js or Webflow. Optimized for conversion, speed, and long-term scalability.',
  },
  {
    id: 'performance-marketing',
    icon: '📈',
    title: 'Performance Marketing & Paid Ads',
    description: 'Meta, Google, and TikTok ads engineered with data-first strategy, audience precision, and relentless ROI optimization.',
  },
  {
    id: 'social-media',
    icon: '📱',
    title: 'Social Media Management',
    description: 'Consistent, on-brand content systems that build authority and grow engaged audiences across Instagram, LinkedIn, and more.',
  },
  {
    id: 'ai-content',
    icon: '🎨',
    title: 'AI Content & Creative Design',
    description: 'Stop the scroll with machine-speed creativity. AI-powered creatives and video assets that put your brand in its own category.',
  },
  {
    id: 'seo-organic',
    icon: '🔍',
    title: 'SEO & Organic Growth',
    description: 'Technical SEO foundations and AI-assisted content engines that compound your organic traffic and credibility month over month.',
  },
  {
    id: 'automation-ai',
    icon: '⚡',
    title: 'Automation & AI Integrations',
    description: 'Custom AI workflows and CRM automations that eliminate manual work and build systems that run 24/7 without you.',
  },
];

export default function Services() {
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
            Our Expertise
          </span>
          <h2 style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
            Full-Stack Systems for <span className="text-highlight">Category Dominance</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            We don't just run ads. We build the entire infrastructure required to turn traffic into revenue.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }}>
          {services.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={`/services#${svc.id}`}
                className="card-white"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                  height: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      background: 'var(--accent-soft)',
                      borderRadius: '14px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                    }}
                  >
                    {svc.icon}
                  </div>
                  <div style={{ color: 'var(--accent-primary)', opacity: 0.4 }}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--text-primary)' }}>
                  {svc.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
                  {svc.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link href="/services" className="btn-white">
            View All Services & Specializations
          </Link>
        </div>
      </div>
    </section>
  );
}
