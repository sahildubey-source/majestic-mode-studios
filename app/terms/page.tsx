import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Majestic Mode Studios',
  description: 'Terms of Service for Majestic Mode Studios.',
};

const sections = [
  {
    id: 'intro',
    title: 'Introduction',
    content: `These Terms of Service ("Terms") govern your use of the website and services provided by Majestic Mode Studios ("Company", "we", "us", "our"), a digital marketing agency registered in India.

By visiting our website, booking a consultation, or engaging our services — whether as a monthly retainer client or on a project basis — you ("Client", "you") agree to be bound by these Terms.

If you do not agree with any part of these Terms, please do not use our services.`
  },
  {
    id: 'services',
    title: '1. Services Offered',
    content: `Majestic Mode Studios provides the following services:
• AI Video Ads Creation
• Paid Ads Management (Meta, Google, and other platforms)
• Social Media Management
• Website Development
• SEO & Content Marketing

Services are provided either as:
A) Monthly Retainer: Ongoing service with a fixed monthly fee and agreed deliverables
B) Project Basis: One-time engagement with a defined scope, timeline, and fixed or milestone-based fee

The exact scope of services, deliverables, timeline, and fees will be detailed in a separate Service Agreement or Proposal signed by both parties.`
  },
  {
    id: 'onboarding',
    title: '2. Engagement & Onboarding',
    content: `• Engagement begins upon signing of the Service Agreement and receipt of the advance payment (if applicable).
• Client must provide all necessary assets, access, and information required to begin work within 5 business days of signing.
• Delays caused by the Client in providing required materials will not be considered a breach by Majestic Mode Studios and may result in revised timelines.`
  },
  {
    id: 'timelines',
    title: '3. Deliverables & Timelines',
    content: `• Deliverables will be clearly defined in the Service Agreement or Project Proposal.
• Timelines are estimates based on standard workflows and are subject to Client feedback turnaround times.
• Each project/phase includes up to 2 rounds of revisions unless otherwise agreed in writing.
• Additional revisions beyond the agreed scope will be billed at our standard hourly or per-revision rate.
• Majestic Mode Studios will not be held liable for delays caused by Client's failure to provide approvals, assets, access, or feedback in a timely manner.`
  },
  {
    id: 'payment',
    title: '4. Payment Terms',
    content: `A. Retainer Clients:
• Monthly fees are due on or before the 1st of each month.
• A grace period of 5 days is allowed.
• Services may be paused if payment is not received within the grace period.

B. Project Clients:
• Projects require a minimum 50% advance payment before work begins.
• Remaining balance is due upon project completion/delivery unless milestone-based payments are agreed.

C. General:
• All fees are quoted in INR (Indian Rupees) for Indian clients and in USD for international clients unless otherwise stated.
• Invoices are sent via email.
• Late payments beyond 10 days may attract a 2% monthly late fee.
• We reserve the right to pause or terminate services for non-payment without liability.`
  },
  {
    id: 'ip',
    title: '5. Intellectual Property (IP)',
    content: `A. Client-Owned Materials:
• Any logos, brand assets, images, videos, or content provided by the Client remain the property of the Client.

B. Work Product / Deliverables:
• Upon receipt of full payment, Majestic Mode Studios transfers ownership of final deliverables (ad creatives, copy, website files) to the Client.
• Until full payment is received, all work product remains the property of Majestic Mode Studios.

C. Agency Rights:
• Majestic Mode Studios retains the right to use completed work in our portfolio, case studies, and marketing materials unless the Client requests confidentiality in writing.
• We retain ownership of all proprietary tools, templates, methodologies, processes, and systems used to deliver services — these are NOT transferred to the Client.

D. Third-Party Assets:
• If stock images, music, fonts, or third-party tools are used, the Client is responsible for ensuring proper licensing for their usage. Majestic Mode Studios will notify the Client of any such assets used.`
  },
  {
    id: 'confidentiality',
    title: '6. Confidentiality / Non-Disclosure',
    content: `Both parties agree to keep confidential all non-public information shared during the engagement, including but not limited to:
• Business strategies, campaign data, financials
• Client lists, vendor relationships
• Proprietary methods and creative systems

This obligation survives termination of the agreement for a period of 2 years.

Majestic Mode Studios will not disclose Client information to any third party without written consent, except as required by law or to deliver the agreed services.

Clients will not share our internal processes, templates, campaign strategies, or proprietary methods with competitors or third parties without our written consent.`
  },
  {
    id: 'termination',
    title: '7. Termination',
    content: `A. By Client:
• Monthly retainer clients may terminate with 30 days' written notice via email.
• No refunds for the current month's retainer if notice is given mid-month.
• Project clients may terminate with 14 days' written notice. Work completed up to the date of termination will be billed and is payable.

B. By Majestic Mode Studios:
• We reserve the right to terminate any engagement immediately if:
  - Payment is overdue by more than 15 days
  - Client engages in abusive, threatening, or illegal conduct toward our team
  - Client requests services that are illegal, unethical, or in violation of platform policies
  - Client breaches any material term of this agreement

Upon termination, all outstanding invoices become immediately payable.`
  },
  {
    id: 'liability',
    title: '8. Limitation of Liability',
    content: `• Majestic Mode Studios provides digital marketing services and cannot guarantee specific results, rankings, leads, revenue, or return on ad spend (ROAS), as these depend on multiple external factors including market conditions, platform algorithms, and Client's own product/service.
• We are not liable for any indirect, incidental, special, or consequential damages arising from our services, including loss of revenue, profits, or business opportunities.
• Our maximum liability to any Client shall not exceed the total fees paid by that Client in the 3 months preceding the claim.
• We are not responsible for changes in ad platform policies (Meta, Google, etc.) that affect campaign performance.`
  },
  {
    id: 'indemnification',
    title: '9. Indemnification',
    content: `The Client agrees to indemnify and hold harmless Majestic Mode Studios, its team members, contractors, and affiliates from any claims, damages, losses, or expenses (including legal fees) arising from:
• Content or materials provided by the Client
• The Client's business practices or products/services
• Client's violation of any law or third-party rights
• Unauthorized use of our work product or deliverables`
  },
  {
    id: 'law',
    title: '10. Governing Law & Dispute Resolution',
    content: `These Terms are governed by and construed in accordance with the laws of India.

For Indian Clients:
• Disputes shall be subject to the exclusive jurisdiction of courts in India.
• Parties agree to first attempt resolution through good-faith negotiation for 30 days before litigation.

For International Clients (USA, Europe, Rest of World):
• Disputes shall first be attempted to be resolved through mediation within 30 days of written notice.
• If unresolved, disputes shall be submitted to binding arbitration under Indian Arbitration & Conciliation Act, 1996.
• The seat of arbitration shall be India.
• The language of arbitration shall be English.`
  },
  {
    id: 'prohibited',
    title: '11. Prohibited Conduct',
    content: `Clients must NOT use our services to:
• Promote illegal products, services, or activities
• Spread misinformation, hate speech, or discriminatory content
• Violate advertising platform policies (Meta, Google, etc.)
• Infringe upon the intellectual property rights of others
• Engage in deceptive marketing or fraudulent practices

Violation of this clause results in immediate termination without refund.`
  },
  {
    id: 'modifications',
    title: '12. Modifications to Terms',
    content: `Majestic Mode Studios reserves the right to modify these Terms at any time. We will:
• Update the "Last Updated" date on this page
• Notify active clients via email for material changes

Continued use of our services after changes are effective constitutes your acceptance of the updated Terms.`
  },
  {
    id: 'entire',
    title: '13. Entire Agreement',
    content: `These Terms, together with the signed Service Agreement or Project Proposal, constitute the entire agreement between Majestic Mode Studios and the Client. They supersede all prior discussions, representations, or agreements.

If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force.`
  },
  {
    id: 'contact',
    title: '14. Contact Us',
    content: `For questions about these Terms, contact:

Majestic Mode Studios
Email: support@majesticmodestudios.com
Website: www.majesticmodestudios.com
Response Time: Within 2 business hours`
  },
];

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
          Legal Framework
        </span>
        <h1 style={{ marginBottom: '16px' }}>Terms of <span className="text-highlight">Service</span></h1>
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
          <p style={{ fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '8px' }}>Need clarification?</p>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>If you have any questions regarding our terms, we&apos;re here to help.</p>
          <a href="mailto:support@majesticmodestudios.com" className="btn-purple" style={{ padding: '12px 32px' }}>
            Contact Legal Team
          </a>
        </div>
      </div>
    </div>
  );
}
