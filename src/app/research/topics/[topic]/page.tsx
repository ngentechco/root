import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllTopics } from '@/lib/data/research'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo'
import { siteConfig } from '@/lib/data/site'

export const revalidate = 3600

interface Props {
  params: { topic: string }
}

export function generateStaticParams() {
  return Array.from(getAllTopics().keys()).map((topic) => ({ topic }))
}

export function generateMetadata({ params }: Props): Metadata {
  return buildMetadata({
    title: `${params.topic} — Research & Deep Dives | NGENTECH`,
    description: `All NGENTECH deep research coverage on ${params.topic} — sub-niche deep dives, reliability scores, and related reports.`,
    path: `/research/topics/${params.topic}`,
  })
}

export default function TopicPage({ params }: Props) {
  const topics = getAllTopics()
  const entry = topics.get(params.topic)
  if (!entry) notFound()

  const url = `${siteConfig.url}/research/topics/${params.topic}`
  const jsonLd = breadcrumbJsonLd([
    { name: 'Home', url: siteConfig.url },
    { name: 'Research', url: `${siteConfig.url}/research` },
    { name: 'Topics', url: `${siteConfig.url}/research/topics` },
    { name: params.topic, url },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow="Research Library"
        title={params.topic}
        highlight=""
        description={`Sub-niche deep dives on ${params.topic} across ${entry.reports.length} report${entry.reports.length > 1 ? 's' : ''}.`}
      />
      <section className="relative z-10 py-10">
        <div className="container-x max-w-3xl">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Research', href: '/research' },
              { name: 'Topics', href: '/research/topics' },
              { name: params.topic, href: `/research/topics/${params.topic}` },
            ]}
          />
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container-x max-w-3xl space-y-6">
          {entry.reports.map((r, i) => {
            const niche = entry.niches.find((n) => n.topic === params.topic)
            return (
              <Reveal key={r.slug} delay={i * 80}>
                <div className="card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <Link href={`/research/${r.slug}`} className="label hover:text-white transition-colors">
                      {r.category} → {r.topic}
                    </Link>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      {niche?.sentiment} · {niche?.reliabilityScore.toFixed(2)} reliability
                    </span>
                  </div>
                  <p className="mt-3 text-white/60">{niche?.description}</p>
                  {niche && niche.keyFindings.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {niche.keyFindings.map((k) => (
                        <li key={k} className="flex items-start gap-3 text-sm text-white/50">
                          <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-white/40" />
                          {k}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Link href={`/research/${r.slug}/${params.topic}`} className="btn-secondary">
                      Deep Dive
                    </Link>
                    <Link href={`/research/${r.slug}`} className="btn-ghost">
                      Full Report
                    </Link>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}