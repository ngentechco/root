import type { Metadata } from 'next'
import Link from 'next/link'
import { clerkData } from '@/lib/data/clerk'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata, faqJsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Clerk — S-Rank Deep Research Agent | NGENTECH',
  description:
    'Clerk is Ngentech’s flagship deep research agent — a distributed durable execution engine that breaks topics into 100+ parallel sub-niches and delivers statistical analysis beyond AI guessing.',
  path: '/clerk',
})

export default function ClerkPage() {
  const faqJson = faqJsonLd(clerkData.faqs)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJson) }}
      />
      <PageHero
        eyebrow="Flagship Product"
        title="CLERK"
        highlight="Deep Research"
        description={clerkData.description}
      >
        <Link href="/clerk/features" className="btn-primary">Explore Features</Link>
        <Link href="/clerk/how-it-works" className="btn-secondary">How It Works</Link>
        <Link href="/clerk/api" className="btn-ghost">API Reference</Link>
      </PageHero>

      {/* Stats */}
      <section className="relative z-10 py-16">
        <div className="container-x grid gap-px md:grid-cols-4 bg-white/5">
          {clerkData.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="bg-black p-8 text-center">
                <p className="font-display font-black text-4xl gradient-text">{s.value}</p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/40">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The Four Pillars */}
      <section className="relative z-10 py-24">
        <div className="container-x">
          <Reveal>
            <p className="label mb-2">Why Clerk is S-Rank</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl">Four Pillars</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clerkData.fourPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card h-full p-6">
                  <p className="font-display font-black text-2xl mb-3">{p.title}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline */}
      <section className="relative z-10 py-24 border-t border-white/8">
        <div className="container-x">
          <Reveal>
            <p className="label mb-2">The Pipeline</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl">From Topic to S-Rank Report</h2>
          </Reveal>
          <div className="mt-14 space-y-4">
            {clerkData.pipeline.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4">
                  <span className="font-display font-black text-3xl text-white/20 shrink-0">{p.phase}</span>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl">{p.title}</h3>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/40 mt-1">{p.agent}</p>
                  </div>
                  <p className="text-sm text-white/50 md:max-w-md">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agents */}
      <section className="relative z-10 py-24 border-t border-white/8">
        <div className="container-x">
          <Reveal>
            <p className="label mb-2">Multi-Agent System</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl">The Agents</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clerkData.agents.map((a, i) => (
              <Reveal key={a.name} delay={i * 100}>
                <div className="card h-full p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">{a.model}</p>
                  <h3 className="font-display font-bold text-2xl mt-2">{a.name}</h3>
                  <p className="mt-2 text-sm text-white/50">{a.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display font-bold text-4xl md:text-5xl">
              Research that <span className="gradient-text">computes</span>, not guesses.
            </h2>
            <p className="mt-4 text-white/50 max-w-xl mx-auto">
              From Web3 to AI agents, see how Clerk decomposes a topic into 100+ sub-niches and
              delivers statistically-backed odds.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/research" className="btn-primary">Browse Research</Link>
              <Link href="/clerk/use-cases" className="btn-secondary">Use Cases</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}