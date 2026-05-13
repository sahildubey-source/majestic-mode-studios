'use client';

import Link from 'next/link';

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const footerLinks = {
  Services: [
    { label: 'Website Development',  href: '/services#web-dev'      },
    { label: 'Paid Ads Management',  href: '/services#performance-marketing' },
    { label: 'Social Media Management', href: '/services#social-media' },
    { label: 'AI Content Creation',  href: '/services#ai-content'   },
    { label: 'SEO & Organic Growth', href: '/services#seo-organic'  },
    { label: 'Automation & AI',      href: '/services#automation-ai' },
  ],
  Company: [
    { label: 'About',         href: '/about'   },
    { label: 'Work',          href: '/work'    },
    { label: 'Blog',          href: '/blog'    },
    { label: 'Contact',       href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms'         },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-light)',
      paddingTop: '80px',
      paddingBottom: '40px',
      background: 'rgba(255, 255, 255, 0.4)',
      backdropFilter: 'blur(10px)',
    }}>
      <div className="container-main">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '64px',
          marginBottom: '48px',
        }}>
          {/* Brand column */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ marginBottom: '24px' }}>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '22px',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
              }}>
                Majestic Mode
              </span>
            </div>
            <p style={{ fontSize: '15px', lineHeight: 1.6, marginBottom: '32px', color: 'var(--text-secondary)' }}>
              We build high-performance creative intelligence systems for brands that demand category dominance.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { Icon: LinkedInIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
                { Icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '44px',
                    height: '44px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    background: '#fff',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-primary)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--accent-primary)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-light)';
                    (e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontSize: '13px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-primary)',
                marginBottom: '24px',
              }}>
                {section}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 style={{
              fontSize: '13px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text-primary)',
              marginBottom: '24px',
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a
                href="mailto:support@majesticmodestudios.com"
                style={{ fontSize: '15px', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-primary)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                support@majesticmodestudios.com
              </a>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--accent-soft)',
                borderRadius: '100px',
                padding: '8px 16px',
                fontSize: '12px',
                color: 'var(--accent-primary)',
                fontWeight: 700,
                width: 'fit-content',
              }}>
                <span style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%', display: 'inline-block' }}></span>
                Response within 2 hours
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border-light)',
          paddingTop: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
            © 2025 Majestic Mode Studios. Crafting digital dominance globally.
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
