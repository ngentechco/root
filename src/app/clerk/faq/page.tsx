import type { Metadata } from 'next'
import Link from 'next/link'
import { clerkFaqs } from '@/lib/data/clerk'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata, faqJsonLd } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Clerk FAQ — Deep Research Agent Questions | NGENTECH',
  description:
    'Frequently asked questions about Clerk: what it is, how it differs from chatbots, how long research takes, what it produces, and how it stays auditable.',
  path: '/clerk/faq',
})

export default function ClerkFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(clerkFaqs)) }}
      />
      <PageHero
        eyebrow="Clerk"
        title="FAQ"
        highlight=""
        description="Answers about the S-Rank deep research engine."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x max-w-3xl space-y-4">
          {clerkFaqs.map((f, i) => (
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
      <section className="relative z-10 pb-24">
        <div className="container-x text-center">
          <Link href="/clerk" className="btn-primary">Back to Clerk</Link>
        </div>
      </section>
    </>
  )
}