# NGENTECH Root Platform Dockerfile
# ngentech.co — Next.js 14 App Router + Tailwind

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

EXPOSE 8007
ENV PORT=8007

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8007/api/health || exit 1

CMD ["npm", "run", "start"]