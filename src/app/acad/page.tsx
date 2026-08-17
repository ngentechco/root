import type { Metadata } from 'next'
import Link from 'next/link'
import { acadData } from '@/lib/data/acad'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Ngentech ACAD — One Platform for Academic Excellence',
  description:
    'ACAD is the Ngentech Academy — an AI-powered learning platform with personalized learning paths, live interactive sessions, and deep analytics into student progress.',
  path: '/acad',
})

export default function AcadPage() {
  return (
    <>
      <PageHero
        eyebrow="Ngentech Academy"
        title="ACAD"
        highlight="Academic Excellence"
        description={acadData.description}
      >
        <Link href="/acad/features" className="btn-primary">Explore Features</Link>
        <Link href="/acad/learning-paths" className="btn-secondary">Learning Paths</Link>
      </PageHero>

      <section className="relative z-10 py-16">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {acadData.features.slice(0, 3).map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="card h-full p-8 text-center">
                <h3 className="font-display font-bold text-2xl mb-3">{f.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 py-24 border-t border-white/8">
        <div className="container-x">
          <Reveal>
            <p className="label mb-2">Platform</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl">More Features</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {acadData.features.slice(3).map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="card h-full p-6">
                  <h3 className="font-display font-bold text-xl mb-3">{f.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-24">
        <div className="container-x">
          <Reveal>
            <p className="label mb-4">Built On</p>
            <div className="flex flex-wrap gap-3">
              {acadData.techStack.map((t) => (
                <span key={t} className="border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/50">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container-x text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl">Launching soon.</h2>
            <p className="mt-3 text-white/50">Join the newsletter to be notified when enrollment opens.</p>
            <div className="mt-8">
              <Link href="/newsletter" className="btn-primary">Get Notified</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}