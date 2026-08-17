import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/data/blog'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'
import { formatDate } from '@/lib/data/site'

export const metadata: Metadata = buildMetadata({
  title: 'Blog — Deep Research Insights | NGENTECH',
  description:
    'Insights from the NGENTECH research organization — deep research, AI, engineering, and product updates.',
  path: '/blog',
})

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Blog"
        highlight=""
        description="Deep research, engineering, and product thinking from the Ngentech organization."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <Link href={`/blog/${p.slug}`} className="card card-hover block h-full p-6">
                <p className="label mb-3">{p.category}</p>
                <h3 className="font-display font-bold text-xl mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-white/50 line-clamp-3">{p.excerpt}</p>
                <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
                  {formatDate(p.date)} · {p.readingMinutes} min read
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}