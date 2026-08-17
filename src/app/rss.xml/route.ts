import { siteConfig } from '@/lib/data/site'
import { getAllPosts } from '@/lib/data/blog'
import { getAllResearch } from '@/lib/data/research'

export const dynamic = 'force-static'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function item(title: string, url: string, date: string, description?: string): string {
  return `    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(url)}</link>
      <guid>${escapeXml(url)}</guid>
      <pubDate>${new Date(date).toUTCString()}</pubDate>
      ${description ? `<description>${escapeXml(description)}</description>` : ''}
    </item>`
}

export function GET() {
  const base = siteConfig.url

  const blogItems = getAllPosts().map((p) =>
    item(p.title, `${base}/blog/${p.slug}`, p.date, p.excerpt),
  )

  const researchItems = getAllResearch().map((r) =>
    item(`${r.topic} — Deep Research Report`, `${base}/research/${r.slug}`, r.publishedAt, r.summary),
  )

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteConfig.name)}</title>
    <link>${base}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${blogItems.join('\n')}
    ${researchItems.join('\n')}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}