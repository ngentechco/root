import type { Metadata } from 'next'
import Link from 'next/link'
import { clerkData } from '@/lib/data/clerk'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Clerk Features — Deep Research Platform Capabilities | NGENTECH',
  description:
    'Explore Clerk’s features: hierarchical multi-agent architecture, durable execution with Temporal.io, neural search & extraction, statistical analysis, and version-controlled output.',
  path: '/clerk/features',
})

export default function ClerkFeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Clerk"
        title="Features"
        highlight=""
        description="Clerk is engineered for depth, durability, and data science — not AI guessing."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {clerkData.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 100}>
              <div className="card h-full p-8">
                <h3 className="font-display font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="relative z-10 pb-24">
        <div className="container-x text-center">
          <Link href="/clerk/how-it-works" className="btn-primary">See How It Works</Link>
        </div>
      </section>
    </>
  )
}