import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/data/site'
import { getAllResearch, getAllTopics, getAllTags, researchCategories } from '@/lib/data/research'
import { getAllPosts } from '@/lib/data/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url
  const now = new Date()

  const staticPages = [
    '',
    '/clerk',
    '/clerk/features',
    '/clerk/architecture',
    '/clerk/how-it-works',
    '/clerk/tech-stack',
    '/clerk/use-cases',
    '/clerk/api',
    '/clerk/faq',
    '/acad',
    '/acad/features',
    '/acad/learning-paths',
    '/acad/faq',
    '/research',
    '/blog',
    '/newsletter',
    '/about',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
  ]

  const categoryPages = researchCategories.map((c) => `/research/categories/${c.slug}`)

  const topicPages = Array.from(getAllTopics().keys()).map((topic) => ({
    url: `${base}/research/topics/${topic}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  const tagPages = getAllTags().map((tag) => ({
    url: `${base}/research/tags/${tag}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  const topicsIndexPage = { url: `${base}/research/topics`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.6 }

  const researchPages = getAllResearch().map((r) => ({
    url: `${base}/research/${r.slug}`,
    lastModified: r.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const nichePages = getAllResearch().flatMap((r) =>
    r.niches.map((n) => ({
      url: `${base}/research/${r.slug}/${n.topic}`,
      lastModified: r.publishedAt,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  )

  const blogPages = getAllPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: p === '' ? 1 : 0.7,
    })),
    ...categoryPages.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    topicsIndexPage,
    ...topicPages,
    ...tagPages,
    ...researchPages,
    ...nichePages,
    ...blogPages,
  ]
}