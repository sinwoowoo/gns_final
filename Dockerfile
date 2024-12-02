# build stage
#FROM node:lts-alpine

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


# Copy built assets from build
COPY --from=build /app/.output ./.output
#COPY --from=build /app/.nuxt ./.nuxt
COPY --from=build /app/package*json ./
COPY --from=build /app/node_modules ./node_modules

# Install production dependencies only

#RUN npm install 

# Set environment variables
#ENV HOST=0.0.0.0
#ENV PORT=3000
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

ENV TZ=Asia/Seoul
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Start the application
CMD ["node", ".output/server/index.mjs" ]
