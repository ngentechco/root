import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllResearch, researchCategories } from '@/lib/data/research'
import { PageHero } from '@/components/PageHero'
import { ResearchSearch } from '@/components/ResearchSearch'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Research Reports — Deep Research Library | NGENTECH',
  description:
    'Browse the NGENTECH research library — S-Rank deep research reports with 100+ sub-niche investigations, reliability scoring, sentiment analysis, and predictive odds.',
  path: '/research',
})

export default function ResearchPage() {
  const reports = getAllResearch()

  return (
    <>
      <PageHero
        eyebrow="Research Library"
        title="Deep Research"
        highlight=""
        description="Every report is decomposed into 100+ sub-niches, statistically analyzed, and synthesized by Clerk."
      />

      <section className="relative z-10 py-10">
        <div className="container-x">
          <p className="label mb-4">Categories</p>
          <div className="flex flex-wrap gap-3">
            {researchCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/research/categories/${c.slug}`}
                className="border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:border-white hover:text-white transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-10 pb-24">
        <div className="container-x">
          <ResearchSearch reports={reports} />
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container-x text-center">
          <p className="text-white/40 text-sm">
            New reports published as research completes. <Link href="/newsletter" className="underline text-white/60 hover:text-white">Follow the research</Link>.
          </p>
        </div>
      </section>
    </>
  )
}