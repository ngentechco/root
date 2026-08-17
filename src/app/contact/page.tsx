import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/data/site'

export const metadata: Metadata = buildMetadata({
  title: 'Contact NGENTECH',
  description: 'Get in touch with NGENTECH — deep research, academy, partnerships, and press.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact"
        highlight=""
        description="Deep research, academy, partnerships, or press — reach out."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x max-w-3xl grid gap-6 md:grid-cols-2">
          <Reveal>
            <a href={`mailto:${siteConfig.email}`} className="card card-hover block h-full p-8">
              <p className="label mb-3">Email</p>
              <p className="text-lg text-white/80">{siteConfig.email}</p>
              <p className="mt-2 text-sm text-white/40">For general inquiries and partnerships.</p>
            </a>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full p-8">
              <p className="label mb-3">Social</p>
              <ul className="space-y-2 text-white/70">
                <li><a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X — @ngentechco</a></li>
                <li><a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub — /ngentechco</a></li>
                <li><a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn — /company/ngentechco</a></li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}