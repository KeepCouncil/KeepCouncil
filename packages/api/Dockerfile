# Multi-Image Build to reduce image size
# 
# 
# Base Image
FROM node:16.15.1-alpine3.16 AS BUILD_IMAGE
WORKDIR /usr/src/app/api
COPY ./packages/api/package.json ./packages/api/yarn.lock ./
# Install with devDependencies but as frozen-lockfile/immutable for CI reliability
RUN yarn --immutable
COPY ./packages/api/ .
# Build with esbuild and with devDependencies
RUN BUILD_MODE=production yarn build-api
# Rerunning install with only --production will remove devDeps from docker image size in next step
RUN yarn install --production --immutable

FROM node:16.15.1-alpine3.16
WORKDIR /usr/src/app/api
# Need bash to run wait-for-it.sh healthcheck
RUN apk update && apk add bash && rm -rf /var/cache/apk/*
# Copy only what we need from above into our runtime docker image, to reduce size
COPY --from=BUILD_IMAGE /usr/src/app/api/wait-for-it.sh ./
COPY --from=BUILD_IMAGE /usr/src/app/api/dist ./dist
COPY --from=BUILD_IMAGE /usr/src/app/api/node_modules ./node_modules
# 'Expose' here is for documentation, has no functional effect
EXPOSE 3001
CMD ["./wait-for-it.sh", "database:5432", "--strict", "--timeout=300", "--", "node", "./dist/index.js"]
