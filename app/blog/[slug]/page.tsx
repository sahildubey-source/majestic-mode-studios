import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { client } from '@/sanity/lib/client';
import { POST_BY_SLUG_QUERY, ALL_POST_SLUGS_QUERY } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';

// Re-validate every 60 seconds (ISR) so newly published posts appear without a redeploy
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(ALL_POST_SLUGS_QUERY);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });
  if (!post) return { title: 'Post Not Found' };

  const canonicalUrl = `https://www.majesticmodestudios.com/blog/${slug}`;
  const excerpt = post.excerpt ?? '';

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
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: post.title }],
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

// Portable Text component map — matches blockContentType.js styles/marks
const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', color: 'var(--text-primary)', marginTop: '56px', marginBottom: '20px' }}>
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--text-primary)', marginTop: '56px', marginBottom: '20px' }}>
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', color: 'var(--text-primary)', marginTop: '40px', marginBottom: '16px' }}>
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 style={{ fontSize: '20px', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '12px' }}>
        {children}
      </h4>
    ),
    normal: ({ children }: any) => (
      <p style={{ marginBottom: '32px', fontSize: '18px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote style={{
        borderLeft: '4px solid var(--accent-primary)',
        paddingLeft: '24px',
        margin: '40px 0',
        fontStyle: 'italic',
        color: 'var(--text-tertiary)',
        fontSize: '18px',
        lineHeight: 1.8,
      }}>
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul style={{ paddingLeft: '24px', marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '18px', lineHeight: 1.7 }}>
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{children}</strong>
    ),
    em: ({ children }: any) => <em>{children}</em>,
    link: ({ children, value }: any) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'underline' }}>
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) notFound();

  const tagColor = post.color || 'var(--accent-primary)';
  const dateString = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    : '';

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
            textTransform: 'uppercase', color: tagColor, padding: '6px 12px',
            background: 'var(--bg-base)', borderRadius: '100px',
            display: 'inline-block', marginBottom: '24px',
          }}>{post.tag}</span>
          <h1 style={{ fontSize: 'clamp(32px, 4.5vw, 64px)', lineHeight: 1.1, marginBottom: '24px' }}>{post.title}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '13px', color: 'var(--text-tertiary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {post.readTime && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={15} /> {post.readTime}
              </span>
            )}
            {dateString && <span>{dateString}</span>}
            <span style={{ color: 'var(--accent-primary)' }}>By Majestic Mode Team</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '80px 0 140px' }}>
        <div className="container-main" style={{ maxWidth: '850px' }}>
          <div style={{ fontSize: '18px', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
            {post.body && <PortableText value={post.body} components={portableTextComponents} />}
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