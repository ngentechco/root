import type { Metadata } from 'next'
import Link from 'next/link'
import { acadData } from '@/lib/data/acad'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'ACAD Features — AI-Powered Learning Platform | NGENTECH',
  description:
    'ACAD features: AI-powered personalized learning paths, live interactive classrooms, deep progress analytics, structured courses, enrollments, and a secure JWT-protected API.',
  path: '/acad/features',
})

export default function AcadFeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ngentech ACAD"
        title="Features"
        highlight=""
        description="Learning that adapts, teaches, and measures."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {acadData.features.map((f, i) => (
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
          <Link href="/acad/learning-paths" className="btn-primary">Explore Learning Paths</Link>
        </div>
      </section>
    </>
  )
}