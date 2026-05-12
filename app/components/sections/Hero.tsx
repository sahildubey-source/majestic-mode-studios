'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const avatars = [
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/3.jpg',
  'https://randomuser.me/api/portraits/women/4.jpg',
];

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
        paddingBottom: '60px',
      }}
    >
      <div className="container-main" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '64px', alignItems: 'center' }}>
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent-soft)',
            borderRadius: '100px',
            padding: '8px 16px',
            fontSize: '12px',
            fontWeight: 700,
            color: 'var(--accent-primary)',
            marginBottom: '32px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            ✦ AI-Powered Creative & Growth Studio
          </div>

          <h1 style={{
            marginBottom: '24px',
            lineHeight: 1.1,
            fontSize: 'clamp(44px, 5.5vw, 84px)',
          }}>
            Creative Intelligence That Drives <span style={{ color: 'var(--accent-primary)' }}>Real Growth</span>
          </h1>

          <p style={{
            fontSize: 'clamp(17px, 1.2vw, 20px)',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            lineHeight: 1.6,
            maxWidth: '540px',
          }}>
            AI video ads, paid media, SEO, and automation systems built for brands that want more than just results — they want dominance.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}>
            <Link href="/contact" className="btn-purple" style={{ padding: '18px 36px', fontSize: '16px', borderRadius: '16px' }}>
              Book Your Free Strategy Call <span style={{ marginLeft: '6px' }}>↗</span>
            </Link>
            <Link href="/work" className="btn-white" style={{ padding: '18px 36px', fontSize: '16px', borderRadius: '16px' }}>
              See Our Work
            </Link>
          </div>

          {/* Social Proof */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex' }}>
              {avatars.map((url, i) => (
                <div
                  key={i}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '3px solid #fff',
                    marginLeft: i === 0 ? 0 : '-12px',
                    overflow: 'hidden',
                    background: '#eee',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  <img src={url} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <div>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Trusted by <span style={{ color: 'var(--text-primary)' }}>40+ USA Brands</span>
              </p>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={14} fill="#FFB800" color="#FFB800" />
                ))}
                <span style={{ fontSize: '13px', fontWeight: 600, marginLeft: '4px', color: 'var(--text-secondary)' }}>4.9/5 average rating</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Visuals (Mockup Cards) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Main Large Card */}
          <motion.div
            className="animate-float"
            style={{
              background: '#fff',
              borderRadius: '24px',
              padding: '32px',
              width: '320px',
              boxShadow: '0 30px 60px rgba(0,0,0,0.08)',
              border: '1px solid rgba(0,0,0,0.03)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-tertiary)', marginBottom: '8px' }}>Revenue Generated</p>
            <h3 style={{ fontSize: '32px', marginBottom: '4px' }}>$2.47M+</h3>
            <p style={{ fontSize: '13px', color: '#10B981', fontWeight: 600, marginBottom: '24px' }}>↑ 210% vs last 90 days</p>
            
            {/* SVG Line Graph Mock */}
            <svg width="100%" height="80" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path
                d="M0 25 Q 10 20, 20 22 T 40 15 T 60 18 T 80 12 T 100 14"
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M0 25 Q 10 20, 20 22 T 40 15 T 60 18 T 80 12 T 100 14 L 100 30 L 0 30 Z"
                fill="url(#gradient-purple)"
                opacity="0.1"
              />
              <defs>
                <linearGradient id="gradient-purple" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-primary)" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Secondary Card (ROAS) */}
          <motion.div
            initial={{ x: 20, y: 40 }}
            animate={{ y: [40, 50, 40] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            style={{
              background: '#fff',
              borderRadius: '20px',
              padding: '24px',
              width: '200px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
              border: '1px solid rgba(0,0,0,0.03)',
              position: 'absolute',
              bottom: '40px',
              right: '20px',
              zIndex: 3,
            }}
          >
            <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-tertiary)', marginBottom: '4px' }}>ROAS</p>
            <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>4.6x</h3>
            <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Average Return on Ad Spend</p>
            
            {/* SVG Bar Chart Mock */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '30px', marginTop: '16px' }}>
              {[30, 50, 40, 70, 90, 60].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--accent-primary)', borderRadius: '2px', opacity: 0.3 + (i * 0.1) }}></div>
              ))}
            </div>
          </motion.div>

          {/* Background Decorative Element (Image Mock) */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '60px',
            width: '400px',
            height: '400px',
            borderRadius: '40px',
            background: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800) center/cover',
            opacity: 0.8,
            zIndex: 1,
            boxShadow: '0 20px 80px rgba(0,0,0,0.1)',
            transform: 'rotate(-5deg)',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.2))',
              borderRadius: '40px',
            }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
