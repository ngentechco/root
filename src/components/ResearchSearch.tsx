'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ResearchReport } from '@/lib/research/loader'
import { mdToPlain } from '@/lib/markdown'

export function ResearchSearch({ reports }: { reports: ResearchReport[] }) {
  const [query, setQuery] = useState('')

  const filtered = reports.filter((r) => {
    const q = query.toLowerCase()
    return (
      r.topic.toLowerCase().includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.summary.toLowerCase().includes(q) ||
      r.tags.some((t) => t.includes(q))
    )
  })

  return (
    <div>
      <div className="relative mb-10">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search reports, topics, tags…"
          className="input"
          aria-label="Search research reports"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-white/40">No reports match that search yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r, i) => (
            <Link key={r.slug} href={`/research/${r.slug}`} className="card card-hover block h-full p-6">
              <p className="label mb-3">{r.category}</p>
              <h3 className="font-display font-bold text-2xl mb-3">{r.topic}</h3>
              <p className="text-sm text-white/50 line-clamp-3">{mdToPlain(r.summary, 160)}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[0.2em] text-white/30">
                <span>{r.totalNiches} niches</span>
                <span>{r.avgReliabilityScore.toFixed(2)} reliability</span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-white/40 animate-pulse" />
                  {r.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}