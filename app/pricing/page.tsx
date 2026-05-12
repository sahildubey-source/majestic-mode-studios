'use client';

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Essential',
    price: '$2,500',
    description: 'Perfect for brands looking to establish their foundation and start scaling.',
    features: [
      'Meta & Google Ads Management',
      'Basic AI Video Creative (2/mo)',
      'Monthly Strategy Session',
      'Standard Reporting Dashboard',
      'Email Support',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$5,000',
    description: 'Our most popular plan for brands ready for aggressive scaling.',
    features: [
      'Meta, Google & TikTok Management',
      'Advanced AI Video Creative (5/mo)',
      'Bi-Weekly Strategy Calls',
      'Full-Funnel CRO Audit',
      'AI Content Engine (4 posts/mo)',
      'Priority Slack Support',
    ],
    cta: 'Book Strategy Call',
    featured: true,
  },
  {
    name: 'Dominance',
    price: '$10,000',
    description: 'The complete growth infrastructure for category leaders.',
    features: [
      'All Platforms Managed',
      'Unlimited AI Video Creative',
      'Weekly Strategy & Review Calls',
      'Full Website & SEO System',
      'Custom AI Automation Workflows',
      'Dedicated Growth Director',
    ],
    cta: 'Contact for Custom Build',
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section style={{ paddingTop: '180px', paddingBottom: '80px', background: 'transparent' }}>
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
              ✦ Transparent Pricing
            </span>
            <h1 style={{ maxWidth: '800px', margin: '0 auto 24px' }}>
              Investment for <span className="text-highlight">Outsized Returns</span>
            </h1>
            <p style={{ maxWidth: '520px', margin: '0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
              No hidden fees. No long-term contracts. Just performance-driven growth systems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'transparent' }}>
        <div className="container-main">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'stretch',
          }}>
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-white"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '48px',
                  border: plan.featured ? '2px solid var(--accent-primary)' : '1px solid var(--border-light)',
                  position: 'relative',
                  transform: plan.featured ? 'scale(1.05)' : 'none',
                  zIndex: plan.featured ? 2 : 1,
                }}
              >
                {plan.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '-16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--accent-primary)',
                    color: '#fff',
                    padding: '6px 16px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}>
                    Most Popular
                  </div>
                )}

                <div style={{ marginBottom: '32px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '8px', color: 'var(--text-primary)' }}>{plan.name}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{plan.description}</p>
                </div>

                <div style={{ marginBottom: '40px' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '48px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{plan.price}</span>
                    <span style={{ fontSize: '16px', color: 'var(--text-tertiary)', fontWeight: 600 }}>/mo</span>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px', flex: 1 }}>
                  {plan.features.map(feature => (
                    <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: 'var(--text-secondary)', fontWeight: 500 }}>
                      <Check size={18} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className={plan.featured ? "btn-purple" : "btn-white"}
                  style={{ 
                    width: '100%', 
                    justifyContent: 'center', 
                    padding: '18px', 
                    fontSize: '16px',
                  }}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section style={{ padding: '80px 0', background: 'transparent', textAlign: 'center' }}>
        <div className="container-main">
          <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>
            Have questions about our plans? <Link href="/#faq" style={{ color: 'var(--accent-primary)', fontWeight: 700, textDecoration: 'none' }}>Check our FAQ</Link> or <Link href="/contact" style={{ color: 'var(--accent-primary)', fontWeight: 700, textDecoration: 'none' }}>Contact Support</Link>
          </p>
        </div>
      </section>
    </>
  );
}
