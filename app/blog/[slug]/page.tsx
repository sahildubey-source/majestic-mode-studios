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
};

export async function generateStaticParams() {
  return Object.keys(posts).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title + ' | Majestic Mode Studios',
    description: post.title + ' — Insights and strategies from Majestic Mode Studios.',
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
