import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Majestic Mode Studios',
  description: 'Privacy Policy for Majestic Mode Studios.',
};

const sections = [
  {
    id: 'intro',
    title: 'Introduction',
    content: `Majestic Mode Studios ("Company", "we", "us", "our") is a digital marketing agency registered in India, providing services including AI Video Ads, Paid Ads Management, Social Media Marketing, Website Development, and SEO & Content to clients in India, the United States, Europe, and worldwide.

This Privacy Policy explains how we collect, use, store, and protect personal information when you visit our website, inquire about our services, or engage us as a client.

By using our website or services, you agree to this Privacy Policy. If you do not agree, please stop using our website and contact us at support@majesticmodestudios.com.`
  },
  {
    id: 'collection',
    title: '1. Information We Collect',
    content: `A. Information You Provide Directly:
• Full name, email address, phone number, and business name (via contact forms, booking forms, or email)
• Project details, goals, budgets shared during consultations
• Communication records via email, WhatsApp, or social media
• Documents or assets shared for campaign execution

B. Information Collected Automatically:
• IP address, browser type, operating system, device type
• Pages visited, time spent on site, referral URLs
• Geographic location (country/city level, from IP address)
• Cookies, tracking pixels, and similar technologies`
  },
  {
    id: 'usage',
    title: '2. How We Use Your Information',
    content: `We use your information for the following purposes:
• To respond to inquiries and provide requested services
• To onboard clients and manage ongoing projects
• To communicate project updates, reports, and invoices
• To send marketing emails and newsletters (with your consent)
• To improve our website and service offerings
• To analyze ad campaign performance for our clients
• To comply with legal obligations in India and other applicable jurisdictions
• To detect and prevent fraud or security issues

We NEVER sell your personal data to any third party.`
  },
  {
    id: 'sharing',
    title: '3. Data Sharing',
    content: `We may share your information only in these circumstances:
• Service Providers: Trusted tools and platforms (Meta Ads, Google Ads, email marketing tools, CRM, cloud hosting) that process data on our behalf under confidentiality agreements.
• Legal Obligations: When required by law, court order, or government authority under Indian or international law.
• Business Transfers: In case of merger or acquisition, with advance notice to affected users.
• Client Reporting: Campaign performance data is shared directly with the respective client only.

All third-party service providers are bound to handle data in compliance with applicable privacy laws.`
  },
  {
    id: 'cookies',
    title: '4. Cookies & Tracking',
    content: `Our website uses:
• Essential Cookies: Required for basic website functionality
• Analytics Cookies: Google Analytics (anonymized traffic data)
• Marketing Pixels: Meta Pixel, Google Tag for ad measurement
• Preference Cookies: To remember your settings

You can disable cookies via your browser settings. Some features may not work without essential cookies. For EU/UK visitors, cookie consent is obtained as required by GDPR.`
  },
  {
    id: 'security',
    title: '5. Data Security',
    content: `We implement the following security measures:
• SSL/TLS encryption on all data transmissions
• Access controls — data accessible only to authorized staff
• Secure password-protected project management systems
• Regular security audits and updates

In case of a data breach affecting your rights, we will notify you within 72 hours as required under GDPR, and as required under India's DPDP Act 2023.`
  },
  {
    id: 'retention',
    title: '6. Data Retention',
    content: `• Client Data: Duration of contract + 5 years (legal/tax)
• Inquiry/Lead Data: 2 years from last contact
• Marketing Consent Records: Until withdrawal + 1 year
• Website Analytics: 26 months (Google Analytics default)

After the retention period, data is securely deleted or anonymized.`
  },
  {
    id: 'india-rights',
    title: '7. Your Rights — India',
    content: `If you are located in India, under the DPDP Act 2023 & IT Act 2000, you have the right to:
• Know what personal data we hold about you
• Correct or update inaccurate data
• Request deletion/erasure of your personal data
• Withdraw consent at any time
• Nominate a representative in case of death or incapacity
• File a complaint with the Data Protection Board of India

To exercise these rights, contact: support@majesticmodestudios.com`
  },
  {
    id: 'usa-rights',
    title: '8. Your Rights — USA (CCPA)',
    content: `If you are a California resident, under the California Consumer Privacy Act (CCPA), you have the right to:
• Know the categories of personal data collected
• Request deletion of your personal data
• Opt out of the sale of personal information (Note: We do NOT sell personal data)
• Non-discrimination for exercising your CCPA rights

To submit a CCPA request, email: support@majesticmodestudios.com
Subject: "CCPA Request"
We will respond within 45 days.

All marketing emails comply with the CAN-SPAM Act and include an unsubscribe link. Opt-out requests are honored within 10 business days.`
  },
  {
    id: 'europe-rights',
    title: '9. Your Rights — Europe (GDPR)',
    content: `If you are located in the EU, EEA, or UK, under GDPR you have the right to:
• Access: Request a copy of your personal data
• Rectification: Correct inaccurate or incomplete data
• Erasure: Request deletion ("right to be forgotten")
• Restriction: Limit how we process your data
• Portability: Receive your data in machine-readable format
• Object: To processing based on legitimate interests
• Withdraw Consent: At any time without penalty

Our legal basis for processing: contract performance, legitimate interests, legal obligation, and consent.

To exercise GDPR rights, contact: support@majesticmodestudios.com`
  },
  {
    id: 'children',
    title: "10. Children's Privacy",
    content: `Our services are for business professionals and organizations. We do not knowingly collect data from individuals under 18 years of age.

If you believe we have collected data from a minor, contact us immediately at support@majesticmodestudios.com and we will promptly delete it.`
  },
  {
    id: 'modifications',
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy periodically. When we make material changes, we will:
• Update the "Last Updated" date on this page
• Notify active clients via email for significant changes
• Display a notice on our website

Continued use of our website after changes are effective constitutes acceptance of the revised policy.`
  },
  {
    id: 'contact',
    title: '12. Contact Us',
    content: `Majestic Mode Studios
Email: support@majesticmodestudios.com
Website: www.majesticmodestudios.com
Response Time: Within 2 business hours`
  },
];

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
          Data Protection
        </span>
        <h1 style={{ marginBottom: '16px' }}>Privacy <span className="text-highlight">Policy</span></h1>
        <p style={{ color: 'var(--text-tertiary)', fontSize: '14px', marginBottom: '64px' }}>
          Last Updated: May 12, 2026 • Effective Date: May 12, 2025
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
          {sections.map((section) => (
            <div key={section.id} id={section.id}>
              <h2 style={{ 
                fontSize: '24px', 
                color: 'var(--text-primary)', 
                marginBottom: '20px',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800
              }}>
                {section.title}
              </h2>
              <div style={{ 
                fontSize: '16px', 
                lineHeight: '1.8', 
                color: 'var(--text-secondary)',
                whiteSpace: 'pre-wrap'
              }}>
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          marginTop: '80px', 
          padding: '40px', 
          background: 'var(--accent-soft)', 
          borderRadius: '24px', 
          textAlign: 'center',
          border: '1px solid var(--accent-light)'
        }}>
          <p style={{ fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '8px' }}>Privacy is Paramount</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>Questions about how we handle your data? Our DPO is ready to assist.</p>
          <a href="mailto:support@majesticmodestudios.com" className="btn-purple" style={{ padding: '12px 32px' }}>
            Email Data Officer
          </a>
        </div>
      </div>
    </div>
  );
}
