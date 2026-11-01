# --- Stage 1: Install Dependencies ---
FROM node:20-alpine AS deps
WORKDIR /usr/src/app

# Copy only package files to leverage Docker layer caching
COPY package*.json ./

# Install ONLY production dependencies
RUN npm ci --omit=dev

# --- Stage 2: Runtime ---
FROM node:20-alpine AS runner
WORKDIR /usr/src/app

# Copy production node_modules from the deps stage
# Use --chown to ensure the non-root 'node' user owns the files
COPY --chown=node:node --from=deps /usr/src/app/node_modules ./node_modules

# Copy the rest of the application code
COPY --chown=node:node . .

# Run as the non-root user
USER node

# Expose the application port
EXPOSE 3500

# Start the application
CMD ["node", "index.js"]