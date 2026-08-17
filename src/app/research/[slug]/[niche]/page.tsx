import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllResearch, getResearchReport } from '@/lib/data/research'
import { Reveal } from '@/components/Reveal'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo'
import { siteConfig } from '@/lib/data/site'

export const revalidate = 3600

interface Props {
  params: { slug: string; niche: string }
}

export function generateStaticParams() {
  return getAllResearch().flatMap((r) =>
    r.niches.map((n) => ({ slug: r.slug, niche: n.topic })),
  )
}

export function generateMetadata({ params }: Props): Metadata {
  const report = getResearchReport(params.slug)
  const niche = report?.niches.find((n) => n.topic === params.niche)
  if (!report || !niche) return {}
  return buildMetadata({
    title: `${niche.topic} — Sub-Niche Deep Dive in ${report.topic} | NGENTECH`,
    description: niche.description,
    path: `/research/${report.slug}/${niche.topic}`,
  })
}

export default function NichePage({ params }: Props) {
  const report = getResearchReport(params.slug)
  if (!report) notFound()
  const niche = report.niches.find((n) => n.topic === params.niche)
  if (!niche) notFound()

  const url = `${siteConfig.url}/research/${report.slug}/${niche.topic}`
  const jsonLd = breadcrumbJsonLd([
    { name: 'Home', url: siteConfig.url },
    { name: 'Research', url: `${siteConfig.url}/research` },
    { name: report.topic, url: `${siteConfig.url}/research/${report.slug}` },
    { name: niche.topic, url },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative z-10 pt-32 pb-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Research', href: '/research' },
                { name: report.topic, href: `/research/${report.slug}` },
                { name: niche.topic, href: `/research/${report.slug}/${niche.topic}` },
              ]}
            />
            <p className="label mt-8">Sub-Niche {String(niche.id).padStart(2, '0')} · {report.category}</p>
            <h1 className="mt-3 font-display font-black text-5xl tracking-tight">{niche.topic}</h1>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/40">
              {niche.from}–{niche.to} · Reliability {niche.reliabilityScore.toFixed(2)} · {niche.sentiment}
            </p>
            <p className="mt-6 text-white/60 text-lg">{niche.description}</p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 card p-6">
              <p className="label mb-4">Key Findings</p>
              <ul className="space-y-3">
                {niche.keyFindings.map((k) => (
                  <li key={k} className="flex items-start gap-3 text-white/70">
                    <span className="mt-2 w-1 h-1 shrink-0 rounded-full bg-white/50" />
                    {k}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.2em] text-white/40">
                <span>Reliability: {niche.reliabilityScore.toFixed(2)} / 1.00</span>
                <span>Sentiment: {niche.sentiment}</span>
                {niche.source && <span>Source: {niche.source}</span>}
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={`/research/${report.slug}`} className="btn-secondary">View Full {report.topic} Report</Link>
              <Link href={`/research/topics/${niche.topic}`} className="btn-ghost">All “{niche.topic}” coverage</Link>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  )
}