/**
 * Validate the /content/research data source and list what will be published.
 * Run with: npx tsx scripts/check-research.ts
 */
import path from 'node:path'
import {
  loadResearchReports,
  getAllTopics,
} from '../src/lib/research/loader'

function main() {
  const reports = loadResearchReports()
  const topics = getAllTopics()

  console.log('=== NGENTECH research content check ===\n')
  console.log(`Reports found: ${reports.length}`)
  console.log(`Topics found:  ${topics.size}\n`)

  const bad: string[] = []

  for (const r of reports) {
    const dir = path.join(process.cwd(), 'content', 'research', r.slug)
    const issues: string[] = []

    if (!r.topic) issues.push('missing topic')
    if (!r.summary) issues.push('missing summary.md')
    if (r.totalNiches < 1) issues.push('totalNiches < 1')
    if (r.niches.length === 0) issues.push('no niche files in niches/')
    if (r.odds.length === 0) issues.push('no statistics/odds-calculations.json')
    if (r.trends.length === 0) issues.push('no statistics/trend-vectors.json')

    if (r.niches.length > r.totalNiches) issues.push('more niche files than totalNiches')

    // duplicate niche topics within a report
    const seen = new Set<string>()
    for (const n of r.niches) {
      if (seen.has(n.topic)) issues.push(`duplicate niche topic: ${n.topic}`)
      seen.add(n.topic)
      if (n.reliabilityScore < 0 || n.reliabilityScore > 1) issues.push(`reliability out of range: ${n.topic}`)
    }

    if (issues.length > 0) {
      bad.push(`  ✗ ${r.slug}: ${issues.join(', ')}`)
    } else {
      console.log(`  ✓ ${r.slug} — ${r.topic} (${r.niches.length} niches, ${r.odds.length} odds, ${r.trends.length} trends)`)
    }
  }

  console.log('')

  const topicsSummary = Array.from(topics.entries())
    .map(([topic, e]) => `${topic} (${e.reports.length} report${e.reports.length > 1 ? 's' : ''})`)
    .join('\n  ')
  console.log('Topics that will get archive pages:')
  console.log(`  ${topicsSummary}`)

  console.log('')

  const pages = reports.length * 2 + reports.reduce((a, r) => a + r.niches.length, 0) + topics.size
  console.log(`Estimated indexable pages generated: ${pages} (reports + niches + topics + archives)`)

  if (bad.length > 0) {
    console.log('\nProblems found:')
    console.log(bad.join('\n'))
    process.exit(1)
  }

  console.log('\nAll reports valid. ✓')
}

main()