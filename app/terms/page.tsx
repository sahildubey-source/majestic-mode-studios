import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Majestic Mode Studios.',
};

export default function TermsPage() {
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
        <h1 style={{ marginBottom: '48px' }}>Terms of <span className="text-highlight">Service</span></h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <p style={{ fontWeight: 600 }}>
            <span style={{ color: 'var(--text-tertiary)' }}>Effective Date:</span> <span style={{ color: 'var(--text-primary)' }}>January 1, 2025</span>
          </p>
          
          {[
            { heading: '1. Acceptance of Terms', body: 'By accessing and using the Majestic Mode Studios website and services, you accept and agree to be bound by the terms and provisions of this agreement.' },
            { heading: '2. Services', body: 'Majestic Mode Studios provides digital marketing services including but not limited to AI video production, paid media management, social media marketing, SEO, website development, brand identity, and marketing automation. Specific terms for each engagement are outlined in individual service agreements.' },
            { heading: '3. Payment Terms', body: 'All services are billed monthly in advance unless otherwise specified in a service agreement. Invoices are due within 7 days of issuance. Late payments may result in service interruption.' },
            { heading: '4. Intellectual Property', body: 'Upon full payment, clients own all creative assets produced specifically for their brand. Majestic Mode Studios retains rights to display the work in our portfolio unless otherwise agreed in writing.' },
            { heading: '5. Confidentiality', body: 'Both parties agree to maintain the confidentiality of any proprietary information shared during the engagement. We will never share your business data, strategies, or results with competitors.' },
            { heading: '6. Cancellation', body: 'Either party may cancel service with 30 days written notice. No refunds are issued for the current billing period. Cancellation does not affect ownership of assets paid for.' },
            { heading: '7. Limitation of Liability', body: 'Majestic Mode Studios is not liable for any indirect, incidental, or consequential damages arising from use of our services. Our total liability is limited to the amount paid in the current billing month.' },
            { heading: '8. Governing Law', body: 'These terms are governed by the laws of the United States. Any disputes shall be resolved through binding arbitration.' },
            { heading: '9. Contact', body: 'For any questions about these terms, contact us at hello@majesticmodestudios.com.' },
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
