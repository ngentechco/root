import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'
import { NewsletterSignup } from '@/components/NewsletterSignup'

export const metadata: Metadata = buildMetadata({
  title: 'Newsletter — Deep Research Signals | NGENTECH',
  description:
    'Join the NGENTECH newsletter — deep research insights, product updates, and the future of technology.',
  path: '/newsletter',
})

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Signal, not noise"
        title="Newsletter"
        highlight=""
        description="Deep research insights, product updates, and the future of technology — straight to your inbox."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x max-w-xl">
          <Reveal>
            <div className="card p-8 md:p-10">
              <NewsletterSignup label="Subscribe" />
              <p className="mt-6 text-center text-xs text-white/40">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}