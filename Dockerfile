# NGENTECH Root Platform Dockerfile

FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY package-lock.json ./

# Install dependencies (include dev for build)
RUN npm ci

# Copy source code
COPY . .

# Build Next.js application
RUN npm run build

# Expose port
EXPOSE 8007

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8007/health || exit 1

# Start the Next.js application
CMD ["npm", "run", "start"]
