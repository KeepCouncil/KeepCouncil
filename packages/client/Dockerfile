# Multi-Image Build to reduce image size
# 
# 
# Base Image
FROM node:16.15.1-alpine3.16 AS BUILD_IMAGE
WORKDIR /usr/src/app/client
COPY ./packages/client/package.json ./packages/client/yarn.lock ./
# Install with devDependencies but as frozen-lockfile/immutable for CI reliability
RUN yarn --immutable
COPY ./packages/client/ .
# Build using devDependencies
RUN yarn build
# Rerunning install with only --production will remove devDeps from docker image size in next step
RUN yarn install --production --immutable

FROM node:16.15.1-alpine3.16
WORKDIR /usr/src/app/client
# Need bash to run wait-for-it.sh healthcheck
RUN apk update && apk add bash && rm -rf /var/cache/apk/*
# Copy only what we need from above into our runtime docker image, to reduce size
COPY --from=BUILD_IMAGE /usr/src/app/client/wait-for-it.sh ./
COPY --from=BUILD_IMAGE /usr/src/app/client/package.json ./
COPY --from=BUILD_IMAGE /usr/src/app/client/dist ./dist
COPY --from=BUILD_IMAGE /usr/src/app/client/node_modules ./node_modules
# 'Expose' here is for documentation, has no functional effect
EXPOSE 3000
CMD ["./wait-for-it.sh", "api:3001", "--strict", "--timeout=0", "--", "yarn", "serve-client"]
