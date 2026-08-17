export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  tags: string[]
  readingMinutes: number
  featured?: boolean
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'introducing-clerk-s-rank-deep-research',
    title: 'Introducing Clerk: S-Rank Deep Research',
    excerpt:
      'Clerk breaks topics into 100+ parallel sub-niches, keeps state for a week, and turns a mountain of sources into statistically-backed odds — moving enterprise research from AI guessing to data science.',
    date: '2026-04-02',
    category: 'Product',
    tags: ['clerk', 'research', 'ai'],
    readingMinutes: 6,
    featured: true,
    content: [
      'Most research agents die the moment the internet flickers. Clerk was built to survive a week of chaos and still deliver an S-Rank research paper.',
      'At its core, Clerk is a distributed durable execution engine. A topic enters, a Commander agent decomposes it into 100+ specific sub-niches, and a small army of worker workflows fans out to research each one in parallel.',
      'Because every worker runs on Temporal.io, a rate limit, a ban, or even a full server restart never loses progress. State is checkpointed after every step.',
      'When the workers return, the Analyst phase loads every result into DuckDB. Reliability scores, sentiment tags, deduplicated claims, correlation matrices — real statistics, not vibes.',
      'Finally, the Synthesizer compiles everything into an S-Rank report: executive summary, citations, trend visualizations, and predictive odds with confidence scores.',
      'Clerk is auditable end to end. Every report and dataset is pushed to Git, so you can watch the research evolve commit by commit.',
    ],
  },
  {
    slug: 'the-four-phase-research-pipeline',
    title: 'The 4-Phase Research Pipeline: From Topic to S-Rank Report',
    excerpt:
      'Decomposition, distributed extraction, statistics, and synthesis — how Clerk turns a single topic into a statistically-backed research paper.',
    date: '2026-03-29',
    category: 'Research',
    tags: ['clerk', 'pipeline', 'research'],
    readingMinutes: 6,
    featured: true,
    content: [
      'Every Clerk research run follows the same four-phase pipeline, designed to combine breadth with rigor.',
      'Phase I is Decomposition. The Commander agent takes a topic like "Web3" and breaks it into 100 specific sub-niches — each with its own ID, timeframe, and search parameters. The output is a Research Map: the blueprint for the entire investigation.',
      'Phase II is Distributed Extraction. Up to 100 worker workflows fan out in parallel, one per sub-niche. Each worker runs on Temporal.io, so a rate limit, ban, or server restart never loses progress. Every result passes through a Pydantic schema — a reliability score between 0 and 1, an array of technical claims, and a sentiment index.',
      'Phase III is Aggregation and Statistics. All results are loaded into DuckDB, where correlation matrices, trend vectors, and predictive odds are computed. Duplicates are removed across sub-niches so the final analysis reflects genuinely unique signal.',
      'Phase IV is Synthesis. The Synthesizer agent — Claude 3.5 — reads the statistics and compiles the S-Rank report: executive summary, citations, visualizations, and predictive odds with confidence scores.',
      'The result is research that computes rather than guesses — and the entire pipeline is auditable commit by commit.',
    ],
  },
  {
    slug: 'multi-agent-systems-commanders-workers-and-analysts',
    title: 'Multi-Agent Systems: How Commander, Workers, and Analysts Cooperate',
    excerpt:
      'Clerk is a hierarchical multi-agent system. Here is how a Commander, an army of Workers, an Analyst, and a Synthesizer collaborate on one research task.',
    date: '2026-03-22',
    category: 'Engineering',
    tags: ['ai', 'agents', 'multi-agent'],
    readingMinutes: 5,
    content: [
      'Single-model chatbots are great at conversation. They are less great at research — because research is not one task, it is thousands.',
      'Clerk solves this with a hierarchical multi-agent architecture built on a map-reduce pattern.',
      'The Commander (o3 / DeepSeek-R1) decomposes a topic into 100+ sub-niches and assigns each a timeframe and search strategy. This is the "map" — planning the shape of the investigation.',
      'The Workers (Claude 3.5 + GPT-4o-mini) execute the plan. Each researches a single sub-niche, extracts structured data against a Pydantic schema, and scores source reliability. Because every worker is an isolated Temporal workflow, one failing to hit a rate limit never affects the other 99.',
      'The Analyst (DuckDB + Polars) performs the "reduce" — loading every result, computing correlations and trend vectors, and deduplicating claims.',
      'The Synthesizer (Claude 3.5) writes the final report, weaving the statistics into prose with citations and predictive odds.',
      'Coordination across all four is handled by LangGraph, which manages state transitions and checkpoints between phases — so the whole system is resumable, observable, and durable.',
    ],
  },
  {
    slug: 'what-is-a-research-map',
    title: 'Research Maps: Decomposing a Topic into 100+ Sub-Niches',
    excerpt:
      'A research map is the blueprint behind every Clerk investigation — 100+ sub-niches, each with timeframes, search parameters, and a unique ID.',
    date: '2026-03-16',
    category: 'Research',
    tags: ['clerk', 'research', 'methodology'],
    readingMinutes: 4,
    content: [
      'You cannot deeply research "Web3" as one query. You research "layer-2 scaling", "zero-knowledge proofs", "DeFi lending", and ninety-seven other sub-niches — then you combine them.',
      'That is the idea behind the Research Map, the output of Clerk’s Decomposition phase.',
      'A research map is a JSON document containing 100+ sub-niches. Each sub-niche has a unique ID, a topic, a description, a timeframe (for example 2014–2026), and search parameters directing the workers to the right sources.',
      'The map also stores the overall timeframe, an estimated duration, and a research ID like "research-web3-2026".',
      'The power of the map is parallelization. Instead of one model skimming a topic, 100 focused investigations run simultaneously — each going deeper than a single pass ever could.',
      'When combined with reliability scoring and statistical aggregation, this is what moves research from AI guessing to data science.',
    ],
  },
  {
    slug: 'from-ai-guessing-to-data-science-odds',
    title: 'From AI Guessing to Data Science: How Clerk Calculates Odds',
    excerpt:
      'Instead of predicting from vibes, Clerk computes "odds" — statistically-backed predictions with confidence scores derived from collected data.',
    date: '2026-03-10',
    category: 'Research',
    tags: ['clerk', 'statistics', 'data-science'],
    readingMinutes: 5,
    content: [
      'Most AI research ends with a confident guess. Clerk ends with an odds calculation.',
      'After 100+ workers return structured data, the Analyst phase loads everything into DuckDB — an in-process analytical engine that can crunch thousands of JSON files in seconds.',
      'From that data, Clerk computes correlation matrices (how tightly sub-niches move together), trend vectors (which directions are increasing or decreasing), and deduplication statistics (how many claims were genuinely unique).',
      'The result is an odds calculation: a prediction like "Layer 2 adoption will exceed Layer 1 by 2028", paired with a confidence score of 0.82 and the basis — "based on 2017 whitepaper trends vs 2024 implementation data".',
      'That basis is the difference. Every odds statement points back to the data that produced it, which is why Clerk research is auditable, reproducible, and genuinely quantitative.',
      'It is not AI guessing. It is data science.',
    ],
  },
  {
    slug: 'what-is-durable-execution',
    title: 'What Is Durable Execution and Why Research Agents Need It',
    excerpt:
      'Deep research takes a week. Durable execution makes sure a week of work survives restarts, rate limits, and infrastructure chaos.',
    date: '2026-03-04',
    category: 'Engineering',
    tags: ['clerk', 'temporal', 'durability'],
    readingMinutes: 4,
    content: [
      'Durable execution is the ability for a workflow to survive interruption — a server restart, a network blip, a crash — and resume exactly where it left off.',
      'For research agents this is existential. A deep investigation runs for up to a week. Without durability, one flicker of the internet wipes out days of work.',
      'Clerk achieves durability with Temporal.io. Every activity is checkpointed, so workflows can be paused, resumed, and even replayed.',
      'Durability also enables isolation: each of the 100 workers is an independent workflow. When one worker hits a rate limit, it sleeps and retries — the other 99 continue undisturbed.',
      'This is why Clerk can promise a complete research cycle within a week, without losing a single sub-niche along the way.',
    ],
  },
  {
    slug: 'the-future-of-technology-through-deep-research',
    title: 'The Future of Technology Through Deep Research',
    excerpt:
      'At Ngentech, we believe the future of technology is built on deep research. Here is how our research engine informs everything we build.',
    date: '2026-02-26',
    category: 'Company',
    tags: ['ngentech', 'research', 'vision'],
    readingMinutes: 4,
    content: [
      'Ngentech is a technology research organization. Before we build, we understand.',
      'Our flagship product, Clerk, embodies that philosophy. It does not guess — it computes, using a mass of personally collected data and statistical analysis.',
      'That same rigor flows into ACAD, our learning platform, where AI personalizes every learning path and analytics reveal how students actually learn.',
      'The future of technology will not be written by whoever has the best guess. It will be written by whoever has the deepest understanding.',
      'That is why we research first, and build second.',
    ],
  },
  {
    slug: 'why-durability-matters-for-research-agents',
    title: 'Why Durability Matters for Research Agents',
    excerpt:
      'A research agent that loses its state halfway through a week-long investigation is not an agent — it is a liability. Here is why durable execution is non-negotiable.',
    date: '2026-02-19',
    category: 'Engineering',
    tags: ['clerk', 'temporal', 'engineering'],
    readingMinutes: 5,
    content: [
      'Deep research takes time. A serious investigation spans days, sometimes a week. That is an eternity for a stateless process.',
      'Clerk solves this with Temporal.io. Every workflow activity is checkpointed, so a restart resumes where it left off — no lost progress, no re-scraping, no duplicated work.',
      'Durability also means isolation. One worker hitting a rate limit sleeps and retries without affecting the other 99. The circuit breaker pattern prevents cascading failures across the fleet.',
      'The result: research you can trust to finish, and finish with data intact.',
    ],
  },
  {
    slug: 'acad-one-platform-for-academic-excellence',
    title: 'ACAD: One Platform for Academic Excellence',
    excerpt:
      'ACAD pairs the Ngentech research ethos with learning — AI-powered personalized paths, live sessions, and analytics that reveal how students actually learn.',
    date: '2026-02-12',
    category: 'Product',
    tags: ['acad', 'education', 'ai'],
    readingMinutes: 3,
    content: [
      'Learning is not one-size-fits-all. ACAD is built on the belief that every student deserves a path shaped by their own progress.',
      'Smart Learning uses AI to adapt learning paths in real time. Live Sessions bring real-time interactive classrooms to any screen. And Analytics turns raw student data into deep insight.',
      'ACAD is launching soon. Join the newsletter to be notified when enrollment opens.',
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts
}