import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/data/site'

export const metadata: Metadata = buildMetadata({
  title: 'About NGENTECH — Technology Research Organization',
  description:
    'Ngentech is a technology research organization building Clerk, an S-Rank deep research agent, and ACAD, an AI-powered learning platform — advancing the future of technology through deep research.',
  path: '/about',
})

const values = [
  {
    title: 'Research First',
    description:
      'Before we build, we understand. Every product at Ngentech is preceded by deep, statistically-backed research.',
  },
  {
    title: 'Data Over Guessing',
    description:
      'We move beyond AI guessing to data science — calculating answers from a mass of collected, reliability-scored data.',
  },
  {
    title: 'Durable by Design',
    description:
      'Everything we build survives interruption. Tasks persist for a week, not a session.',
  },
  {
    title: 'Auditable Always',
    description:
      'Full commit histories show exactly how our thoughts and conclusions evolved.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Organization"
        title="NGENTECH"
        highlight=""
        description={siteConfig.description}
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">What we build</h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                <span className="text-white font-semibold">Clerk</span> is our flagship — an S-Rank
                deep research agent that decomposes topics into 100+ parallel sub-niches, keeps
                state for a week, and delivers statistical odds instead of guesses.
              </p>
              <p>
                <span className="text-white font-semibold">ACAD</span> is our academy — an
                AI-powered learning platform with personalized learning paths, live sessions, and
                deep analytics into how students actually learn.
              </p>
              <p>
                Together they form the foundation of a research organization dedicated to the
                future of technology.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 py-10 pb-24 border-t border-white/8">
        <div className="container-x">
          <Reveal>
            <p className="label mb-2">Principles</p>
            <h2 className="font-display font-bold text-4xl">How we think</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 100}>
                <div className="card h-full p-8">
                  <h3 className="font-display font-bold text-xl mb-3">{v.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}