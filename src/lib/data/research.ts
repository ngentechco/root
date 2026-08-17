// Research data is loaded from /content/research (file-based).
// Each directory = one report. Adding a directory auto-generates
// report pages, niche pages, topic archives, sitemap entries, and RSS.
export {
  type ResearchNiche,
  type ResearchOdds,
  type ResearchReport,
  type ResearchTrend,
  researchCategories,
  slugify,
  getAllResearch,
  getResearchReport,
  getResearchByCategory,
  getAllTopics,
  getAllTags,
} from '@/lib/research/loader'