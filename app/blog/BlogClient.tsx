'use client';

import Link from 'next/link';
import { ArrowUpRight, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

type Post = {
  _id: string;
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  color?: string;
};

export default function BlogClient({ posts }: { posts: Post[] }) {
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
            <h1 style={{ maxWidth: '800px', margin: '0 auto 24px' }}>Insights That <br/><span className="text-highlight">Drive Growth</span></h1>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
              Actionable thinking on performance marketing, creative systems, and digital growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'transparent' }}>
        <div className="container-main">
          {posts.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--text-tertiary)', fontSize: '16px' }}>
              No posts published yet. Check back soon.
            </p>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
              {posts.map((post, i) => {
                const tagColor = post.color || 'var(--accent-primary)';
                const dateString = post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                  : '';
                return (
                  <motion.div
                    key={post._id}
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
                            textTransform: 'uppercase', color: tagColor, padding: '6px 12px',
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
                          {post.readTime && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Clock size={14} /> {post.readTime}
                            </span>
                          )}
                          {dateString && <span>{dateString}</span>}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
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
