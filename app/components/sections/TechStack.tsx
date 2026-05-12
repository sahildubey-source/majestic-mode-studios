'use client';

import { motion } from 'framer-motion';
import { Settings, BadgeCheck, Lock, Shield, ArrowRight, Palette, Video, Mail } from 'lucide-react';
import Link from 'next/link';

const row1 = [
  { name: 'Meta Ads', iconUrl: 'https://api.iconify.design/simple-icons:meta.svg?color=%230668E1' },
  { name: 'Google Ads', iconUrl: 'https://api.iconify.design/simple-icons:googleads.svg?color=%230F9D58' },
];

const row2Left = [
  { name: 'OpenAI', iconUrl: 'https://api.iconify.design/simple-icons:openai.svg?color=%2300A67E' },
  { name: 'Midjourney', icon: Palette },
];

const row2Right = [
  { name: 'Runway ML', icon: Video },
  { name: 'Webflow', iconUrl: 'https://api.iconify.design/simple-icons:webflow.svg?color=%23146EF5' },
];

const row3 = [
  { name: 'Figma', iconUrl: 'https://api.iconify.design/simple-icons:figma.svg?color=%23F24E1E' },
  { name: 'HubSpot', iconUrl: 'https://api.iconify.design/simple-icons:hubspot.svg?color=%23FF7A59' },
  { name: 'Zapier', iconUrl: 'https://api.iconify.design/simple-icons:zapier.svg?color=%23FF4A00' },
  { name: 'Semrush', iconUrl: 'https://api.iconify.design/simple-icons:semrush.svg?color=%23FF642D' },
  { name: 'Klaviyo', icon: Mail },
];

const ToolPill = ({ name, iconUrl, icon: Icon }: { name: string, iconUrl?: string, icon?: any }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '8px 16px',
      background: '#fff',
      borderRadius: '100px',
      boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
      border: '1px solid var(--border-light)',
      fontSize: '14px',
      fontWeight: 700,
      color: 'var(--text-primary)',
    }}
  >
    {iconUrl ? (
      <img src={iconUrl} alt={name} style={{ width: '20px', height: '20px', objectFit: 'contain' }} />
    ) : Icon ? (
      <Icon size={20} color="var(--accent-primary)" />
    ) : null}
    {name}
  </motion.div>
);

const CentralIcon = () => (
  <div style={{ position: 'relative', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ position: 'absolute', inset: -30, background: 'radial-gradient(circle, rgba(123, 92, 240, 0.15) 0%, transparent 60%)', borderRadius: '50%' }} />
    <div style={{ position: 'relative', width: '48px', height: '48px', transform: 'rotateX(60deg) rotateZ(45deg)', transformStyle: 'preserve-3d' }}>
      <div style={{ position: 'absolute', inset: 0, background: '#D9D0FF', borderRadius: '12px', transform: 'translateZ(-16px)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', inset: 0, background: '#A18BFF', borderRadius: '12px', transform: 'translateZ(-8px)', opacity: 0.8 }} />
      <div style={{ position: 'absolute', inset: 0, background: 'var(--accent-primary)', borderRadius: '12px', transform: 'translateZ(0px)', border: '2px solid rgba(255,255,255,0.4)', boxShadow: '0 0 20px rgba(123,92,240,0.4)' }}>
        <div style={{ position: 'absolute', inset: '14px', background: 'rgba(255,255,255,0.25)', borderRadius: '6px' }} />
      </div>
    </div>
  </div>
);

export default function TechStack() {
  return (
    <section className="section-pad" style={{ background: 'transparent', position: 'relative', overflow: 'hidden' }}>
      <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--accent-primary)', 
            background: 'var(--accent-soft)',
            padding: '6px 16px',
            borderRadius: '100px',
            fontWeight: 700, 
            fontSize: '12px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em',
            marginBottom: '20px'
          }}>
            <Settings size={14} /> Our Stack
          </div>
          <h2 style={{ maxWidth: '800px', margin: '0 auto 16px', fontSize: 'clamp(32px, 4vw, 56px)' }}>
            Powered by the World's Best <br /> 
            <span style={{
              background: 'linear-gradient(to right, #7B5CF0, #F4A5CD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Technology</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px', color: 'var(--text-secondary)' }}>
            We combine industry-leading AI platforms and premium marketing tools to build smarter, faster, and more profitable growth systems.
          </p>
        </div>

        {/* Orbital Layout */}
        <div className="hide-mobile" style={{ position: 'relative', maxWidth: '1000px', margin: '40px auto 60px', padding: '20px 0' }}>
          
          {/* Background Ellipses */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', height: '140%', border: '1px dashed rgba(123,92,240,0.15)', borderRadius: '50%', zIndex: 0 }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '65%', height: '80%', border: '1px dashed rgba(123,92,240,0.2)', borderRadius: '50%', zIndex: 0 }} />

          {/* Points on Ellipses */}
          <div style={{ position: 'absolute', top: '20%', left: '15%', width: '6px', height: '6px', background: '#D9D0FF', borderRadius: '50%', zIndex: 0 }} />
          <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '6px', height: '6px', background: '#D9D0FF', borderRadius: '50%', zIndex: 0 }} />

          {/* Rows of Pills */}
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            {/* Row 1 */}
            <div style={{ display: 'flex', gap: '64px' }}>
              {row1.map(t => <ToolPill key={t.name} {...t} />)}
            </div>
            {/* Row 2 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              {row2Left.map(t => <ToolPill key={t.name} {...t} />)}
              <div style={{ margin: '0 16px' }}><CentralIcon /></div>
              {row2Right.map(t => <ToolPill key={t.name} {...t} />)}
            </div>
            {/* Row 3 */}
            <div style={{ display: 'flex', gap: '16px' }}>
              {row3.map(t => <ToolPill key={t.name} {...t} />)}
            </div>
          </div>
        </div>

        {/* Mobile Fallback for Orbital Layout */}
        <div className="show-mobile-only" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginTop: '40px', marginBottom: '60px' }}>
          {[...row1, ...row2Left, ...row2Right, ...row3].map(t => <ToolPill key={t.name} {...t} />)}
        </div>

        {/* Bottom Trust Card */}
        <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid var(--border-light)',
            borderRadius: '24px',
            padding: '24px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
          }}>
            {[
              { title: 'Meta Business Partner', desc: 'Officially partnered with Meta', Icon: BadgeCheck, color: '#7B5CF0' },
              { title: 'Google Ads Certified', desc: 'Certified experts in Google Ads', Icon: BadgeCheck, color: '#7B5CF0' },
              { title: 'SOC 2 Compliant', desc: 'Enterprise-grade security standards', Icon: Lock, color: '#7B5CF0' },
              { title: 'Privacy First', desc: 'Your data is safe and secured', Icon: Shield, color: '#7B5CF0' },
            ].map((badge, i) => (
              <div key={badge.title} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ 
                  width: '36px', height: '36px', borderRadius: '50%', background: `${badge.color}15`, 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 
                }}>
                  <badge.Icon size={18} fill={badge.color} color="#fff" />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>{badge.title}</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{badge.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
