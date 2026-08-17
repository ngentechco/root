/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
        ],
      },
      {
        source: '/rss.xml',
        headers: [{ key: 'Content-Type', value: 'application/rss+xml; charset=utf-8' }],
      },
    ]
  },
  async rewrites() {
    return [
      { source: '/feed', destination: '/rss.xml' },
      { source: '/sitemap', destination: '/sitemap.xml' },
    ]
  },
}

module.exports = nextConfig