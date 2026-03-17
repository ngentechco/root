import { GraphQLClient, gql } from 'graphql-request'

const WPGRAPHQL_ENDPOINT = process.env.WPGRAPHQL_ENDPOINT || 'http://localhost:8080/graphql'

const wpClient = new GraphQLClient(WPGRAPHQL_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
  },
})

// Example: Fetch all posts
export const GET_POSTS = gql`
  query GetPosts {
    posts(first: 10) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`

// Example: Fetch page by slug
export const GET_PAGE_BY_SLUG = gql`
  query GetPageBySlug($slug: ID!) {
    page(id: $slug, idType: SLUG) {
      id
      title
      content
      slug
    }
  }
`

// Example: Fetch site settings
export const GET_SITE_SETTINGS = gql`
  query GetSiteSettings {
    generalSettings {
      title
      description
      url
    }
  }
`

export interface Post {
  id: string
  title: string
  slug: string
  excerpt: string
  date: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
}

export interface Page {
  id: string
  title: string
  content: string
  slug: string
}

export interface SiteSettings {
  title: string
  description: string
  url: string
}

// Fetch posts from WordPress
export async function getPosts(): Promise<{ posts: { nodes: Post[] } }> {
  try {
    return await wpClient.request(GET_POSTS)
  } catch (error) {
    console.error('Error fetching posts from WordPress:', error)
    return { posts: { nodes: [] } }
  }
}

// Fetch page by slug
export async function getPageBySlug(slug: string): Promise<{ page: Page | null }> {
  try {
    return await wpClient.request(GET_PAGE_BY_SLUG, { slug })
  } catch (error) {
    console.error('Error fetching page from WordPress:', error)
    return { page: null }
  }
}

// Fetch site settings
export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const data = await wpClient.request<{ generalSettings: SiteSettings }>(GET_SITE_SETTINGS)
    return data.generalSettings
  } catch (error) {
    console.error('Error fetching site settings:', error)
    return {
      title: 'NGENTECH',
      description: 'The future of Technology with deep research',
      url: 'http://localhost:8007',
    }
  }
}

export default wpClient
