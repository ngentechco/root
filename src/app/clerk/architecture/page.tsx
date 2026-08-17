import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/PageHero'
import { Reveal } from '@/components/Reveal'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Clerk Architecture — Multi-Agent Deep Research System | NGENTECH',
  description:
    'A deep dive into Clerk’s architecture: presentation, orchestration, agent, data, and infrastructure layers — built on Temporal.io, LangGraph, DuckDB, and Kubernetes.',
  path: '/clerk/architecture',
})

const layers = [
  {
    name: 'Presentation Layer',
    stack: 'Next.js · FastAPI · WebSockets',
    points: [
      'Real-time research progress dashboard',
      'REST API for research management',
      'Redis Pub/Sub + WebSocket live streaming',
    ],
  },
  {
    name: 'Orchestration Layer',
    stack: 'Temporal.io · LangGraph',
    points: [
      'Durable execution — tasks survive restarts for 1+ weeks',
      'Commander / Worker / Analyst / Synthesizer workflows',
      'State machine with checkpoints and error recovery',
    ],
  },
  {
    name: 'Agent Layer',
    stack: 'o3 · DeepSeek-R1 · Claude 3.5 · GPT-4o-mini',
    points: [
      'Commander decomposes topics into 100+ sub-niches',
      'Workers execute parallel research with schema extraction',
      'Synthesizer compiles the final S-Rank report',
    ],
  },
  {
    name: 'Data Layer',
    stack: 'MinIO/S3 · PostgreSQL + pgvector · DuckDB',
    points: [
      'Raw JSON research data lake',
      'Semantic memory and metadata',
      'In-process analytics engine for statistics',
    ],
  },
  {
    name: 'Infrastructure Layer',
    stack: 'Kubernetes · Docker · Prometheus · Grafana',
    points: [
      'Horizontal scaling to 100+ worker pods',
      'Containerized services',
      'Metrics, dashboards, and observability',
    ],
  },
]

const network = [
  'WireGuard / OpenVPN secondary shell tunneling',
  'Bright Data / Oxylabs residential proxy mesh',
  'Floating IP shell with auto-swapper (Linux IPRoute2)',
  'Rate-limit resilience with automatic retry',
]

export default function ClerkArchitecturePage() {
  return (
    <>
      <PageHero
        eyebrow="Clerk"
        title="Architecture"
        highlight=""
        description="A five-layer system designed to survive infrastructure failure while delivering enterprise-grade research."
      />
      <section className="relative z-10 py-10 pb-24">
        <div className="container-x space-y-4">
          {layers.map((l, i) => (
            <Reveal key={l.name} delay={i * 60}>
              <div className="card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="font-display font-bold text-xl">{l.name}</h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">{l.stack}</p>
                </div>
                <ul className="mt-4 grid gap-2 md:grid-cols-3 text-sm text-white/50">
                  {l.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-white/40" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container-x">
          <Reveal>
            <p className="label mb-4">Network Security Layer</p>
            <div className="card p-8">
              <ul className="grid gap-3 md:grid-cols-2 text-sm text-white/60">
                {network.map((n) => (
                  <li key={n} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-white/40" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 pb-24">
        <div className="container-x text-center">
          <Link href="/clerk/tech-stack" className="btn-primary">View Tech Stack</Link>
        </div>
      </section>
    </>
  )
}