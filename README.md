# NGENTECH — ngentech.co

> The future of technology with deep research.

The main hub for the Ngentech ecosystem — a Next.js 14 App Router site with a unified black/white futurism design system and a massive-SEO content architecture.

## What's here

- **Home** — hero, product grid (Clerk, ACAD), featured research, blog preview, newsletter
- **`/clerk/*`** — flagship deep-research agent: features, architecture, how-it-works, tech stack, use cases, API reference, FAQ
- **`/acad`** — Ngentech Academy hub: features, learning paths, FAQ
- **`/research/*`** — programmatic SEO engine: report pages, sub-niche deep dives, category/tag archives (SSG/ISR-ready)
- **`/blog/*`** — articles with RSS
- **`/newsletter`** — signup landing
- SEO: dynamic `sitemap.xml`, `robots.txt`, `llms.txt`, `rss.xml`, JSON-LD (Organization, WebSite, Article, FAQPage), OG/Twitter metadata

## Getting started

```bash
npm install
npm run dev       # http://localhost:8007
npm run build
npm run lint
```

## Environment

Copy `.env.example` to `.env`:

```bash
NEXT_PUBLIC_SITE_URL=https://ngentech.co
NEXT_PUBLIC_SITE_NAME=NGENTECH
NEXT_PUBLIC_TAGLINE=The future of technology with deep research
NEXT_PUBLIC_GA_ID=           # Google Analytics 4 (e.g. G-XXXXXXX)
NEXT_PUBLIC_GOOGLE_VERIFICATION=  # Search Console verification token
NEWSLETTER_ENDPOINT=         # optional webhook to store signups
```

## SEO & performance

- **Canonicals + OG/Twitter cards** on every page via `src/lib/seo.ts`
- **Dynamic OG images** — `/api/og` (edge `ImageResponse`) generates a branded black/white futurism card per page; reports pass topic, reliability, and niche count into the image
- **JSON-LD** — Organization, WebSite, Article, ScholarlyArticle, FAQPage, BreadcrumbList
- **`sitemap.xml`, `robots.txt`, `rss.xml`, `llms.txt`** generated automatically
- **Security headers** (nosniff, DENY frame, referrer policy, permissions policy) via `next.config.js`
- **Analytics** — GA4 loaded only when `NEXT_PUBLIC_GA_ID` is set (`src/components/Analytics.tsx`)

## Deployment

- Vercel (recommended) — import the repo, set env vars, add domain `ngentech.co`
- Or Docker: `docker build -t ngentech-root . && docker run -p 8007:8007 ngentech-root`
- GitHub Actions in `.github/workflows/` (CI + GHCR/SSH deploy) are preconfigured.

## Content & design system

- Design system: `src/app/globals.css` (tokens, grid-bg, glow, animations) + `tailwind.config.js`
- Content/data lives in `src/lib/data/` (`site.ts`, `clerk.ts`, `acad.ts`, `blog.ts`)
- Research reports are loaded **from files** in `content/research/` (see below) — no code changes needed to publish new reports.

## Publishing a research report (programmatic SEO engine)

Every Clerk research run drops a directory into `content/research/<slug>/` and the site automatically generates its report page, sub-niche deep-dive pages, topic archives, sitemap entries, and RSS items.

Structure (mirrors Clerk's output format):

```
content/research/<slug>/
├── summary.md                    # S-Rank executive report body (markdown)
├── report.json                   # report metadata
├── statistics/
│   ├── odds-calculations.json    # [{ prediction, confidence, basis }]
│   └── trend-vectors.json        # [{ name, trend }]
└── niches/
    ├── <niche-topic>.json        # one file per sub-niche
    └── ...
```

`report.json` shape:

```json
{
  "report": {
    "id": "research-web3-2026",
    "slug": "web3-2026",
    "topic": "Web3",
    "timeframe": { "from": 2009, "to": 2026 },
    "status": "completed",
    "totalNiches": 100,
    "completedNiches": 100,
    "avgReliabilityScore": 0.87,
    "sentimentDistribution": { "bullish": 45, "bearish": 20, "neutral": 35 },
    "category": "Blockchain & Web3",
    "tags": ["web3", "blockchain", "defi", "zkp"],
    "publishedAt": "2026-03-28T10:00:00Z"
  }
}
```

Niche file shape:

```json
{
  "id": 1,
  "topic": "layer2-scaling",
  "description": "Layer 2 scaling solutions for blockchain",
  "from": 2014,
  "to": 2026,
  "reliabilityScore": 0.92,
  "sentiment": "Bullish",
  "keyFindings": ["Plasma was introduced in 2017"]
}
```

Validate before publishing:

```bash
npx tsx scripts/check-research.ts
```

## License

Proprietary — Ngentech © 2026