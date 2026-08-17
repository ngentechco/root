import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { buildMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/data/site'

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service | NGENTECH',
  description: 'The terms of service for ngentech.co.',
  path: '/legal/terms',
})

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" highlight="" />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x max-w-3xl space-y-6 text-white/60 leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> 2026
          </p>
          <p>
            These terms govern your use of ngentech.co and the products and services provided by
            Ngentech Co.
          </p>
          <h3 className="font-display font-bold text-xl text-white">Use of the site</h3>
          <p>
            You may use the site for lawful purposes only. You agree not to misuse the services,
            attempt unauthorized access, or disrupt operations.
          </p>
          <h3 className="font-display font-bold text-xl text-white">Research reports</h3>
          <p>
            Research reports published on this site are provided for informational purposes and do
            not constitute financial, legal, or professional advice.
          </p>
          <h3 className="font-display font-bold text-xl text-white">Intellectual property</h3>
          <p>
            Content on this site is the property of Ngentech Co. unless otherwise noted and may not
            be reproduced without permission.
          </p>
          <h3 className="font-display font-bold text-xl text-white">Contact</h3>
          <p>
            Questions about these terms:{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-white underline">{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}