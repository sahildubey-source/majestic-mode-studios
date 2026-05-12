import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, budget, challenge } = body;

    console.log('--- Incoming Contact Form ---');
    console.log('Body:', body);
    console.log('API Key present:', !!process.env.RESEND_API_KEY);
    console.log('API Key value starts with:', process.env.RESEND_API_KEY?.substring(0, 7));

    // ── Validation ──────────────────────────────────────────────
    if (!name || !email || !company || !budget || !challenge) {
      console.log('Validation failed: missing fields');
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const budgetLabels: Record<string, string> = {
      'under-2500':   'Under $2,500/mo',
      '2500-5000':    '$2,500 – $5,000/mo',
      '5000-10000':   '$5,000 – $10,000/mo',
      '10000-25000':  '$10,000 – $25,000/mo',
      '25000+':       '$25,000+/mo',
    };

    const budgetLabel = budgetLabels[budget] ?? budget;
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL ?? 'hello@majesticmodestudios.com';
    const fromEmail   = process.env.RESEND_FROM_EMAIL  ?? 'onboarding@resend.dev';

    // ── Send lead notification email to YOU ─────────────────────
    const sendNotify = await resend.emails.send({
      from: `Majestic Mode Studios <${fromEmail}>`,
      to:   [notifyEmail],
      replyTo: email,
      subject: `🔥 New Lead: ${name} — ${budgetLabel}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #080808; color: #F2F2F2; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
            .card { background: #111; border: 1px solid #222; border-radius: 12px; padding: 32px; }
            .badge { display: inline-block; background: rgba(123,92,240,0.15); border: 1px solid rgba(123,92,240,0.3); color: #9B7EF8; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 12px; border-radius: 100px; margin-bottom: 24px; }
            h1 { font-size: 24px; font-weight: 700; margin: 0 0 8px; color: #fff; }
            .subtitle { font-size: 14px; color: #6A6A6A; margin: 0 0 32px; }
            .field { margin-bottom: 20px; }
            .field-label { font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #4A4A4A; margin-bottom: 6px; font-weight: 600; }
            .field-value { font-size: 15px; color: #E0E0E0; line-height: 1.6; }
            .field-value a { color: #9B7EF8; text-decoration: none; }
            .divider { border: none; border-top: 1px solid #222; margin: 24px 0; }
            .cta { display: inline-block; background: #fff; color: #080808; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 100px; text-decoration: none; margin-top: 8px; }
            .footer { margin-top: 32px; font-size: 12px; color: #3A3A3A; text-align: center; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="card">
              <div class="badge">✦ New Lead</div>
              <h1>You've got a new enquiry</h1>
              <p class="subtitle">Someone filled out the audit form on majesticmodestudios.com</p>

              <div class="field">
                <div class="field-label">Name</div>
                <div class="field-value">${name}</div>
              </div>

              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>

              <div class="field">
                <div class="field-label">Company</div>
                <div class="field-value">${company}</div>
              </div>

              <div class="field">
                <div class="field-label">Monthly Marketing Budget</div>
                <div class="field-value">${budgetLabel}</div>
              </div>

              <hr class="divider" />

              <div class="field">
                <div class="field-label">Their Biggest Challenge</div>
                <div class="field-value">${challenge.replace(/\n/g, '<br/>')}</div>
              </div>

              <a href="mailto:${email}" class="cta">Reply to ${name} →</a>
            </div>
            <div class="footer">
              Majestic Mode Studios · Lead notification · ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'full', timeStyle: 'short' })}
            </div>
          </div>
        </body>
        </html>
      `,
    });
    console.log('Notify Email Result:', sendNotify);

    // ── Send confirmation email to THE LEAD ──────────────────────
    const sendConfirm = await resend.emails.send({
      from: `Majestic Mode Studios <${fromEmail}>`,
      to:   [email],
      subject: `We've received your request — talk soon, ${name.split(' ')[0]}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #080808; color: #F2F2F2; margin: 0; padding: 0; }
            .wrapper { max-width: 600px; margin: 0 auto; padding: 40px 24px; }
            .card { background: #111; border: 1px solid #222; border-radius: 12px; padding: 40px; }
            .logo { font-size: 18px; font-weight: 800; color: #fff; letter-spacing: -0.02em; margin-bottom: 32px; }
            h1 { font-size: 26px; font-weight: 700; margin: 0 0 16px; color: #fff; line-height: 1.2; }
            p { font-size: 15px; color: #8A8A8A; line-height: 1.75; margin: 0 0 20px; }
            .highlight { color: #F2F2F2; }
            .steps { margin: 28px 0; }
            .step { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px; }
            .step-num { background: rgba(123,92,240,0.15); border: 1px solid rgba(123,92,240,0.25); color: #9B7EF8; width: 28px; height: 28px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; flex-shrink: 0; }
            .step-text { font-size: 14px; color: #8A8A8A; padding-top: 4px; }
            .step-text strong { color: #F2F2F2; }
            .footer { margin-top: 32px; font-size: 12px; color: #3A3A3A; text-align: center; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="card">
              <div class="logo">✦ Majestic Mode Studios</div>
              <h1>Got it, ${name.split(' ')[0]}. We'll be in touch within 2 hours.</h1>
              <p>Thanks for reaching out. We've received your request for a free marketing audit and strategy call.</p>
              <p>Here's what happens next:</p>
              <div class="steps">
                <div class="step">
                  <div class="step-num">1</div>
                  <div class="step-text"><strong>We review your submission</strong> — our team looks at your challenge and budget to prepare specific insights for your brand.</div>
                </div>
                <div class="step">
                  <div class="step-num">2</div>
                  <div class="step-text"><strong>We reach out within 2 hours</strong> — expect an email or calendar invite to schedule your free 30-min strategy call.</div>
                </div>
                <div class="step">
                  <div class="step-num">3</div>
                  <div class="step-text"><strong>Free audit, no strings</strong> — on the call we'll show you exactly what's holding your growth back. No pitch, no pressure.</div>
                </div>
              </div>
              <p style="font-size:13px;">Questions in the meantime? Just reply to this email — it goes straight to our team.</p>
            </div>
            <div class="footer">
              Majestic Mode Studios · You're receiving this because you submitted a form at majesticmodestudios.com
            </div>
          </div>
        </body>
        </html>
      `,
    });
    console.log('Confirmation Email Result:', sendConfirm);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('[/api/contact] Error:', error);
    return NextResponse.json(
      { error: 'Failed to send. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
