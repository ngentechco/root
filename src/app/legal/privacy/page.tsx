import type { Metadata } from 'next'
import { PageHero } from '@/components/PageHero'
import { buildMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/data/site'

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | NGENTECH',
  description: 'The privacy policy for ngentech.co.',
  path: '/legal/privacy',
})

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" highlight="" />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x max-w-3xl space-y-6 text-white/60 leading-relaxed">
          <p>
            <strong className="text-white">Last updated:</strong> 2026
          </p>
          <p>
            Ngentech Co. (“we”, “us”) operates ngentech.co. This policy explains what information we
            collect and how we use it.
          </p>
          <h3 className="font-display font-bold text-xl text-white">Information we collect</h3>
          <p>
            When you subscribe to our newsletter, we collect your email address. When you visit the
            site, standard analytics may collect aggregate, non-identifying usage data.
          </p>
          <h3 className="font-display font-bold text-xl text-white">How we use it</h3>
          <p>
            We use your email to send newsletters you requested and to communicate product updates.
            We do not sell your data. We do not share your data except as required to operate the
            service or by law.
          </p>
          <h3 className="font-display font-bold text-xl text-white">Contact</h3>
          <p>
            For privacy questions, email{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-white underline">{siteConfig.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}