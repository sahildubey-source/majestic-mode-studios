'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How much does it cost to work with Majestic Mode Studios?',
    a: "Our pricing varies based on scope and services. Most clients invest between $2,500–$10,000/month depending on the growth system required. We offer a free strategy call to scope your project before any commitment. No surprise fees — ever.",
  },
  {
    q: 'How long until we see results?',
    a: "Most clients see measurable movement within the first 30 days — whether that's improved conversion rates, ad performance, or early ranking signals. Compounding results typically emerge by month 3. We set realistic expectations upfront and track every KPI.",
  },
  {
    q: 'Do you require long-term contracts?',
    a: "No. We operate on monthly agreements with 30-day notice to cancel. We believe results should earn retention — not contracts. That said, growth systems compound over time, so most clients stay 12+ months.",
  },
  {
    q: 'What industries do you work with?',
    a: "We work with eCommerce brands, SaaS companies, local service businesses, real estate firms, health & wellness, and professional services. If you serve USA customers and want to grow, we can build your system.",
  },
  {
    q: "What makes you different from other agencies?",
    a: "Three things: AI integration in everything we do (not as a buzzword, but as actual workflow), obsessive performance tracking with full transparency, and a systems mindset — we build infrastructure, not just campaigns.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-pad" style={{ background: 'transparent' }}>
      <div className="container-main">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '80px',
          alignItems: 'start',
        }}>
          {/* Left sticky heading */}
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
              Common Questions
            </span>
            <h2 style={{ marginBottom: '24px', lineHeight: 1.15 }}>
              Everything You Need <span className="text-highlight">To Know</span>
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '40px' }}>
              Still have questions? Our team is ready to help you map out your strategy.
            </p>
            <Link href="/contact" className="btn-white">
              Contact Support
            </Link>
          </div>

          {/* Right accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: '#fff',
                borderRadius: '16px',
                border: '1px solid var(--border-light)',
                overflow: 'hidden',
                boxShadow: openIndex === i ? '0 10px 30px rgba(0,0,0,0.04)' : 'none',
                transition: 'all 0.3s ease',
              }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ 
                    fontSize: '17px', 
                    fontWeight: 700, 
                    color: openIndex === i ? 'var(--accent-primary)' : 'var(--text-primary)',
                    transition: 'color 0.3s',
                  }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    background: openIndex === i ? 'var(--accent-primary)' : 'var(--accent-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: openIndex === i ? '#fff' : 'var(--accent-primary)',
                    transition: 'all 0.3s',
                  }}>
                    {openIndex === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div style={{ 
                        padding: '0 24px 24px', 
                        color: 'var(--text-secondary)',
                        fontSize: '15px',
                        lineHeight: 1.7,
                      }}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
