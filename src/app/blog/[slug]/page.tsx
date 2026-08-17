import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getBlogPost } from '@/lib/data/blog'
import { Reveal } from '@/components/Reveal'
import { NewsletterCta } from '@/components/NewsletterCta'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { buildMetadata, articleJsonLd, breadcrumbJsonLd } from '@/lib/seo'
import { siteConfig, formatDate } from '@/lib/data/site'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return buildMetadata({
    title: `${post.title} | NGENTECH`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const url = `${siteConfig.url}/blog/${post.slug}`
  const jsonLd = [
    articleJsonLd({
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      url,
    }),
    breadcrumbJsonLd([
      { name: 'Home', url: siteConfig.url },
      { name: 'Blog', url: `${siteConfig.url}/blog` },
      { name: post.title, url },
    ]),
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="relative z-10 pt-32 pb-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Blog', href: '/blog' },
                { name: post.title, href: `/blog/${post.slug}` },
              ]}
            />
            <p className="label mt-8">{post.category}</p>
            <h1 className="mt-3 font-display font-black text-4xl md:text-5xl tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/40">
              {formatDate(post.date)} · {post.readingMinutes} min read
            </p>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 text-lg text-white/60 leading-relaxed">{post.excerpt}</p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {post.content.map((para, i) => (
              <Reveal key={i} delay={i * 40}>
                <p className="text-white/70 leading-relaxed">{para}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            {post.tags.map((t) => (
              <span key={t} className="border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/40">
                #{t}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-8">
            <Link href="/blog" className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors">
              ← All posts
            </Link>
            <Link href="/newsletter" className="btn-secondary">Get the newsletter</Link>
          </div>
        </div>
      </article>

      <NewsletterCta
        title="Get deep research in your inbox"
        subtitle="New reports and essays from the Ngentech research engine — no noise, just signal."
      />
    </>
  )
}