# Build stage
FROM ktquarantine.azurecr.io/node-alpine-20 as build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM ktquarantine.azurecr.io/node-alpine-20

WORKDIR /app

# Copy built assets and dependencies from build
COPY --from=build /app/.output ./.output
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", ".output/server/index.mjs"]
