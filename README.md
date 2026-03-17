# NGENTECH Root Platform

The futuristic platform for the Ngentech ecosystem.

## Tech Stack

- **Frontend**: Next.js 14 (React framework)
- **CMS**: WordPress (Headless mode via WPGraphQL)
- **Containerization**: Docker
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- npm or pnpm

### Installation

1. Clone the repository
2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```
3. Start the development server:
   ```bash
   docker-compose up -d
   ```

### Environment Variables

See `.env.example` for required environment variables.

## Services

- **Frontend**: http://localhost:8007
- **WordPress**: http://localhost:8008 (via WPGraphQL)
- **PostgreSQL**: Shared database for ecosystem

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## License

Proprietary - Ngentech © 2026
