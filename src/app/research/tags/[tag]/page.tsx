import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllResearch } from '@/lib/data/research'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'
import { mdToPlain } from '@/lib/markdown'

export const revalidate = 3600

interface Props {
  params: { tag: string }
}

export function generateStaticParams() {
  const tags = new Set<string>()
  getAllResearch().forEach((r) => r.tags.forEach((t) => tags.add(t)))
  return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params }: Props): Metadata {
  return buildMetadata({
    title: `${params.tag} Analysis — Research & Trends | NGENTECH`,
    description: `Deep research and analysis on ${params.tag}, from NGENTECH’s S-Rank research engine.`,
    path: `/research/tags/${params.tag}`,
  })
}

export default function TagPage({ params }: Props) {
  const reports = getAllResearch().filter((r) => r.tags.includes(params.tag))
  if (reports.length === 0) notFound()

  return (
    <>
      <PageHero
        eyebrow="Research Library"
        title={params.tag}
        highlight=""
        description={`Reports tagged "${params.tag}".`}
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((r, i) => (
            <Reveal key={r.slug} delay={(i % 3) * 100}>
              <Link href={`/research/${r.slug}`} className="card card-hover block h-full p-6">
                <p className="label mb-3">{r.category}</p>
                <h3 className="font-display font-bold text-2xl mb-3">{r.topic}</h3>
                <p className="text-sm text-white/50 line-clamp-3">{mdToPlain(r.summary, 160)}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}