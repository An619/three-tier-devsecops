# --- Stage 1: Build the React App ---
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
ENV REACT_APP_BACKEND_URL=/api/tasks
RUN npm run build

# --- Stage 2: Serve the App with Nginx ---
FROM nginx:stable-alpine

# PATCH: Upgrade OS packages to fix Alpine CVEs
RUN apk update && apk upgrade --no-cache

# Create and set permissions for the directory Nginx needs to write to
RUN touch /var/run/nginx.pid \
    && chown -R nginx:nginx /var/cache/nginx /var/run/nginx.pid

# Remove default static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files with correct ownership
COPY --chown=nginx:nginx --from=builder /usr/src/app/build /usr/share/nginx/html

# Copy Nginx config with correct ownership
COPY --chown=nginx:nginx nginx.conf /etc/nginx/conf.d/default.conf

# Switch to non-root user
USER nginx

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]