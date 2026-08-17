import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getResearchByCategory, researchCategories } from '@/lib/data/research'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'
import { mdToPlain } from '@/lib/markdown'

export const revalidate = 3600

interface Props {
  params: { category: string }
}

export function generateStaticParams() {
  return researchCategories.map((c) => ({ category: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = researchCategories.find((c) => c.slug === params.category)
  if (!cat) return {}
  return buildMetadata({
    title: `${cat.name} Research — Deep Research Reports | NGENTECH`,
    description: `Browse NGENTECH deep research reports in ${cat.name}.`,
    path: `/research/categories/${cat.slug}`,
  })
}

export default function CategoryPage({ params }: Props) {
  const cat = researchCategories.find((c) => c.slug === params.category)
  if (!cat) notFound()
  const reports = getResearchByCategory(cat.slug)

  return (
    <>
      <PageHero
        eyebrow="Research Library"
        title={cat.name}
        highlight=""
        description={`Deep research reports in ${cat.name}, decomposed into sub-niches and statistically analyzed.`}
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((r, i) => (
            <Reveal key={r.slug} delay={(i % 3) * 100}>
              <Link href={`/research/${r.slug}`} className="card card-hover block h-full p-6">
                <p className="label mb-3">{r.category}</p>
                <h3 className="font-display font-bold text-2xl mb-3">{r.topic}</h3>
                <p className="text-sm text-white/50 line-clamp-3">{mdToPlain(r.summary, 160)}</p>
                <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/30">
                  {r.totalNiches} niches · {r.avgReliabilityScore.toFixed(2)} reliability
                </p>
              </Link>
            </Reveal>
          ))}
          {reports.length === 0 && (
            <p className="text-white/40 col-span-full">No reports in this category yet.</p>
          )}
        </div>
      </section>
    </>
  )
}