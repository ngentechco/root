/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WPGRAPHQL_ENDPOINT: process.env.WPGRAPHQL_ENDPOINT || 'http://localhost:8080/graphql',
  },
}

module.exports = nextConfig
