import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllTopics } from '@/lib/data/research'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Research Topics — All Sub-Niche Deep Dives | NGENTECH',
  description:
    'Every sub-niche investigated by Clerk across all research reports — layer-2 scaling, ZK proofs, DeFi, AI agents, mobile money, and more.',
  path: '/research/topics',
})

export default function TopicsPage() {
  const topics = getAllTopics()
  const sorted = Array.from(topics.entries()).sort((a, b) => b[1].reports.length - a[1].reports.length)

  return (
    <>
      <PageHero
        eyebrow="Research Library"
        title="Topics"
        highlight=""
        description="Every sub-niche investigated across all reports. Each topic links to its deep-dive and parent reports."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x">
          <p className="label mb-6">{sorted.length} topics investigated</p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map(([topic, entry], i) => (
              <Reveal key={topic} delay={(i % 3) * 60}>
                <Link href={`/research/topics/${topic}`} className="card card-hover block h-full p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display font-bold text-lg">{topic}</h3>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 shrink-0">
                      {entry.reports.length} report{entry.reports.length > 1 ? 's' : ''}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/50 line-clamp-2">
                    {entry.niches[0]?.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}