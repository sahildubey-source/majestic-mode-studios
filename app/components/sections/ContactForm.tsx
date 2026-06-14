'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FormState = 'idle' | 'loading' | 'success' | 'error';



export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [charCount, setCharCount] = useState(0);

  const nameRef      = useRef<HTMLInputElement>(null);
  const emailRef     = useRef<HTMLInputElement>(null);
  const companyRef   = useRef<HTMLInputElement>(null);
  const challengeRef = useRef<HTMLTextAreaElement>(null);
  const faxRef       = useRef<HTMLInputElement>(null); // honeypot

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setErrorMsg('');

    const payload = {
      name:      nameRef.current?.value.trim()      ?? '',
      email:     emailRef.current?.value.trim()     ?? '',
      company:   companyRef.current?.value.trim()   ?? '',
      challenge: challengeRef.current?.value.trim() ?? '',
      fax:       faxRef.current?.value              ?? '', // honeypot
    };

    // Client-side guard
    if (!payload.name || !payload.email || !payload.company || !payload.challenge) {
      setFormState('error');
      setErrorMsg('Please fill in all fields.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Something went wrong.');
      setFormState('success');
    } catch (err: any) {
      setFormState('error');
      setErrorMsg(err.message ?? 'Failed to send. Please try again.');
    }
  };

  const inputBase: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: '12px',
    border: '1.5px solid var(--border-light)',
    background: 'rgba(123,92,240,0.03)',
    color: 'var(--text-primary)',
    fontSize: '15px',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s, background 0.2s',
  };

  const inputFocused: React.CSSProperties = {
    borderColor: 'var(--accent-primary)',
    boxShadow: '0 0 0 3px rgba(123,92,240,0.12)',
    background: '#fff',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'var(--text-tertiary)',
    marginBottom: '8px',
  };

  const fieldWrap: React.CSSProperties = { display: 'flex', flexDirection: 'column' };

  // ── Success screen ────────────────────────────────────────────
  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          textAlign: 'center',
          padding: '60px 40px',
          background: 'var(--bg-card)',
          border: '1px solid var(--border-accent)',
          borderRadius: '24px',
          boxShadow: '0 24px 80px rgba(123,92,240,0.08)',
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 20 }}
          style={{
            width: '72px', height: '72px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #7B5CF0, #A78BFA)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 28px',
            fontSize: '28px',
            boxShadow: '0 16px 40px rgba(123,92,240,0.3)',
          }}
        >
          ✓
        </motion.div>
        <h3 style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: '12px' }}>
          We&apos;ve got your request!
        </h3>
        <p style={{ maxWidth: '400px', margin: '0 auto 32px', fontSize: '16px' }}>
          Expect a reply within <strong style={{ color: 'var(--accent-primary)' }}>2 hours</strong>. Check your inbox — we&apos;ve sent a confirmation to you too.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['📋 Submission received', '📧 Confirmation sent', '⏱ Reply within 2 hrs'].map(t => (
            <span key={t} style={{
              fontSize: '12px', fontWeight: 600, color: 'var(--text-tertiary)',
              background: 'var(--accent-soft)', padding: '6px 14px', borderRadius: '100px',
            }}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.form
      id="contact-form"
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-light)',
        borderRadius: '24px',
        padding: 'clamp(28px, 4vw, 48px)',
        boxShadow: '0 12px 56px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '4px' }}>
        <span style={{
          color: 'var(--accent-primary)', fontWeight: 700,
          fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em',
          display: 'block', marginBottom: '10px',
        }}>
          ✦ Free Audit Request
        </span>
        <h2 style={{ fontSize: 'clamp(22px, 3vw, 30px)', marginBottom: '8px' }}>
          Tell Us About Your Brand
        </h2>
        <p style={{ fontSize: '14px', color: 'var(--text-tertiary)' }}>
          No commitment. We review every request personally.
        </p>
      </div>

      {/* Row: Name + Email */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
        <div style={fieldWrap}>
          <label htmlFor="cf-name" style={labelStyle}>Your Name</label>
          <input
            id="cf-name"
            ref={nameRef}
            type="text"
            placeholder="Jane Smith"
            autoComplete="name"
            required
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            style={{ ...inputBase, ...(focusedField === 'name' ? inputFocused : {}) }}
          />
        </div>
        <div style={fieldWrap}>
          <label htmlFor="cf-email" style={labelStyle}>Work Email</label>
          <input
            id="cf-email"
            ref={emailRef}
            type="email"
            placeholder="jane@company.com"
            autoComplete="email"
            required
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            style={{ ...inputBase, ...(focusedField === 'email' ? inputFocused : {}) }}
          />
        </div>
      </div>

      {/* Company */}
      <div style={fieldWrap}>
        <label htmlFor="cf-company" style={labelStyle}>Company / Brand</label>
        <input
          id="cf-company"
          ref={companyRef}
          type="text"
          placeholder="Acme Corp"
          autoComplete="organization"
          required
          onFocus={() => setFocusedField('company')}
          onBlur={() => setFocusedField(null)}
          style={{ ...inputBase, ...(focusedField === 'company' ? inputFocused : {}) }}
        />
      </div>



      {/* Biggest Challenge */}
      <div style={fieldWrap}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '8px' }}>
          <label htmlFor="cf-challenge" style={{ ...labelStyle, marginBottom: 0 }}>
            Biggest Challenge
          </label>
          <span style={{ fontSize: '11px', color: 'var(--text-tertiary)' }}>
            {charCount} / 600
          </span>
        </div>
        <textarea
          id="cf-challenge"
          ref={challengeRef}
          placeholder="Describe what's holding your growth back — low conversions, no content strategy, weak paid ads ROI…"
          required
          maxLength={600}
          rows={4}
          onChange={e => setCharCount(e.target.value.length)}
          onFocus={() => setFocusedField('challenge')}
          onBlur={() => setFocusedField(null)}
          style={{
            ...inputBase,
            resize: 'vertical',
            minHeight: '120px',
            lineHeight: 1.6,
            ...(focusedField === 'challenge' ? inputFocused : {}),
          }}
        />
      </div>

      {/* Honeypot — hidden from real users */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, pointerEvents: 'none' }} aria-hidden="true">
        <label htmlFor="cf-fax">Fax (leave blank)</label>
        <input id="cf-fax" ref={faxRef} type="text" name="fax" tabIndex={-1} autoComplete="off" />
      </div>

      {/* Error */}
      <AnimatePresence>
        {formState === 'error' && (
          <motion.div
            key="error"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.25)',
              borderRadius: '10px',
              padding: '12px 16px',
              fontSize: '14px',
              color: '#DC2626',
              fontWeight: 500,
            }}
          >
            ⚠ {errorMsg || 'Something went wrong. Please try again.'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <button
        type="submit"
        id="contact-form-submit"
        disabled={formState === 'loading'}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          width: '100%',
          padding: '16px 32px',
          borderRadius: '100px',
          border: 'none',
          background: formState === 'loading'
            ? 'rgba(123,92,240,0.5)'
            : 'var(--accent-primary)',
          color: '#fff',
          fontSize: '15px',
          fontWeight: 700,
          fontFamily: 'inherit',
          cursor: formState === 'loading' ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s',
          boxShadow: formState === 'loading' ? 'none' : '0 8px 28px rgba(123,92,240,0.3)',
        }}
        onMouseEnter={e => {
          if (formState !== 'loading') {
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 14px 36px rgba(123,92,240,0.4)';
          }
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.transform = '';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 28px rgba(123,92,240,0.3)';
        }}
      >
        {formState === 'loading' ? (
          <>
            <span style={{
              width: '16px', height: '16px',
              border: '2px solid rgba(255,255,255,0.4)',
              borderTopColor: '#fff',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'spin 0.7s linear infinite',
            }} />
            Sending…
          </>
        ) : (
          <>Request Free Audit →</>
        )}
      </button>

      <p style={{ fontSize: '12px', color: 'var(--text-tertiary)', textAlign: 'center', marginTop: '-8px' }}>
        🔒 We&apos;ll never spam or share your information. Zero commitment.
      </p>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </motion.form>
  );
}
