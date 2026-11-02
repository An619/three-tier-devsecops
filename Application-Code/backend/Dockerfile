# --- Stage 1: Install Dependencies ---
FROM node:20-alpine AS deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev

# --- Stage 2: Runtime ---
FROM node:20-alpine AS runner
WORKDIR /usr/src/app

# PATCH: Upgrade OS packages to fix Alpine CVEs
RUN apk update && apk upgrade --no-cache

# Copy production node_modules
COPY --chown=node:node --from=deps /usr/src/app/node_modules ./node_modules

# Copy the rest of the application code
COPY --chown=node:node . .

USER node
EXPOSE 3500
CMD ["node", "index.js"]