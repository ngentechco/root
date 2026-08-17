import type { Metadata } from 'next'
import Link from 'next/link'
import { clerkData } from '@/lib/data/clerk'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Clerk Tech Stack — Temporal, LLMs, Exa, DuckDB, K8s | NGENTECH',
  description:
    'The complete Clerk tech stack: Temporal.io, LangGraph, OpenAI o3, Claude 3.5, Exa.ai, Firecrawl, Bright Data, PostgreSQL + pgvector, DuckDB, Kubernetes, and more.',
  path: '/clerk/tech-stack',
})

export default function ClerkTechStackPage() {
  return (
    <>
      <PageHero
        eyebrow="Clerk"
        title="Tech Stack"
        highlight=""
        description="Every layer engineered for depth, durability, and statistical rigor."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x space-y-8">
          {clerkData.techStack.map((group, i) => (
            <Reveal key={group.group} delay={i * 80}>
              <div>
                <h3 className="label mb-4">{group.group}</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {group.items.map((item) => (
                    <div key={item.name} className="card p-5">
                      <p className="font-display font-bold text-lg">{item.name}</p>
                      <p className="mt-1 text-sm text-white/50">{item.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="relative z-10 pb-24">
        <div className="container-x text-center">
          <Link href="/clerk/architecture" className="btn-primary">Explore the Architecture</Link>
        </div>
      </section>
    </>
  )
}