'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    challenge: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{
      position: 'relative',
      padding: 'clamp(100px, 15vw, 200px) 0',
      background: 'transparent',
      overflow: 'hidden',
    }}>
      {/* Decorative background element */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '1000px',
        height: '600px',
        background: 'radial-gradient(circle, var(--accent-soft) 0%, transparent 70%)',
        zIndex: 1,
        pointerEvents: 'none',
      }} />

      <div className="container-main" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
            Ready for results?
          </span>
          <h2 style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            maxWidth: '800px',
            margin: '0 auto 24px',
            lineHeight: 1.1,
          }}>
            Let&apos;s Build Your <span className="text-highlight">Growth Infrastructure</span>
          </h2>
          <p style={{
            maxWidth: '560px',
            margin: '0 auto 64px',
            fontSize: '18px',
            color: 'var(--text-secondary)',
          }}>
            Stop guessing. Start growing. Claim your free 30-min strategy audit and see the exact roadmap to your brand&apos;s dominance.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-white"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: 'clamp(32px, 5vw, 64px)',
            textAlign: 'left',
          }}
        >
          {!submitted ? (
            <>
              <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>
                Claim Your Free Audit
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', marginBottom: '40px' }}>
                Submit your details and we&apos;ll reach out within 2 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                  {[
                    { id: 'name',    label: 'Your Name',    type: 'text',  placeholder: 'John Smith',          key: 'name'    },
                    { id: 'email',   label: 'Email Address',type: 'email', placeholder: 'john@company.com',    key: 'email'   },
                  ].map(field => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        style={{
                          display: 'block',
                          fontSize: '12px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--text-tertiary)',
                          marginBottom: '8px',
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={e => setFormData(prev => ({ ...prev, [field.key]: e.target.value }))}
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          background: '#F8F8FB',
                          border: '1px solid var(--border-light)',
                          borderRadius: '12px',
                          color: 'var(--text-primary)',
                          fontSize: '15px',
                          fontFamily: "'DM Sans', sans-serif",
                          outline: 'none',
                          transition: 'all 0.2s',
                        }}
                        onFocus={e => {
                          e.target.style.borderColor = 'var(--accent-primary)';
                          e.target.style.background = '#fff';
                          e.target.style.boxShadow = '0 0 0 4px var(--accent-soft)';
                        }}
                        onBlur={e => {
                          e.target.style.borderColor = 'var(--border-light)';
                          e.target.style.background = '#F8F8FB';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="company" style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-tertiary)',
                    marginBottom: '8px',
                  }}>
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    required
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: '#F8F8FB',
                      border: '1px solid var(--border-light)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontSize: '15px',
                      fontFamily: "'DM Sans', sans-serif",
                      outline: 'none',
                      transition: 'all 0.2s',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.background = '#fff';
                      e.target.style.boxShadow = '0 0 0 4px var(--accent-soft)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'var(--border-light)';
                      e.target.style.background = '#F8F8FB';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="budget" style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-tertiary)',
                    marginBottom: '8px',
                  }}>
                    Monthly Marketing Budget
                  </label>
                  <select
                    id="budget"
                    required
                    value={formData.budget}
                    onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: '#F8F8FB',
                      border: '1px solid var(--border-light)',
                      borderRadius: '12px',
                      color: formData.budget ? 'var(--text-primary)' : 'var(--text-tertiary)',
                      fontSize: '15px',
                      fontFamily: "'DM Sans', sans-serif",
                      outline: 'none',
                      transition: 'all 0.2s',
                      cursor: 'pointer',
                      appearance: 'none',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.background = '#fff';
                      e.target.style.boxShadow = '0 0 0 4px var(--accent-soft)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'var(--border-light)';
                      e.target.style.background = '#F8F8FB';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="" disabled>Select budget range...</option>
                    <option value="under-2500">Under $2,500/mo</option>
                    <option value="2500-5000">$2,500 – $5,000/mo</option>
                    <option value="5000-10000">$5,000 – $10,000/mo</option>
                    <option value="10000-25000">$10,000 – $25,000/mo</option>
                    <option value="25000+">$25,000+/mo</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="challenge" style={{
                    display: 'block',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--text-tertiary)',
                    marginBottom: '8px',
                  }}>
                    Biggest Marketing Challenge
                  </label>
                  <textarea
                    id="challenge"
                    required
                    placeholder="Tell us what's not working and what you're trying to achieve..."
                    rows={3}
                    value={formData.challenge}
                    onChange={e => setFormData(prev => ({ ...prev, challenge: e.target.value }))}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: '#F8F8FB',
                      border: '1px solid var(--border-light)',
                      borderRadius: '12px',
                      color: 'var(--text-primary)',
                      fontSize: '15px',
                      fontFamily: "'DM Sans', sans-serif",
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'all 0.2s',
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.background = '#fff';
                      e.target.style.boxShadow = '0 0 0 4px var(--accent-soft)';
                    }}
                    onBlur={e => {
                      e.target.style.borderColor = 'var(--border-light)';
                      e.target.style.background = '#F8F8FB';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                {error && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '16px',
                    background: '#FEF2F2',
                    border: '1px solid #FECACA',
                    borderRadius: '12px',
                    fontSize: '14px',
                    color: '#B91C1C',
                    fontWeight: 500,
                  }}>
                    <AlertCircle size={18} />
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-purple"
                  style={{
                    marginTop: '8px',
                    width: '100%',
                    justifyContent: 'center',
                    padding: '20px',
                    fontSize: '17px',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                >
                  {loading ? 'Processing...' : 'Claim Your Free Audit ↗'}
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '48px 0' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--accent-soft)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 32px'
              }}>
                <CheckCircle size={40} color="var(--accent-primary)" />
              </div>
              <h3 style={{ fontSize: '32px', marginBottom: '16px' }}>You&apos;re In!</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', margin: '0 auto 40px', fontSize: '18px' }}>
                We&apos;ve received your request. A growth strategist will reach out to you within 2 hours.
              </p>
              <Link href="/" className="btn-white" style={{ padding: '16px 40px' }}>
                Return to Homepage
              </Link>
            </div>
          )}

          {/* Trust signals */}
          {!submitted && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              justifyContent: 'center',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid var(--border-light)',
            }}>
              {[
                { icon: '🔒', text: "100% Secure" },
                { icon: '⚡', text: "Quick Response" },
                { icon: '🇺🇸', text: "US Based Studio" },
              ].map(item => (
                <div key={item.text} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: 600,
                  color: 'var(--text-tertiary)',
                }}>
                  <span>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
