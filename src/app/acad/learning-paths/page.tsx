import type { Metadata } from 'next'
import Link from 'next/link'
import { acadData } from '@/lib/data/acad'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'ACAD Learning Paths — AI-Directed Curriculum | NGENTECH',
  description:
    'ACAD learning paths: foundations of technology, AI & machine learning, blockchain & Web3, and data science & analytics — adapted to each learner in real time.',
  path: '/acad/learning-paths',
})

export default function AcadLearningPathsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ngentech ACAD"
        title="Learning Paths"
        highlight=""
        description="Curricula directed by AI — and refined by real progress data."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {acadData.learningPaths.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100}>
              <div className="card h-full p-8">
                <p className="label mb-3">Path {String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-display font-bold text-2xl mb-3">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="relative z-10 pb-24">
        <div className="container-x text-center">
          <Link href="/newsletter" className="btn-primary">Get Notified at Launch</Link>
        </div>
      </section>
    </>
  )
}