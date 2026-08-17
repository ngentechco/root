import type { Metadata } from 'next'
import { clerkData } from '@/lib/data/clerk'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Clerk Use Cases — Deep Research for Enterprises & Teams | NGENTECH',
  description:
    'Clerk use cases: strategic decision making, technical analysis, enterprise deep research, and internal collaboration — powered by 100+ parallel sub-niche investigations.',
  path: '/clerk/use-cases',
})

export default function ClerkUseCasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Clerk"
        title="Use Cases"
        highlight=""
        description="Who relies on S-Rank deep research — and how."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {clerkData.useCases.map((u, i) => (
            <Reveal key={u.title} delay={(i % 2) * 100}>
              <div className="card h-full p-8">
                <p className="label mb-3">{u.audience}</p>
                <h3 className="font-display font-bold text-2xl mb-3">{u.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{u.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}