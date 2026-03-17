import { getPosts, getPageBySlug, getSiteSettings } from '@/lib/wordpress'

// Mock the GraphQL client
jest.mock('graphql-request', () => ({
  gql: (strings: TemplateStringsArray) => strings.join(''),
  GraphQLClient: jest.fn().mockImplementation(() => ({
    request: jest.fn().mockImplementation((query) => {
      if (query.includes('GetPageBySlug')) {
        return Promise.resolve({ page: { id: '1', title: 'Home', content: '', slug: 'home' } })
      }
      if (query.includes('GetSiteSettings')) {
        return Promise.reject(new Error('Network error'))
      }
      return Promise.resolve({ posts: { nodes: [] } })
    }),
  })),
}))

describe('WordPress Integration', () => {
  describe('getPosts', () => {
    it('should fetch posts from WordPress', async () => {
      const result = await getPosts()
      
      expect(result).toHaveProperty('posts')
      expect(result.posts).toHaveProperty('nodes')
      expect(Array.isArray(result.posts.nodes)).toBe(true)
    })
  })

  describe('getPageBySlug', () => {
    it('should fetch page by slug', async () => {
      const result = await getPageBySlug('home')
      
      expect(result).toHaveProperty('page')
    })
  })

  describe('getSiteSettings', () => {
    it('should return fallback settings when WP is unavailable', async () => {
      const settings = await getSiteSettings()
      
      expect(settings).toHaveProperty('title')
      expect(settings).toHaveProperty('description')
      expect(settings).toHaveProperty('url')
      expect(settings.title).toBe('NGENTECH')
    })
  })
})
