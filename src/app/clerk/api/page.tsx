import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Clerk API Reference — Deep Research REST & WebSocket API | NGENTECH',
  description:
    'The Clerk API reference: create research tasks, track 100+ sub-niches, fetch statistics and odds, download S-Rank reports, and stream live progress over WebSockets.',
  path: '/clerk/api',
})

const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/research',
    desc: 'Create a research task. Body: { topic, timeframe, options }.',
    example: '202 Accepted → { research_id, status: "queued", estimated_duration: "7 days" }',
  },
  {
    method: 'GET',
    path: '/api/v1/research/{id}',
    desc: 'Get research task details, status, and progress (completed/total niches).',
    example: '200 → { topic, status: "extraction", progress: { completed_niches: 42, total_niches: 100 } }',
  },
  {
    method: 'GET',
    path: '/api/v1/research/{id}/statistics',
    desc: 'Aggregate statistics: reliability, sentiment distribution, odds, trend vectors.',
    example: '200 → { avg_reliability_score, sentiment_distribution, odds_calculations }',
  },
  {
    method: 'GET',
    path: '/api/v1/research/{id}/correlations',
    desc: 'Correlation matrix across sub-niches (e.g., layer2_scaling ↔ defi_tvl).',
    example: '200 → { matrix: { layer2_scaling: { defi_tvl: 0.82 } } }',
  },
  {
    method: 'GET',
    path: '/api/v1/research/{id}/report',
    desc: 'Download the S-Rank report. Format: pdf | markdown | html.',
    example: '200 → report file with correct Content-Type',
  },
  {
    method: 'GET',
    path: '/api/v1/research/{id}/download',
    desc: 'Download all research data as a ZIP. Format: json | parquet | csv.',
    example: '200 → ZIP containing full research data',
  },
  {
    method: 'GET',
    path: '/api/v1/research/{id}/niches',
    desc: 'List all sub-niches with status and reliability scores.',
    example: '200 → { items: [...], total: 100 }',
  },
  {
    method: 'GET',
    path: '/api/v1/config',
    desc: 'System configuration: max_workers, niches_per_topic, allowed timeframes.',
    example: '200 → { max_workers: 100, niches_per_topic: 100 }',
  },
]

const wsMessages = [
  { type: 'niche_completed', payload: '{ niche_id, reliability_score, sentiment }' },
  { type: 'niche_failed', payload: '{ niche_id, error }' },
  { type: 'progress_update', payload: '{ completed, total }' },
  { type: 'phase_change', payload: '{ phase: "analysis" }' },
  { type: 'completed', payload: '{ report_url }' },
]

export default function ClerkApiPage() {
  return (
    <>
      <PageHero
        eyebrow="Clerk"
        title="API Reference"
        highlight=""
        description="Programmatic access to deep research. All endpoints prefixed /api/v1 with Bearer auth."
      />

      <section className="relative z-10 py-10 pb-24">
        <div className="container-x space-y-4">
          {endpoints.map((e, i) => (
            <Reveal key={e.path} delay={(i % 3) * 80}>
              <div className="card p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-white/20 text-white/70">
                    {e.method}
                  </span>
                  <code className="font-mono text-sm text-white">{e.path}</code>
                </div>
                <p className="mt-3 text-sm text-white/60">{e.desc}</p>
                <p className="mt-2 font-mono text-xs text-white/40">{e.example}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container-x">
          <Reveal>
            <p className="label mb-4">WebSocket — Real-Time Updates</p>
            <p className="text-sm text-white/50 mb-6">
              Connect to <code className="font-mono text-white">WS /ws/research/{'{'}research_id{'}'}</code>{' '}
              to stream live research progress.
            </p>
            <div className="grid gap-3 md:grid-cols-2">
              {wsMessages.map((m) => (
                <div key={m.type} className="card p-5">
                  <p className="font-mono text-sm text-white">{m.type}</p>
                  <p className="mt-1 font-mono text-xs text-white/40">{m.payload}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container-x text-center">
          <Link href="/research" className="btn-primary">See Research in Action</Link>
        </div>
      </section>
    </>
  )
}