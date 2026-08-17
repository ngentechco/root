import type { Metadata } from 'next'
import Link from 'next/link'
import { clerkData } from '@/lib/data/clerk'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'How Clerk Works — The 4-Phase Deep Research Pipeline | NGENTECH',
  description:
    'How Clerk works: decomposition into 100+ sub-niches, distributed extraction across 100 parallel workers, statistical analysis with DuckDB, and synthesis into an S-Rank report.',
  path: '/clerk/how-it-works',
})

export default function ClerkHowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Clerk"
        title="How It Works"
        highlight=""
        description="One topic in. 100+ parallel investigations. A statistically-backed S-Rank report out."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x space-y-4">
          {clerkData.pipeline.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="card p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-display font-black text-3xl text-white/20">{p.phase}</span>
                  <h3 className="font-display font-bold text-2xl">{p.title}</h3>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/40">— {p.agent}</span>
                </div>
                <p className="mt-4 text-white/60 max-w-3xl">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container-x">
          <Reveal>
            <p className="label mb-4">Research Output Structure</p>
            <pre className="card p-6 overflow-x-auto text-xs text-white/50 font-mono leading-relaxed">{`docs/
└── [Research-Topic-ID]/          # e.g., /web3-analysis-2026
    ├── summary.md                # The S-Rank Executive Report
    ├── statistics/               # Odds calculations & trend vectors
    ├── niches/                   # 100+ Sub-niche deep dives
    │   ├── layer2-scaling/       # raw-distilled.json, year-by-year.md
    │   └── zkp-origins/
    └── assets/                   # Generated graphs and PDFs`}</pre>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container-x text-center">
          <Link href="/research" className="btn-primary">Browse Sample Research</Link>
        </div>
      </section>
    </>
  )
}