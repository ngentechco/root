import { NewsletterSignup } from '@/components/NewsletterSignup'
import { Reveal } from '@/components/Reveal'

interface NewsletterCtaProps {
  title?: string
  subtitle?: string
}

export function NewsletterCta({
  title = 'Stay ahead of the research',
  subtitle = 'Deep research insights, product updates, and the future of technology — straight to your inbox.',
}: NewsletterCtaProps) {
  return (
    <section className="relative z-10 py-20">
      <div className="container-x">
        <Reveal>
          <div className="card p-8 md:p-12 text-center">
            <p className="label mb-3">Signal, not noise</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl">{title}</h2>
            <p className="mt-3 text-white/50 max-w-xl mx-auto">{subtitle}</p>
            <div className="mt-8 max-w-xl mx-auto">
              <NewsletterSignup label="Subscribe" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}