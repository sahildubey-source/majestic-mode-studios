'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/work',     label: 'Work'     },
  { href: '/about',    label: 'About'    },
  { href: '/blog',     label: 'Blog'     },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9000,
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          background: scrolled ? 'rgba(255, 255, 255, 0.5)' : 'transparent',
          backdropFilter: scrolled ? 'blur(32px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(32px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.4)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.05)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/logo.png" 
              alt="Majestic Mode Studios" 
              style={{ height: '56px', width: 'auto', objectFit: 'contain' }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#4F4F66',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#7B5CF0')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4F4F66')}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={14} opacity={0.5} />}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hide-mobile">
            <Link href="/contact" className="btn-purple" style={{ padding: '10px 24px', fontSize: '14px', borderRadius: '12px' }}>
              Book a Call <span style={{ marginLeft: '4px' }}>↗</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="show-mobile-only"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              color: '#0F0F1A',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: '#FFFFFF',
              zIndex: 8999,
              padding: '100px 24px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#0F0F1A',
                    textDecoration: 'none',
                    fontFamily: "'Syne', sans-serif",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <Link 
              href="/contact" 
              className="btn-purple" 
              onClick={() => setMenuOpen(false)}
              style={{ marginTop: 'auto', justifyContent: 'center', padding: '18px' }}
            >
              Book a Call ↗
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
