import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Majestic Mode Studios.',
};

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: '180px', paddingBottom: '120px', background: 'transparent', minHeight: '100vh' }}>
      <div className="container-main" style={{ maxWidth: '850px' }}>
        <span style={{ 
          color: 'var(--accent-primary)', 
          fontWeight: 700, 
          fontSize: '12px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em',
          display: 'block',
          marginBottom: '16px'
        }}>
          Legal
        </span>
        <h1 style={{ marginBottom: '48px' }}>Privacy <span className="text-highlight">Policy</span></h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <p style={{ fontWeight: 600 }}>
            <span style={{ color: 'var(--text-tertiary)' }}>Effective Date:</span> <span style={{ color: 'var(--text-primary)' }}>January 1, 2025</span>
          </p>
          
          {[
            { heading: '1. Information We Collect', body: 'We collect information you provide directly to us, including your name, email address, company name, and any other information you include when you complete a form or book a call with us. We also collect usage data such as pages visited, time on site, and browser type through analytics tools.' },
            { heading: '2. How We Use Your Information', body: 'We use the information we collect to respond to your inquiries, schedule and conduct strategy calls, send relevant marketing communications (with your consent), improve our services, and analyze how our website is used.' },
            { heading: '3. Information Sharing', body: 'We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except to trusted partners who assist us in operating our business and serving you, provided they agree to keep this information confidential.' },
            { heading: '4. Cookies', body: 'We use cookies and similar tracking technologies to improve your experience on our site. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.' },
            { heading: '5. Data Security', body: 'We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure.' },
            { heading: '6. Your Rights', body: 'You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by clicking the unsubscribe link in any email or contacting us directly.' },
            { heading: '7. Contact Us', body: 'If you have questions about this Privacy Policy, please contact us at hello@majesticmodestudios.com.' },
          ].map(section => (
            <div key={section.heading}>
              <h2 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '16px' }}>{section.heading}</h2>
              <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
