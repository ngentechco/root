import type { Metadata } from 'next'
import { siteConfig } from '@/lib/data/site'

interface SeoProps {
  title: string
  description?: string
  path?: string
  type?: 'website' | 'article'
  images?: string[]
  ogTitle?: string
  ogEyebrow?: string
  ogSub?: string
  ogMetric?: string
  ogBadge?: string
}

/** Builds the URL for the dynamic OG image generator. */
export function ogImageUrl({
  title,
  eyebrow,
  sub,
  metric,
  badge,
}: {
  title: string
  eyebrow?: string
  sub?: string
  metric?: string
  badge?: string
}): string {
  const params = new URLSearchParams({ title: title.slice(0, 60) })
  if (eyebrow) params.set('eyebrow', eyebrow)
  if (sub) params.set('sub', sub)
  if (metric) params.set('metric', metric)
  if (badge) params.set('badge', badge)
  return `${siteConfig.url}/api/og?${params.toString()}`
}

export function buildMetadata({
  title,
  description,
  path = '/',
  type = 'website',
  ogTitle,
  ogEyebrow,
  ogSub,
  ogMetric,
  ogBadge,
}: SeoProps): Metadata {
  const url = `${siteConfig.url}${path === '/' ? '' : path}`
  const desc = description || siteConfig.description
  const ogUrl = ogImageUrl({
    title: ogTitle || title,
    eyebrow: ogEyebrow,
    sub: ogSub,
    metric: ogMetric,
    badge: ogBadge,
  })
  const og = {
    title,
    description: desc,
    url,
    siteName: siteConfig.name,
    type,
    locale: 'en_US',
    images: [{ url: ogUrl, width: 1200, height: 630, alt: title }],
  } satisfies Metadata['openGraph']
  return {
    title,
    description: desc,
    alternates: { canonical: url },
    openGraph: og,
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [ogUrl],
    },
    robots: { index: true, follow: true },
  }
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    sameAs: [siteConfig.social.x, siteConfig.social.github, siteConfig.social.linkedin],
    logo: `${siteConfig.url}/icon.svg`,
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: organizationJsonLd(),
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/research?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function articleJsonLd(data: {
  headline: string
  description: string
  datePublished: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.headline,
    description: data.description,
    datePublished: data.datePublished,
    author: { '@type': 'Organization', name: siteConfig.legalName },
    publisher: organizationJsonLd(),
    mainEntityOfPage: data.url,
  }
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function researchArticleJsonLd(data: {
  headline: string
  description: string
  datePublished: string
  url: string
  keywords?: string[]
  sections?: { heading: string; text: string }[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: data.headline,
    description: data.description,
    datePublished: data.datePublished,
    inLanguage: 'en',
    keywords: data.keywords?.join(', '),
    articleSection: data.sections?.map((s) => s.heading).join(', '),
    author: { '@type': 'Organization', name: siteConfig.legalName },
    publisher: organizationJsonLd(),
    mainEntityOfPage: data.url,
    about: { '@type': 'ResearchProject', name: 'Clerk Deep Research Engine' },
  }
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}