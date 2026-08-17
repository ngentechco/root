export interface FaqItem {
  question: string
  answer: string
}

export interface Feature {
  title: string
  description: string
  detail?: string
}

export const clerkData = {
  name: 'Clerk',
  tagline: 'S-Rank Deep Research Agent',
  subline: 'Deep Research · S-Rank Intelligence',
  status: 'Initializing',
  description:
    'Clerk is Ngentech’s flagship deep research agent — a Distributed Durable Execution Engine that breaks topics into 100+ parallel sub-niches, maintains state for up to a week, and delivers statistical analysis that moves beyond “AI guessing” to actual data science.',
  fourPillars: [
    {
      title: 'Durable',
      description:
        'Most agents die if the internet flickers. Clerk is backed by Temporal.io — tasks survive server restarts for 1+ weeks.',
    },
    {
      title: 'Deep',
      description:
        '100 sub-niches ensure no stone is left unturned. Clerk searches “Web3 + Zero Knowledge Proofs + 2014”, not just “Web3”.',
    },
    {
      title: 'Quantitative',
      description:
        'Moves beyond “AI guessing” to data science — calculating answers based on a mass of personally collected data.',
    },
    {
      title: 'Auditable',
      description:
        'Full commit history shows how Clerk’s thoughts and odds evolved over the research period.',
    },
  ],
  pipeline: [
    {
      phase: 'Phase I',
      title: 'Decomposition',
      agent: 'Commander Agent',
      description:
        'A topic like “Web3” is broken into 100 specific sub-niches by frontier reasoning models. Output: a Research Map with unique IDs, timeframes, and search parameters.',
    },
    {
      phase: 'Phase II',
      title: 'Distributed Extraction',
      agent: 'Worker Agents ×100',
      description:
        '100 simultaneous Temporal workflows fan out — each researching one sub-niche with neural search, clean scraping, and schema-enforced extraction of reliability scores, technical claims, and sentiment.',
    },
    {
      phase: 'Phase III',
      title: 'Aggregation & Statistics',
      agent: 'Analyst Agent',
      description:
        'All results are loaded into DuckDB. Correlation matrices, trend vectors, and predictive “odds” are calculated with deduplication across sub-niches.',
    },
    {
      phase: 'Phase IV',
      title: 'Synthesis',
      agent: 'Synthesizer Agent',
      description:
        'Claude 3.5 compiles the statistics into an S-Rank enterprise research paper — executive summary, citations, visualizations, and predictive odds analysis.',
    },
  ],
  agents: [
    {
      name: 'Commander',
      model: 'o3 / DeepSeek-R1',
      role: 'Topic decomposition & research map generation',
    },
    {
      name: 'Workers',
      model: 'Claude 3.5 + GPT-4o-mini',
      role: 'Parallel research, extraction, quality scoring',
    },
    {
      name: 'Analyst',
      model: 'DuckDB + Polars',
      role: 'Statistical analysis, correlations, deduplication',
    },
    {
      name: 'Synthesizer',
      model: 'Claude 3.5',
      role: 'Final S-Rank report, citations, predictive odds',
    },
  ],
  stats: [
    { value: '100+', label: 'Parallel sub-niches per topic' },
    { value: '1 week', label: 'Durable task persistence' },
    { value: '4 phases', label: 'Research pipeline' },
    { value: '0–1', label: 'Source reliability scoring' },
  ],
  features: [
    {
      title: 'Hierarchical Multi-Agent Architecture',
      description:
        'Commander → Worker → Analyst → Synthesizer. A map-reduce pattern that scales research to 100+ parallel instances.',
    },
    {
      title: 'Durable Execution Engine',
      description:
        'Temporal.io keeps state for up to a week. Server restart? No lost progress. Rate-limited? Auto-retry without touching other workers.',
    },
    {
      title: 'Neural Search & Extraction',
      description:
        'Exa.ai neural search surfaces cleaner results than keyword engines, and Firecrawl converts JavaScript-heavy sites into clean Markdown.',
    },
    {
      title: 'Statistical Analysis Engine',
      description:
        'DuckDB OLAP over thousands of JSON files computes correlations, trend vectors, deduplication, and predictive odds.',
    },
    {
      title: 'Sentiment & Reliability Scoring',
      description:
        'Every claim is scored 0.0–1.0 for source reliability and tagged Bullish / Bearish / Neutral.',
    },
    {
      title: 'Version-Controlled Output',
      description:
        'Reports and data push to Git repositories (with Git LFS) so the full research evolution is auditable.',
    },
  ],
  techStack: [
    {
      group: 'Orchestration & Workflow',
      items: [
        { name: 'Temporal.io', purpose: 'Durable execution, 1-week+ persistence' },
        { name: 'LangGraph', purpose: 'Multi-agent state management' },
        { name: 'Python 3.12+', purpose: 'Primary language' },
      ],
    },
    {
      group: 'Intelligence Layer',
      items: [
        { name: 'OpenAI o3 / DeepSeek-R1', purpose: 'Decomposition' },
        { name: 'Claude 3.5 Sonnet', purpose: 'Synthesis & extraction' },
        { name: 'GPT-4o-mini', purpose: 'High-speed JSON distillation' },
        { name: 'Pydantic', purpose: 'Schema enforcement' },
      ],
    },
    {
      group: 'Network & Stealth',
      items: [
        { name: 'Exa.ai', purpose: 'Neural search' },
        { name: 'Firecrawl', purpose: 'Clean web scraping' },
        { name: 'Bright Data / Oxylabs', purpose: 'Residential proxy mesh' },
        { name: 'WireGuard / OpenVPN', purpose: 'Secure tunneling' },
      ],
    },
    {
      group: 'Data Engineering',
      items: [
        { name: 'PostgreSQL + pgvector', purpose: 'Metadata & semantic memory' },
        { name: 'MinIO / S3', purpose: 'Raw JSON data lake' },
        { name: 'DuckDB', purpose: 'In-process analytics' },
        { name: 'Polars / Pandas', purpose: 'Statistical computation' },
      ],
    },
    {
      group: 'Deployment',
      items: [
        { name: 'Docker', purpose: 'Containerization' },
        { name: 'Kubernetes', purpose: 'Horizontal scaling (100+ workers)' },
        { name: 'Prometheus + Grafana', purpose: 'Monitoring' },
      ],
    },
  ],
  useCases: [
    {
      title: 'Strategic Decision Making',
      audience: 'NgenTech Admins',
      description:
        'Deep, quantified research on technology domains before committing strategy or resources.',
    },
    {
      title: 'Technical Analysis',
      audience: 'Research Teams',
      description:
        '100+ sub-niche deep dives with reliability scoring, sentiment, and full source citation trails.',
    },
    {
      title: 'Enterprise Research',
      audience: 'Enterprise Clients',
      description:
        'Custom deep research requests delivered as S-Rank papers with predictive odds analysis.',
    },
    {
      title: 'Internal Collaboration',
      audience: 'Internal Teams',
      description:
        'Real-time research progress, statistical dashboards, and shareable reports.',
    },
  ],
  faqs: [
    {
      question: 'What is Clerk?',
      answer:
        'Clerk is Ngentech’s flagship deep research agent. It is a distributed, durable execution engine that decomposes a topic into 100+ parallel sub-niches, researches each independently, then statistically analyzes and synthesizes an S-Rank research report.',
    },
    {
      question: 'How is Clerk different from a chatbot?',
      answer:
        'Chatbots guess. Clerk computes. It runs 100+ parallel research workflows, scores sources 0.0–1.0 for reliability, tags sentiment, deduplicates claims, and calculates predictive “odds” from the mass of collected data — moving from AI guessing to data science.',
    },
    {
      question: 'How long does research take?',
      answer:
        'A full research cycle completes within about a week, powered by Temporal.io durable execution that survives server restarts without losing progress.',
    },
    {
      question: 'What does Clerk produce?',
      answer:
        'An S-Rank enterprise research paper (PDF/Markdown) with an executive summary, citations and references, trend visualizations, and predictive odds analysis — plus the full raw data for audit.',
    },
    {
      question: 'Is the research auditable?',
      answer:
        'Yes. Every report and its data is pushed to a Git repository with Git LFS, so the full commit history shows how thoughts and odds evolved over the research period.',
    },
    {
      question: 'How does Clerk avoid rate limits and bans?',
      answer:
        'Each worker runs as an isolated Temporal workflow with automatic retry and sleep on rate limits, a residential proxy mesh (Bright Data / Oxylabs), and IP auto-swapping — so one failure never affects the others.',
    },
  ] as FaqItem[],
}

export const clerkFaqs = clerkData.faqs