'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-cta"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          style={{
            position: 'fixed',
            bottom: '32px',
            right: '32px',
            zIndex: 9999,
          }}
          className="hide-mobile"
        >
          <Link
            href="/contact"
            className="btn-white"
            style={{
              padding: '14px 24px',
              fontSize: '14px',
              fontWeight: 600,
              color: '#0F0F1A',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            }}
          >
            Book Free Strategy Call →
          </Link>
        </motion.div>
      )}
      {visible && (
        <motion.div
          key="sticky-cta-mobile"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 280, damping: 28 }}
          style={{
            position: 'fixed',
            bottom: '24px',
            left: '16px',
            right: '16px',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
          }}
          className="show-mobile-only"
        >
          <Link
            href="/contact"
            className="btn-white"
            style={{
              padding: '16px 28px',
              fontSize: '15px',
              fontWeight: 600,
              color: '#0F0F1A',
              width: '100%',
              justifyContent: 'center',
              maxWidth: '360px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            }}
          >
            Book Free Strategy Call →
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
