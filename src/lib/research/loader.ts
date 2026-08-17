import fs from 'node:fs'
import path from 'node:path'

export interface ResearchNiche {
  id: number
  topic: string
  description: string
  from: number
  to: number
  reliabilityScore: number
  sentiment: 'Bullish' | 'Bearish' | 'Neutral'
  keyFindings: string[]
  source?: string
}

export interface ResearchOdds {
  prediction: string
  confidence: number
  basis: string
}

export interface ResearchTrend {
  name: string
  trend: 'increasing' | 'decreasing' | 'stable'
}

export interface ResearchReport {
  id: string
  slug: string
  topic: string
  summary: string
  timeframe: { from: number; to: number }
  status: 'completed' | 'running' | 'queued'
  totalNiches: number
  completedNiches: number
  avgReliabilityScore: number
  sentimentDistribution: { bullish: number; bearish: number; neutral: number }
  odds: ResearchOdds[]
  trends: ResearchTrend[]
  niches: ResearchNiche[]
  category: string
  tags: string[]
  publishedAt: string
}

export const researchCategories = [
  { name: 'Blockchain & Web3', slug: 'blockchain-web3' },
  { name: 'Artificial Intelligence', slug: 'artificial-intelligence' },
  { name: 'Fintech', slug: 'fintech' },
  { name: 'Developer Tooling', slug: 'developer-tools' },
  { name: 'Privacy & Security', slug: 'privacy-security' },
]

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

const RESEARCH_DIR = path.join(process.cwd(), 'content', 'research')

interface ReportFile {
  report: {
    id: string
    slug: string
    topic: string
    timeframe: { from: number; to: number }
    status: 'completed' | 'running' | 'queued'
    totalNiches: number
    completedNiches: number
    avgReliabilityScore: number
    sentimentDistribution: { bullish: number; bearish: number; neutral: number }
    category: string
    tags: string[]
    publishedAt: string
    nicheCount?: number
  }
}

function readJson<T>(filePath: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as T
  } catch {
    return null
  }
}

/**
 * Loads all research reports from /content/research.
 * Each report is a directory: summary.md, report.json,
 * statistics/odds-calculations.json, statistics/trend-vectors.json,
 * and niches/*.json (one file per sub-niche).
 *
 * Dropping a new directory here automatically generates its
 * report page, niche pages, sitemap entries, and RSS items.
 */
export function loadResearchReports(): ResearchReport[] {
  if (!fs.existsSync(RESEARCH_DIR)) return []

  const slugs = fs
    .readdirSync(RESEARCH_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory() && !d.name.startsWith('_'))
    .map((d) => d.name)

  const reports: ResearchReport[] = []

  for (const slug of slugs) {
    const dir = path.join(RESEARCH_DIR, slug)
    const meta = readJson<ReportFile>(path.join(dir, 'report.json'))
    if (!meta) continue

    const summaryPath = path.join(dir, 'summary.md')
    const summary = fs.existsSync(summaryPath)
      ? fs.readFileSync(summaryPath, 'utf-8')
      : ''

    const odds =
      readJson<ResearchOdds[]>(path.join(dir, 'statistics', 'odds-calculations.json')) ?? []
    const trends =
      readJson<ResearchTrend[]>(path.join(dir, 'statistics', 'trend-vectors.json')) ?? []

    const nichesDir = path.join(dir, 'niches')
    const niches: ResearchNiche[] = []
    if (fs.existsSync(nichesDir)) {
      const nicheFiles = fs
        .readdirSync(nichesDir)
        .filter((f) => f.endsWith('.json'))
        .sort()
      for (const f of nicheFiles) {
        const niche = readJson<ResearchNiche>(path.join(nichesDir, f))
        if (niche) niches.push(niche)
      }
    }

    reports.push({
      id: meta.report.id,
      slug: meta.report.slug,
      topic: meta.report.topic,
      summary,
      timeframe: meta.report.timeframe,
      status: meta.report.status,
      totalNiches: meta.report.totalNiches,
      completedNiches: meta.report.completedNiches,
      avgReliabilityScore: meta.report.avgReliabilityScore,
      sentimentDistribution: meta.report.sentimentDistribution,
      odds,
      trends,
      niches,
      category: meta.report.category,
      tags: meta.report.tags,
      publishedAt: meta.report.publishedAt,
    })
  }

  return reports.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
}

export function getAllResearch(): ResearchReport[] {
  return loadResearchReports()
}

export function getResearchReport(slug: string): ResearchReport | undefined {
  return loadResearchReports().find((r) => r.slug === slug)
}

export function getResearchByCategory(categorySlug: string): ResearchReport[] {
  return loadResearchReports().filter((r) => slugify(r.category) === categorySlug)
}

/** All tags across reports (for tag archives). */
export function getAllTags(): string[] {
  const set = new Set<string>()
  for (const r of loadResearchReports()) {
    for (const t of r.tags) set.add(t)
  }
  return Array.from(set)
}

/** All sub-niche topics aggregated across reports (for topic archives). */
export function getAllTopics(): Map<string, { reports: ResearchReport[]; niches: ResearchNiche[] }> {
  const map = new Map<string, { reports: ResearchReport[]; niches: ResearchNiche[] }>()
  for (const r of loadResearchReports()) {
    for (const n of r.niches) {
      const key = n.topic
      if (!map.has(key)) map.set(key, { reports: [], niches: [] })
      const entry = map.get(key)!
      entry.reports.push(r)
      entry.niches.push(n)
    }
  }
  return map
}