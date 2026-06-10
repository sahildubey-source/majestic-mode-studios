import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';

// Static blog post data
const posts: Record<string, {
  tag: string; title: string; date: string; readTime: string; color: string;
  content: string;
}> = {
  'ai-video-ads-2025': {
    tag: 'AI & Creative', title: 'How AI Video Ads Outperform Traditional Ads in 2025',
    date: 'May 8, 2025', readTime: '7 min read', color: 'var(--accent-primary)',
    content: `The advertising landscape shifted dramatically in 2024. AI-generated video creatives are now consistently outperforming manually produced ads across every major platform — Meta, TikTok, YouTube, and Google.

**The Data**

Across our client portfolio, AI-optimized video creatives average:
- 2.8x higher CTR vs. traditional video ads
- 34% lower CPM due to relevance scoring
- 5x faster creative production cycle
- 3x more creative variants tested per month

**Why AI Video Works**

Traditional video production bottlenecks creative testing. When it costs $3,000 and 2 weeks to produce a single video, you can test 4-6 creatives per quarter.

AI collapses that cycle. We can produce 20-40 creative variants per week, test them in live traffic, and double down on winners within 72 hours.

**The Winning Formula**

The best AI video ads follow a specific pattern: Hook (0-2s) → Problem statement (2-5s) → Solution reveal (5-12s) → Social proof (12-20s) → CTA (20-30s).

We build this framework into every creative we produce, then use AI to generate rapid variants of each section.

**What's Next**

Real-time personalization — dynamic AI video ads that change based on the viewer's demographics, behavior, and purchase history — is already here. Brands adopting this in 2025 will have a significant first-mover advantage.`,
  },
  'social-media-ecommerce-2025': {
    tag: 'Social Media', title: 'Best Social Media Marketing Strategies for eCommerce Brands in 2025',
    date: 'May 3, 2025', readTime: '9 min read', color: 'var(--accent-peach)',
    content: `Organic social reach has declined, but brands willing to adapt are still driving extraordinary results. Here's what's actually working in 2025.

**What Changed**

Instagram and TikTok algorithms have shifted decisively toward content that gets saved and shared — not just liked. This means educational, entertaining, and aspirational content outperforms pure product promotion.

**The Content System That Works**

The brands we've seen grow fastest operate a 3-pillar content system: 40% education (how-to guides, insights), 40% entertainment (storytelling, behind-the-scenes), and 20% promotion (products, offers, social proof).

**Frequency Matters**

Brands posting consistently 5-7x per week on Reels/TikTok dramatically outperform those posting 2-3x per week. Volume enables algorithmic learning and faster creative iteration.

**The Creator Economy Integration**

The fastest-growing eCommerce brands we work with are integrating micro-influencer partnerships into their content system — not as a separate strategy but as an extension of their owned content.`,
  },
  'google-ads-failing': {
    tag: 'Paid Media', title: 'How to Fix Underperforming Google Ads Campaigns in 2025',
    date: 'April 28, 2025', readTime: '6 min read', color: 'var(--accent-primary)',
    content: `After auditing 40+ Google Ads accounts, we've identified 8 consistent mistakes that are killing ROI for most businesses.

**Mistake 1: Broad Match Without Controls**

Broad match keywords are powerful — but without proper negative keyword lists and Target CPA bidding, you'll waste 40-60% of your budget on irrelevant searches.

**Mistake 2: Weak Landing Pages**

Google sends the traffic, your landing page converts it. A campaign with a 1% conversion rate landing page versus a 4% landing page produces 4x the revenue at the same ad spend.

**Mistake 3: Ignoring Search Terms Report**

Every week, you should be mining your search terms report for negative keywords, new keyword opportunities, and messaging insights.

**Mistake 4: No Conversion Tracking**

You cannot optimize what you don't measure. Before you spend $1 on Google Ads, your conversion tracking must be bulletproof — calls, form fills, purchases, all tracked.

**The Fix**

A properly structured Google Ads account has tightly themed ad groups, exact and phrase match keywords with comprehensive negatives, RSAs with 15 unique headlines, conversion-optimized landing pages, and weekly optimization cadence.`,
  },
  'google-ads-10x-roas': {
    tag: 'Paid Media',
    title: 'How to Get 10x ROAS with Google Ads in 2025',
    date: 'May 15, 2025',
    readTime: '9 min read',
    color: 'var(--accent-primary)',
    content: `Most businesses running Google Ads are happy with 3-4x ROAS. The ones we work with consistently hit 8-12x. Here's the exact difference in how they operate.

**Why Most Google Ads Underperform**

The default Google Ads setup — broad match keywords, smart campaigns, auto-bidding from day one — is designed for Google's revenue, not yours. Without a structured account architecture, you're funding Google's algorithm while your competitors take your customers.

**The Foundation: Account Structure**

High-ROAS accounts follow a strict structure. Each campaign targets one goal. Each ad group targets one tightly themed keyword cluster. This gives Google's algorithm clean signals and gives you clean data.

Start with three campaign types:
- Brand campaigns (your company name) — protect your brand, cheapest clicks
- High-intent service campaigns (your core services + "agency", "company", "services")
- Competitor campaigns (target competitor brand names)

**Keyword Strategy That Actually Works**

Stop using broad match without controls. Use exact and phrase match for your core keywords, and run a tightly managed broad match campaign separately with Target CPA bidding only after you have 30+ conversions.

Every week, mine your Search Terms report. Add irrelevant terms as negatives. Add new relevant terms as keywords. This single habit separates 3x ROAS accounts from 10x ROAS accounts.

**The Landing Page Is 50% of Your ROAS**

Your ad gets the click. Your landing page gets the conversion. A 1% conversion rate landing page versus a 5% conversion rate landing page produces 5x the revenue at identical ad spend.

Every landing page must have: a headline matching the ad's promise, social proof above the fold, one clear CTA, fast load time under 2 seconds, and mobile optimization.

**Bidding Strategy Progression**

Week 1-4: Manual CPC — control every bid, learn what converts
Month 2: Target CPA — let Google optimize once you have conversion data
Month 3+: Target ROAS — the most powerful bidding strategy, but only works with sufficient data

Never start with Target ROAS on a new account. You'll burn budget before the algorithm learns.

**The Creative Formula for Search Ads**

Your RSA needs 15 unique headlines and 4 descriptions. Include your primary keyword in at least 3 headlines. Include a number (years of experience, clients served, ROAS achieved). Include urgency or a specific offer. Include a question that agitates the problem.

**Real Results**

For ABGI Institute, we managed high-volume Google Ads campaigns that delivered 708K+ clicks with optimized CPC and lead-focused targeting. The key was clean account structure, weekly negative keyword additions, and conversion-optimized landing pages.

**What to Do Next**

If your Google Ads are delivering under 5x ROAS, your account has structural issues. Book a free audit — we'll identify exactly what's costing you and show you the roadmap to 10x.`,
  },
  'marketing-funnel-ecommerce': {
    tag: 'Strategy',
    title: 'eCommerce Marketing Funnel: Complete Guide to Building One in 2025',
    date: 'May 15, 2025',
    readTime: '8 min read',
    color: 'var(--accent-peach)',
    content: `Every rupee you spend on ads without a proper funnel is a rupee wasted. A marketing funnel is the system that turns strangers into customers — and customers into repeat buyers.

**What Is a Marketing Funnel?**

A marketing funnel maps the journey a customer takes from first discovering your brand to making a purchase. Most eCommerce brands skip the funnel and go straight to selling — which is why most ad campaigns underperform.

The three stages are simple: Awareness (they discover you), Consideration (they evaluate you), Conversion (they buy from you).

**Stage 1: Awareness — Get in Front of the Right People**

Your awareness content should educate and entertain, not sell. Reels, TikToks, blog posts, and YouTube shorts that solve a problem or spark curiosity. The goal is to make your target customer aware that your brand exists.

Paid awareness: Meta broad targeting, YouTube pre-rolls, Google Display campaigns targeting relevant interests. Keep CPM low, reach wide, test multiple creatives.

**Stage 2: Consideration — Build Trust**

Once someone has seen your brand, retarget them with trust-building content: customer testimonials, before/after results, behind-the-scenes content, product demonstrations.

This stage is where most brands drop the ball. They retarget with the same product ad the person already ignored. Instead, show them a different angle — social proof, a review, a story.

**Stage 3: Conversion — Make Buying Easy**

Your conversion campaigns target people who have visited your product pages, added to cart, or engaged with your content in the last 14 days. These people know you. Now give them a reason to buy today.

Use urgency (limited stock), value (bundle offer), or risk removal (free returns, money-back guarantee). Your landing page must be fast, clear, and frictionless.

**The Post-Purchase Funnel**

Most eCommerce brands ignore what happens after the first purchase. This is a massive mistake. A customer who has bought once is 5x more likely to buy again.

Build a post-purchase sequence: thank you email within 1 hour, product education email at day 3, cross-sell email at day 7, review request at day 14, loyalty offer at day 30.

**Metrics to Track at Each Stage**

Awareness: CPM, reach, video views, CTR
Consideration: engagement rate, link clicks, cost per landing page view
Conversion: conversion rate, cost per purchase, ROAS, average order value
Retention: repeat purchase rate, customer lifetime value, email open rate

**What to Do Next**

If you're spending on ads without a structured funnel, you're leaving 60-70% of your potential revenue on the table. Book a free strategy audit — we'll map out your full funnel and show you exactly where the leaks are.`,
  },
  'instagram-reels-strategy-2025': {
    tag: 'Social Media',
    title: 'Instagram Reels Strategy for Brands in 2025',
    date: 'May 15, 2025',
    readTime: '7 min read',
    color: 'var(--accent-peach)',
    content: `Instagram Reels is the single highest-reach organic content format available to brands in 2025. Brands that master it are building audiences of tens of thousands — for free. Here's exactly how.

**Why Reels Still Dominates**

Instagram's algorithm prioritizes Reels over every other content format. A Reel from a brand with 500 followers can reach 50,000 people if it holds attention. No other format gives new brands this kind of organic reach.

The catch: most brand Reels are boring. They look like ads. The algorithm buries them.

**The Hook Is Everything**

You have 1.5 seconds to stop the scroll. Your first frame and first line of audio must create enough curiosity or emotion to make someone pause.

Hooks that work in 2025:
- Controversy: "Why we stopped running Meta ads for 30 days"
- Curiosity: "The one thing 10x ROAS brands do differently"
- Value promise: "3 mistakes killing your Instagram reach (and how to fix them)"
- Pattern interrupt: Start mid-action, mid-sentence, or with a surprising visual

**The Content Pillars System**

Stop posting randomly. The brands growing fastest on Instagram operate a 3-pillar content system posted consistently every week.

Pillar 1 — Education (40%): How-to content, tips, insights, breakdowns. This gets saved and shared, which signals the algorithm to boost reach.

Pillar 2 — Entertainment (40%): Behind-the-scenes, storytelling, relatable content, trends with your brand's spin. This gets watched fully, which increases your account's watch time score.

Pillar 3 — Promotion (20%): Product showcases, offers, testimonials, case studies. Keep this to 20% maximum — more kills organic reach.

**Posting Frequency**

5 Reels per week is the sweet spot for brand growth in 2025. Less than 3 per week and the algorithm deprioritizes your account. More than 7 and quality suffers.

Consistency beats virality. An account posting 5 solid Reels per week will outgrow one that posts 1 viral Reel per month.

**Audio Strategy**

Use trending audio for entertainment content — it gets a natural algorithmic boost. Use original audio for educational content — it builds your brand voice and can itself go viral.

Check the Instagram Reels audio trending page every Monday. Save 5-10 trending sounds for the week.

**Hashtag and Caption Strategy**

In 2025, hashtags matter less than they used to. Use 3-5 highly relevant hashtags maximum. Spend more time on your caption — the first line must hook the reader to tap "more", and the rest should add value or drive engagement.

End every caption with a question or a CTA. Comments boost reach more than likes.

**Real Results**

For Bowl Mami, we created a visually engaging social media content system that strengthened their brand presence and drove consistent audience growth through strategic Reels content.

**What to Do Next**

If your Instagram isn't growing or your Reels aren't reaching beyond your existing followers, your content system needs a rebuild. Book a free strategy call — we'll audit your account and give you a 30-day content plan.`,
  },
  'automation-marketing-agency': {
    tag: 'Automation',
    title: '10 Marketing Automation Workflows Every Agency Should Have',
    date: 'April 15, 2025',
    readTime: '5 min read',
    color: 'var(--accent-primary)',
    content: `The agencies growing fastest in 2025 aren't working harder — they're automated smarter. Here are the 10 workflows saving our team 25+ hours per week.

**Why Automation Is Now Non-Negotiable**

Manual marketing operations don't scale. Every hour your team spends on repetitive tasks — sending follow-up emails, posting to social media, updating spreadsheets — is an hour not spent on strategy, creative, and client results. Automation removes the ceiling on what a lean team can accomplish.

**Workflow 1: Lead Capture to CRM**

Every form submission on your website should automatically create a contact in your CRM, tag them by service interest, and trigger a follow-up sequence. No manual data entry. No leads falling through the cracks. Tools: Zapier + HubSpot or Zoho CRM.

**Workflow 2: Lead Nurture Email Sequence**

A new lead who doesn't convert immediately isn't a lost lead — they're a future client who needs more nurturing. Automatically enroll every new lead in a 5-email sequence over 14 days: value content, case study, FAQ, offer, final follow-up. Average conversion lift: 40-60% more leads closed.

**Workflow 3: Social Media Scheduling**

Batch-create content weekly. Schedule it automatically across Instagram, LinkedIn, and Facebook using Buffer or Later. Your social presence runs consistently without daily manual effort.

**Workflow 4: Client Onboarding**

When a new client signs, automatically trigger: welcome email with onboarding checklist, contract via DocuSign, invoice via Stripe, project setup in your project management tool, kickoff call scheduling link. What used to take 2 hours of admin now takes 0.

**Workflow 5: Reporting Automation**

Client reports should never be manually built. Connect your ad platforms, Google Analytics, and SEO tools to a dashboard (Google Looker Studio is free) that auto-updates. Send automated weekly or monthly report emails directly from the dashboard.

**Workflow 6: Review Request Sequence**

After project completion or a positive client interaction, automatically send a review request email sequence. Brands using this see 3-5x more Google and Clutch reviews — which directly impacts new business.

**Workflow 7: Re-engagement Campaign**

Contacts who haven't engaged in 60 days get automatically enrolled in a re-engagement sequence: a valuable piece of content, a case study relevant to their industry, and a soft offer. Recover 15-25% of dormant leads.

**Workflow 8: Content Repurposing Pipeline**

Every blog post published automatically triggers: social media post creation prompts, email newsletter draft, LinkedIn article reminder. One piece of content becomes five touchpoints with zero additional manual work.

**Workflow 9: Ad Performance Alerts**

Set automated alerts for when ad campaigns deviate from targets — CPL spikes above threshold, ROAS drops below target, budget pacing issues. Catch problems in hours instead of days.

**Workflow 10: Proposal Follow-Up**

When a proposal is sent and not opened within 24 hours, automatically send a check-in. When opened but not signed within 48 hours, trigger a follow-up call reminder. Automated proposal follow-up increases close rates by 30-40%.

**What to Do Next**

You don't need to implement all 10 workflows at once. Start with lead capture to CRM and the nurture sequence — these two alone will transform your conversion rate. Book a free strategy call and we'll show you exactly how to set these up for your business.`,
  },
  'landing-page-conversion-rate': {
    tag: 'CRO',
    title: 'What Makes a Landing Page Convert: 9 Elements That Double Conversion Rates',
    date: 'April 9, 2025',
    readTime: '10 min read',
    color: 'var(--accent-peach)',
    content: `We A/B tested over 200 landing page variants across eCommerce, education, healthcare, and professional services clients. These 9 elements consistently moved conversion rates from 1-2% to 5-8%. Every single time.

**Why Most Landing Pages Fail**

Most landing pages are built to look good — not to convert. They have beautiful design, vague headlines, and three competing CTAs. The result is a page that impresses designers and frustrates potential customers. Conversion rate optimization is about one thing: removing every possible reason for someone not to take action.

**Element 1: A Headline That Matches the Ad Promise**

The single most important element on any landing page is message match — the headline must directly reflect what the ad said. If your ad says "Free SEO Audit for D2C Brands," your headline must say exactly that. Any disconnect between ad and landing page creates instant distrust and increases bounce rate dramatically.

We've seen conversion rates double simply by aligning headline copy with ad copy. No other changes. Just message match.

**Element 2: A Single, Clear CTA**

Every landing page with two or more CTAs converts worse than one with a single CTA. This is one of the most consistently proven findings in CRO. Multiple options create decision paralysis. One option creates clarity.

Your CTA should be: specific ("Book Your Free 30-Minute Audit"), benefit-led (what they get, not what they do), visually dominant (contrasting color, prominent placement), and repeated 2-3 times down the page.

**Element 3: Social Proof Above the Fold**

Before someone scrolls, they need a reason to trust you. Social proof above the fold — customer logos, review count, a specific result — provides that reason instantly.

Specificity matters enormously. "500+ happy clients" is weak. "17.8x ROAS for Veloura Fashion" is strong. Real numbers from real clients outperform generic claims by 3-4x in conversion impact.

**Element 4: A Benefit-Led Subheadline**

Your headline captures attention. Your subheadline converts it into interest. The subheadline should answer: "What do I get and why does it matter to me?" in one sentence.

Example: Headline — "Free SEO Audit for D2C Brands." Subheadline — "We'll identify exactly why your organic traffic isn't converting and give you a prioritized 30-day roadmap to fix it."

**Element 5: Fast Load Time**

Every second of load time reduces conversions by 7%. A page that loads in 4 seconds converts 28% worse than one that loads in 1 second. This is not a minor technical detail — it's a major conversion lever.

Target under 2 seconds on mobile. Use Next.js image optimization, lazy loading for below-fold content, and async font loading. Run PageSpeed Insights monthly and treat anything under 85 on mobile as a conversion problem.

**Element 6: A Risk Reversal**

The biggest barrier to conversion is perceived risk. "What if this doesn't work? What if I waste my money?" Risk reversal removes that barrier entirely.

Risk reversals that work: money-back guarantees, free trials, free first session, "cancel anytime," performance-based pricing. Even a simple "no credit card required" on a free trial CTA significantly increases conversion rates.

**Element 7: Urgency and Scarcity**

Urgency creates action. Without a reason to act now, most visitors will intend to come back — and never do. Ethical urgency (not fake countdown timers) includes: limited spots available this month, price increasing after a date, bonus available for a limited time.

For service businesses: "We take on 3 new clients per month — 1 spot remaining" is honest if true, and highly effective.

**Element 8: A Visual Hierarchy That Guides the Eye**

Your page layout must guide visitors through a specific journey: headline → subheadline → social proof → benefits → CTA. If the eye doesn't know where to go next, it leaves.

Use size, color, and whitespace to create clear visual hierarchy. Your CTA button should be the most visually prominent element on the page. Every section should naturally lead to the next.

**Element 9: Mobile-First Design**

Over 70% of ad traffic lands on mobile. A landing page designed for desktop and adapted for mobile will always underperform one designed mobile-first. Text must be readable without zooming. CTAs must be thumb-friendly (minimum 44px height). Forms must have large input fields. Load time on 4G must be under 2 seconds.

Test your landing page on a real mobile device every time you make changes. Emulators miss real-world friction points.

**The Results**

For Aurelia Jewellery, implementing these 9 elements on their campaign landing pages increased conversion rate from 1.4% to 6.2% — a 4.4x improvement with zero increase in ad spend. Same traffic, dramatically more revenue.

**What to Do Next**

If your landing pages are converting under 3%, you're leaving the majority of your ad spend on the table. Book a free audit — we'll review your current pages and give you a prioritized list of changes that will move the needle fastest.`,
  },
  'seo-compound-growth': {
    tag: 'SEO',
    title: 'Why SEO is the Highest-ROI Marketing Channel (With Data)',
    date: 'April 21, 2025',
    readTime: '8 min read',
    color: '#FFB800',
    content: `SEO (Search Engine Optimization) is the ultimate compound interest of digital marketing. While paid advertising behaves like a faucet — turn it off, and the leads stop — SEO behaves like a flywheel. Every piece of high-quality content you publish is an asset that builds authority, drives traffic, and attracts high-intent prospects month after month, with zero incremental ad spend.

**The Data**

We analyzed 18 months of marketing data across 24 B2B and eCommerce client accounts. Here is what we found:
- SEO leads convert at a 14.6% close rate, compared to 1.7% for outbound or cold paid media.
- The average Customer Acquisition Cost (CAC) for organic search is 61% lower than paid ads.
- Organic traffic value grows by 28% month-over-month on average once authority is established.
- 72% of customers research a service or product online before choosing a provider.

**Why SEO Outperforms Paid Channels Long-Term**

Paid acquisition is getting increasingly expensive. Meta CPMs increased by 22% year-over-year, and Google CPCs are at an all-time high in competitive niches.

SEO protects your business from ad fatigue and algorithm updates. By building deep topical authority, you capture searchers at the exact moment they are looking for a solution, making them highly receptive to your offer.

**The Topical Authority Framework**

Google's search engine is smart. It no longer ranks pages based on keyword density. Instead, it ranks sites based on their demonstration of Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T).

To win, we build content hubs using the Hub-and-Spoke model:
1. Identify 3-4 core pillars of your service (e.g., Performance Ads, CRO, Automation).
2. Write an ultra-comprehensive, 3,000+ word "Hub" page covering the topic broadly.
3. Write 8-10 "Spoke" articles targeting highly specific long-tail keywords (e.g., "10x ROAS Google Ads guide").
4. Interlink them strategically to pass PageRank and context to the hub.

**Our Case Study: Real Results**

For Majestic Mode Studios clients, organic traffic isn't just vanity metrics. We focus on search intent. By targeting transactional keywords (e.g., "AI video ads agency") rather than broad informational terms, we drive qualified leads directly into sales pipelines.

**What to Do Next**

If you're spending on ads without a structured SEO strategy, you're leaving a high-yield asset unbuilt. Book a free strategy call — we'll analyze your search opportunity and map out your authority blueprint.`,
  },
  'scale-d2c-brand-meta-ads': {
    tag: 'Paid Media',
    title: 'How to Scale a D2C Brand with Meta Ads in 2025',
    date: 'May 15, 2025',
    readTime: '10 min read',
    color: 'var(--accent-primary)',
    content: `If you're running a D2C brand and not scaling with Meta ads, you're leaving serious revenue on the table. Meta's advertising platform — Instagram and Facebook combined — remains the single most powerful tool for D2C growth in 2025.

Here's the exact framework we use to scale D2C brands from Rs.5L/month to Rs.50L/month in ad spend.

**Why Meta Ads Work for D2C**

Meta has purchase intent data on over 3 billion users. When your product matches what someone has shown interest in — fashion, wellness, food, jewellery — Meta can put your ad in front of them at exactly the right moment.

Unlike Google, which captures existing demand, Meta creates demand. You're showing your product to people who didn't know they needed it — and converting them anyway.

**Phase 1: Build the Foundation (Month 1)**

Before spending a rupee on ads, you need three things locked in:
- A conversion-optimized landing page (minimum 3% conversion rate)
- Meta Pixel installed and tracking purchases, add-to-carts, and initiate checkouts
- A creative library of at least 10 ad variants — static images, short videos, and UGC-style content

Without these, scaling will only scale your losses.

**Phase 2: Find Your Winners (Month 2)**

Launch a structured testing campaign with a daily budget of Rs.2,000-Rs.5,000. Test three different audiences, three different creatives per audience, and two different offers. After 7 days, identify your Cost Per Purchase. Any ad set delivering below your target gets scaled. Everything else gets cut.

**Phase 3: Scale Aggressively (Month 3+)**

Once you have winning creatives and audiences, scale using two methods. Vertical scaling: increase budget by 20-30% every 3 days on winning ad sets. Horizontal scaling: duplicate winning ad sets into new audiences — different age groups, different countries, different interest clusters.

**The Creative Formula That Converts**

After running hundreds of D2C campaigns, one creative structure consistently outperforms everything else:
- 0-3 seconds: Pattern interrupt hook
- 3-8 seconds: Problem agitation
- 8-18 seconds: Product as solution
- 18-25 seconds: Social proof — real reviews, real numbers
- 25-30 seconds: Urgency CTA

**Retargeting: Where the Real Money Is**

70% of D2C revenue from Meta comes from retargeting. Build three audiences: website visitors (last 30 days), add-to-cart abandoners (last 14 days), and past purchasers (last 90 days). A properly structured retargeting funnel alone can add 2-3x ROAS to your overall account.

**Real Results**

For Veloura Fashion, we implemented this exact framework and achieved 17.8x ROAS — scaling them to Rs.67.9L in revenue in a single quarter. The key was disciplined creative testing, a conversion-optimized funnel, and relentless weekly optimization.

**What to Do Next**

If you're a D2C brand spending between Rs.50,000 and Rs.5,00,000 per month on Meta ads and not seeing at least 4x ROAS, your funnel has a leak. Book a free strategy audit — we'll pinpoint exactly where you're losing money.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post Not Found' };

  const canonicalUrl = `https://www.majesticmodestudios.com/blog/${slug}`;
  const excerpt = post.content
    .replace(/\*\*/g, '')
    .replace(/\n/g, ' ')
    .slice(0, 160)
    .trim();

  return {
    title: post.title + ' | Majestic Mode Studios',
    description: excerpt,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: 'article',
      title: post.title + ' | Majestic Mode Studios',
      description: excerpt,
      url: canonicalUrl,
      siteName: 'Majestic Mode Studios',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title + ' | Majestic Mode Studios',
      description: excerpt,
      images: ['/og-image.jpg'],
      creator: '@majesticmode',
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <div style={{ paddingTop: '180px', textAlign: 'center', background: 'transparent', minHeight: '100vh' }}>
        <div className="container-main">
          <h1>Post not found</h1>
          <Link href="/blog" className="btn-white" style={{ marginTop: '24px', display: 'inline-flex' }}>← Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <article style={{ background: 'transparent', minHeight: '100vh' }}>
      <div style={{ paddingTop: '160px', paddingBottom: '64px', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container-main" style={{ maxWidth: '850px' }}>
          <Link href="/blog" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontSize: '14px', fontWeight: 700, color: 'var(--text-tertiary)', textDecoration: 'none',
            marginBottom: '40px', transition: 'color 0.2s',
          }}>
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <span style={{
            fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: post.color, padding: '6px 12px',
            background: 'var(--bg-base)', borderRadius: '100px',
            display: 'inline-block', marginBottom: '24px',
          }}>{post.tag}</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', lineHeight: 1.1, marginBottom: '24px' }}>{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '13px', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={15} /> {post.readTime}</span>
            <span>{post.date}</span>
            <span style={{ color: 'var(--accent-primary)' }}>By Majestic Mode Team</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '80px 0 140px' }}>
        <div className="container-main" style={{ maxWidth: '850px' }}>
          <div style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('**') && block.endsWith('**')) {
                return <h2 key={i} style={{ fontSize: '32px', color: 'var(--text-primary)', marginTop: '56px', marginBottom: '20px' }}>{block.replace(/\*\*/g, '')}</h2>;
              }
              if (block.startsWith('- ') || block.startsWith('1. ')) {
                return (
                  <ul key={i} style={{ paddingLeft: '24px', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {block.split('\n').map((line, j) => (
                      <li key={j} style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{line.replace(/^[-\d.]\s?/, '')}</li>
                    ))}
                  </ul>
                );
              }
              const parts = block.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} style={{ marginBottom: '32px' }}>
                  {parts.map((part, j) =>
                    part.startsWith('**') ? (
                      <strong key={j} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{part.replace(/\*\*/g, '')}</strong>
                    ) : (
                      part.split('\n').map((line, k) => (
                        <span key={`${j}-${k}`}>
                          {k > 0 && <br />}
                          {line}
                        </span>
                      ))
                    )
                  )}
                </p>
              );
            })}
          </div>

          <div className="card-white" style={{ marginTop: '100px', padding: '64px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>Want Us to Apply This to Your Brand?</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '40px', fontSize: '18px' }}>Book a free strategy audit. We&apos;ll analyze your current marketing and show you the exact levers to pull for growth.</p>
            <Link href="/contact" className="btn-purple" style={{ fontSize: '16px', padding: '18px 40px' }}>
              Claim Your Free Audit ↗
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}