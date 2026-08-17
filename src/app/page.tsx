import Link from 'next/link'
import { siteConfig } from '@/lib/data/site'
import { clerkData } from '@/lib/data/clerk'
import { acadData } from '@/lib/data/acad'
import { getAllResearch } from '@/lib/data/research'
import { getAllPosts } from '@/lib/data/blog'
import { Reveal } from '@/components/Reveal'
import { NewsletterSignup } from '@/components/NewsletterSignup'
import { formatDate } from '@/lib/data/site'
import { mdToPlain } from '@/lib/markdown'

export default function Home() {
  const reports = getAllResearch().slice(0, 3)
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <Reveal>
          <p className="eyebrow justify-center mb-8">
            <span className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
            Tech Research Co.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="font-display font-black text-[15vw] sm:text-[11vw] leading-none tracking-tight">
            <span className="block animate-glow">NGENTECH</span>
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="mt-6 text-white/50 max-w-2xl text-lg">
            {siteConfig.tagline}. We build Clerk, an S-Rank deep research agent, and ACAD, an
            AI-powered learning platform.
          </p>
        </Reveal>

        <Reveal delay={450}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/clerk" className="btn-primary">Explore Clerk</Link>
            <Link href="/acad" className="btn-secondary">Discover ACAD</Link>
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="mt-20 flex items-center gap-3 text-white/30">
            <span className="w-px h-4 bg-white/30" />
            <span className="text-[10px] tracking-[0.3em] uppercase">Deep Research · AI Learning · The Future</span>
            <span className="w-px h-4 bg-white/30" />
          </div>
        </Reveal>
      </section>

      {/* Products */}
      <section className="relative z-10 py-24">
        <div className="container-x">
          <Reveal>
            <p className="label mb-2">Ecosystem</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl">Built by Ngentech</h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              {
                name: clerkData.name,
                tagline: clerkData.tagline,
                description: clerkData.description,
                href: '/clerk',
                hrefLabel: 'Explore Clerk',
                status: clerkData.status,
              },
              {
                name: acadData.name,
                tagline: acadData.tagline,
                description: acadData.description,
                href: '/acad',
                hrefLabel: 'Discover ACAD',
                status: acadData.status,
              },
            ].map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <Link href={p.href} className="card card-hover block h-full p-8 md:p-10">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <h3 className="font-display font-black text-4xl">{p.name}</h3>
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
                      {p.status}
                    </span>
                  </div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/40 mb-3">{p.tagline}</p>
                  <p className="text-white/60 leading-relaxed">{p.description}</p>
                  <span className="mt-8 inline-block text-xs uppercase tracking-[0.2em] text-white/70 group-hover:text-white">
                    {p.hrefLabel} →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="relative z-10 py-24 border-t border-white/8">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="label mb-2">Research Library</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl">Featured Reports</h2>
              </div>
              <Link href="/research" className="btn-ghost text-xs">View all →</Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reports.map((r, i) => (
              <Reveal key={r.slug} delay={i * 120}>
                <Link href={`/research/${r.slug}`} className="card card-hover block h-full p-6">
                  <p className="label mb-3">{r.category}</p>
                  <h3 className="font-display font-bold text-2xl mb-3">{r.topic}</h3>
                  <p className="text-sm text-white/50 line-clamp-3">{mdToPlain(r.summary, 160)}</p>
                  <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/30">
                    <span>{formatDate(r.publishedAt)}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                      {r.avgReliabilityScore.toFixed(2)} reliability
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="relative z-10 py-24 border-t border-white/8">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="label mb-2">Insights</p>
                <h2 className="font-display font-bold text-4xl md:text-5xl">From the Blog</h2>
              </div>
              <Link href="/blog" className="btn-ghost text-xs">All posts →</Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 120}>
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
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative z-10 py-24 border-t border-white/8">
        <div className="container-x text-center">
          <Reveal>
            <p className="label mb-3">Signal, not noise</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl">Join the Newsletter</h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">
              Deep research insights, product updates, and the future of technology — straight to
              your inbox.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10 max-w-xl mx-auto">
              <NewsletterSignup />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}