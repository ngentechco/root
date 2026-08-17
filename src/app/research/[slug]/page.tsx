import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllResearch, getResearchReport, slugify } from '@/lib/data/research'
import { Reveal } from '@/components/Reveal'
import { NewsletterCta } from '@/components/NewsletterCta'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { buildMetadata, researchArticleJsonLd, breadcrumbJsonLd } from '@/lib/seo'
import { siteConfig, formatDate } from '@/lib/data/site'
import { mdToHtml, mdToPlain } from '@/lib/markdown'

export const revalidate = 3600

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllResearch().map((r) => ({ slug: r.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const report = getResearchReport(params.slug)
  if (!report) return {}
  return buildMetadata({
    title: `${report.topic} — Deep Research Report (${report.timeframe.from}–${report.timeframe.to}) | NGENTECH`,
    description: mdToPlain(report.summary),
    path: `/research/${report.slug}`,
    ogEyebrow: `${report.category} · ${report.status}`,
    ogTitle: report.topic,
    ogMetric: `${report.avgReliabilityScore.toFixed(2)} reliability · ${report.totalNiches} niches`,
    ogBadge: 'Research Report',
  })
}

export default function ResearchReportPage({ params }: Props) {
  const report = getResearchReport(params.slug)
  if (!report) notFound()

  const url = `${siteConfig.url}/research/${report.slug}`
  const summaryPlain = mdToPlain(report.summary)
  const bodyHtml = mdToHtml(report.summary)

  const jsonLd = [
    researchArticleJsonLd({
      headline: `${report.topic} — Deep Research Report`,
      description: summaryPlain,
      datePublished: report.publishedAt,
      url,
      keywords: report.tags,
    }),
    breadcrumbJsonLd([
      { name: 'Home', url: siteConfig.url },
      { name: 'Research', url: `${siteConfig.url}/research` },
      { name: report.topic, url },
    ]),
  ]

  const totalSentiment =
    report.sentimentDistribution.bullish +
    report.sentimentDistribution.bearish +
    report.sentimentDistribution.neutral

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="relative z-10 pt-32 pb-24">
        <div className="container-x max-w-4xl">
          <Reveal>
            <Breadcrumbs
              items={[
                { name: 'Home', href: '/' },
                { name: 'Research', href: '/research' },
                { name: report.topic, href: `/research/${report.slug}` },
              ]}
            />
            <p className="label mt-8">{report.category} · {report.status}</p>
            <h1 className="mt-3 font-display font-black text-5xl md:text-6xl tracking-tight">
              {report.topic}
            </h1>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-white/40">
              {formatDate(report.publishedAt)} · {report.timeframe.from}–{report.timeframe.to} · {report.totalNiches} sub-niches
            </p>
          </Reveal>

          {/* Report body (from summary.md) */}
          <Reveal delay={80}>
            <div
              className="prose-invert mt-8 [&_h1]:font-display [&_h2]:font-display [&_h2]:text-2xl [&_h2]:mt-8 [&_h2]:mb-3 [&_h3]:font-display [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-white/65 [&_p]:leading-relaxed [&_strong]:text-white [&_li]:text-white/65 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_code]:text-white/80 [&_hr]:border-white/10 [&_blockquote]:border-l-2 [&_blockquote]:border-white/20 [&_blockquote]:pl-4 [&_blockquote]:text-white/50"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </Reveal>

          {/* Stats */}
          <Reveal delay={100}>
            <div className="mt-12 grid gap-px md:grid-cols-4 bg-white/5">
              <div className="bg-black p-6">
                <p className="font-display font-black text-3xl gradient-text">{report.avgReliabilityScore.toFixed(2)}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">Avg reliability</p>
              </div>
              <div className="bg-black p-6">
                <p className="font-display font-black text-3xl gradient-text">{report.completedNiches}/{report.totalNiches}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">Niches completed</p>
              </div>
              <div className="bg-black p-6">
                <p className="font-display font-black text-3xl gradient-text">{Math.round((report.sentimentDistribution.bullish / totalSentiment) * 100)}%</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">Bullish sentiment</p>
              </div>
              <div className="bg-black p-6">
                <p className="font-display font-black text-3xl gradient-text">{report.odds.length}</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">Predictive odds</p>
              </div>
            </div>
          </Reveal>

          {/* Odds */}
          <section className="mt-16">
            <Reveal>
              <p className="label mb-6">Predictive Odds</p>
            </Reveal>
            <div className="space-y-4">
              {report.odds.map((o, i) => (
                <Reveal key={o.prediction} delay={i * 80}>
                  <div className="card p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display font-bold text-lg">{o.prediction}</h3>
                      <span className="font-display font-black text-2xl gradient-text shrink-0">{Math.round(o.confidence * 100)}%</span>
                    </div>
                    <div className="mt-3 h-1 bg-white/10">
                      <div className="h-full bg-white/70" style={{ width: `${o.confidence * 100}%` }} />
                    </div>
                    <p className="mt-3 text-sm text-white/40">{o.basis}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Trends */}
          <section className="mt-16">
            <Reveal>
              <p className="label mb-6">Trend Vectors</p>
            </Reveal>
            <div className="flex flex-wrap gap-3">
              {report.trends.map((t) => (
                <span key={t.name} className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60">
                  <span className={`w-1.5 h-1.5 rounded-full ${t.trend === 'increasing' ? 'bg-white' : t.trend === 'decreasing' ? 'bg-white/30' : 'bg-white/50'}`} />
                  {t.name} · {t.trend}
                </span>
              ))}
            </div>
          </section>

          {/* Sentiment distribution */}
          <section className="mt-16">
            <Reveal>
              <p className="label mb-6">Sentiment Distribution</p>
            </Reveal>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: 'Bullish', value: report.sentimentDistribution.bullish },
                { label: 'Neutral', value: report.sentimentDistribution.neutral },
                { label: 'Bearish', value: report.sentimentDistribution.bearish },
              ].map((s) => (
                <div key={s.label} className="card p-6 text-center">
                  <p className="font-display font-black text-3xl">{s.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">{s.label}</p>
                  <div className="mt-3 h-1 bg-white/10">
                    <div className="h-full bg-white/60" style={{ width: `${(s.value / totalSentiment) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Sub-niches */}
          <section className="mt-16">
            <Reveal>
              <div className="flex items-center justify-between">
                <p className="label">Sub-Niche Deep Dives</p>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">{report.niches.length} shown of {report.totalNiches}</span>
              </div>
            </Reveal>
            <div className="mt-6 space-y-3">
              {report.niches.map((n, i) => (
                <Reveal key={n.id} delay={(i % 4) * 60}>
                  <Link href={`/research/${report.slug}/${n.topic}`} className="card card-hover block p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className="font-display font-black text-white/20 text-lg">{String(n.id).padStart(2, '0')}</span>
                        <h4 className="font-display font-bold text-lg">{n.topic}</h4>
                      </div>
                      <span className={`inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] ${n.sentiment === 'Bullish' ? 'text-white' : n.sentiment === 'Bearish' ? 'text-white/30' : 'text-white/60'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${n.sentiment === 'Bullish' ? 'bg-white animate-pulse' : 'bg-white/40'}`} />
                        {n.sentiment} · {n.reliabilityScore.toFixed(2)}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/50 line-clamp-2">{n.description}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Tags */}
          <section className="mt-16 flex flex-wrap gap-3">
            {report.tags.map((t) => (
              <Link key={t} href={`/research/tags/${slugify(t)}`} className="border border-white/15 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/40 hover:border-white hover:text-white transition-colors">
                #{t}
              </Link>
            ))}
          </section>

          {/* Related reports */}
          <section className="mt-16">
            <Reveal>
              <p className="label mb-6">Related Reports</p>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              {getAllResearch()
                .filter((r) => r.slug !== report.slug && r.category === report.category)
                .slice(0, 2)
                .map((r) => (
                  <Link key={r.slug} href={`/research/${r.slug}`} className="card card-hover block p-5">
                    <p className="label mb-2">{r.category}</p>
                    <h4 className="font-display font-bold text-lg">{r.topic}</h4>
                    <p className="mt-2 text-sm text-white/40 line-clamp-2">{mdToPlain(r.summary, 120)}</p>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </article>

      <NewsletterCta
        title="Follow the research"
        subtitle="Get notified as new S-Rank reports and sub-niche deep dives are published."
      />
    </>
  )
}