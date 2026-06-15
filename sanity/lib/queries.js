import { defineQuery } from 'next-sanity'

// Fetch all posts for listing page and sitemap — ordered newest first
export const ALL_POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    tag,
    readTime,
    color,
    excerpt,
  }
`)

// Fetch a single post by slug — includes full body
export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    tag,
    readTime,
    color,
    excerpt,
    body,
  }
`)

// Fetch only slugs — used for generateStaticParams and sitemap
export const ALL_POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current
  }
`)
