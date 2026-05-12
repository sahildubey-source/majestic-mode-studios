'use client';

import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  {
    slug: 'ai-video-ads-2025',
    tag: 'AI & Creative',
    title: 'How AI Video Ads Outperform Traditional Ads in 2025',
    excerpt: 'The data is in: AI-generated video creatives are consistently outperforming manually produced ads across Meta, TikTok, and YouTube. Here\'s why, and how to harness it.',
    readTime: '7 min read',
    date: 'May 8, 2025',
    color: 'var(--accent-primary)',
  },
  {
    slug: 'social-media-ecommerce-2025',
    tag: 'Social Media',
    title: 'Best Social Media Marketing Strategies for eCommerce Brands in 2025',
    excerpt: 'Organic social is harder than ever — but the brands winning have cracked the code. We break down the exact content systems driving 180%+ revenue growth for DTC brands.',
    readTime: '9 min read',
    date: 'May 3, 2025',
    color: 'var(--accent-peach)',
  },
  {
    slug: 'google-ads-failing',
    tag: 'Paid Media',
    title: 'Why Your Google Ads Are Failing (And How to Fix Them)',
    excerpt: 'After auditing 40+ Google Ads accounts, we\'ve identified the 8 mistakes that kill ROI for most businesses. Avoid these and your results will transform.',
    readTime: '6 min read',
    date: 'April 28, 2025',
    color: 'var(--accent-primary)',
  },
  {
    slug: 'seo-compound-growth',
    tag: 'SEO',
    title: 'Why SEO is the Highest-ROI Marketing Channel (With Data)',
    excerpt: 'We analyzed 18 months of data across our client accounts. SEO consistently delivers 4-8x higher lifetime ROI than paid ads — here\'s the breakdown.',
    readTime: '8 min read',
    date: 'April 21, 2025',
    color: '#FFB800',
  },
  {
    slug: 'automation-marketing-agency',
    tag: 'Automation',
    title: '10 Marketing Automation Workflows Every Agency Should Have',
    excerpt: 'The agencies growing fastest in 2025 aren\'t working harder — they\'re automated smarter. Here are the 10 workflows saving our team 25+ hours per week.',
    readTime: '5 min read',
    date: 'April 15, 2025',
    color: 'var(--accent-primary)',
  },
  {
    slug: 'landing-page-conversion-rate',
    tag: 'CRO',
    title: 'The 9 Landing Page Elements That Doubled Our Clients\' Conversion Rates',
    excerpt: 'We A/B tested over 200 landing page variants. These 9 elements consistently moved conversion rates from 1-2% to 5-8%. Every single time.',
    readTime: '10 min read',
    date: 'April 9, 2025',
    color: 'var(--accent-peach)',
  },
];

export default function BlogPage() {
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
              ✦ Insights
            </span>
            <h1 style={{ maxWidth: '800px', margin: '0 auto 24px' }}>Marketing Intelligence <br/><span className="text-highlight">No Fluff</span></h1>
            <p style={{ maxWidth: '520px', margin: '0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
              Data-driven insights on AI marketing, paid ads, SEO, and growth systems — straight from the minds of our strategists.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'transparent' }}>
        <div className="container-main">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none', height: '100%' }}>
                  <div className="card-white" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                      <span style={{
                        fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em',
                        textTransform: 'uppercase', color: post.color, padding: '6px 12px',
                        background: 'var(--bg-base)', borderRadius: '100px',
                      }}>{post.tag}</span>
                      <div style={{ color: 'var(--accent-primary)', opacity: 0.4 }}>
                        <ArrowUpRight size={18} />
                      </div>
                    </div>

                    <h3 style={{ fontSize: '22px', lineHeight: 1.3, marginBottom: '16px', color: 'var(--text-primary)' }}>{post.title}</h3>
                    <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '32px', flex: 1 }}>{post.excerpt}</p>
                    
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '16px', 
                      fontSize: '12px', 
                      color: 'var(--text-tertiary)', 
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      paddingTop: '24px',
                      borderTop: '1px solid var(--border-light)'
                    }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
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
            <h2 style={{ maxWidth: '600px', margin: '0 auto 24px' }}>Ready for <span className="text-highlight">Real Growth?</span></h2>
            <p style={{ maxWidth: '480px', margin: '0 auto 48px', fontSize: '18px', color: 'var(--text-secondary)' }}>
              Subscribe to our newsletter for the latest marketing strategies, or book a free audit to see how we can apply them to your brand.
            </p>
            <Link href="/contact" className="btn-purple" style={{ padding: '18px 40px', fontSize: '16px' }}>
              Claim Your Free Audit ↗
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
