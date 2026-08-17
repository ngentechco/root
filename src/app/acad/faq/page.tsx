import type { Metadata } from 'next'
import { acadFaqs } from '@/lib/data/acad'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata, faqJsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Ngentech ACAD FAQ | NGENTECH',
  description:
    'Frequently asked questions about Ngentech ACAD — the AI-powered learning platform for academic excellence.',
  path: '/acad/faq',
})

export default function AcadFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(acadFaqs)) }}
      />
      <PageHero
        eyebrow="Ngentech ACAD"
        title="FAQ"
        highlight=""
        description="Questions about the academy."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x max-w-3xl space-y-4">
          {acadFaqs.map((f, i) => (
            <Reveal key={f.question} delay={i * 60}>
              <details className="card group open:border-white/30">
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-display font-bold text-lg">
                  {f.question}
                  <span className="text-white/40 transition-transform group-open:rotate-45 text-2xl font-normal leading-none">+</span>
                </summary>
                <p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">{f.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}