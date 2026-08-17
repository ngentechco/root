export const siteConfig = {
  name: 'NGENTECH',
  legalName: 'Ngentech Co.',
  tagline: 'The future of technology with deep research',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://ngentech.co',
  worldUrl: 'https://ngen.world',
  email: 'info@ngentech.co',
  social: {
    x: 'https://x.com/ngentechco',
    github: 'https://github.com/ngentechco',
    linkedin: 'https://linkedin.com/company/ngentechco',
  },
  description:
    'Ngentech is a technology research organization. We build Clerk, an S-Rank deep research engine, and ACAD, an AI-powered learning platform — advancing the future of technology through deep research.',
  products: [
    {
      name: 'Clerk',
      slug: 'clerk',
      tagline: 'S-Rank Deep Research Agent',
      description:
        'A distributed durable execution engine that breaks topics into 100+ parallel sub-niches and delivers statistical analysis beyond AI guessing.',
      href: '/clerk',
    },
    {
      name: 'ACAD',
      slug: 'acad',
      tagline: 'One Platform for Academic Excellence',
      description:
        'An AI-powered learning platform with personalized learning paths, live sessions, and deep analytics into student progress.',
      href: '/acad',
    },
  ],
  nav: [
    { label: 'Clerk', href: '/clerk' },
    { label: 'ACAD', href: '/acad' },
    { label: 'Research', href: '/research' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
  ],
}

export const formatDate = (date: string | Date) =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })