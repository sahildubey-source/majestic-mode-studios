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
    tag: 'Paid Media', title: 'Why Your Google Ads Are Failing (And How to Fix Them)',
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
    title: 'How to Build a Marketing Funnel for eCommerce in 2025',
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
};

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post Not Found' };

  const canonicalUrl = `https://www.majesticmodestudios.com/blog/${slug}`;
  // Build a plain-text excerpt (first ~160 chars of content, no markdown)
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
      {/* Header */}
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

      {/* Content */}
      <div style={{ padding: '80px 0 140px' }}>
        <div className="container-main" style={{ maxWidth: '850px' }}>
          <div style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('**') && block.endsWith('**')) {
                return <h2 key={i} style={{ fontSize: '32px', color: 'var(--text-primary)', marginTop: '56px', marginBottom: '20px' }}>{block.replace(/\*\*/g, '')}</h2>;
              }
              if (block.startsWith('- ')) {
                return (
                  <ul key={i} style={{ paddingLeft: '24px', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {block.split('\n').map((line, j) => (
                      <li key={j} style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{line.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              const parts = block.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i} style={{ marginBottom: '32px' }}>
                  {parts.map((part, j) =>
                    part.startsWith('**') ? <strong key={j} style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{part.replace(/\*\*/g, '')}</strong> : part
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
