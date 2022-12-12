# Multi-Image Build to reduce image size
# 
# 
# Base Image
FROM node:16.15.1-alpine3.16 AS basebuild
ARG VUE_APP_AUTH_DOMAIN
ARG VUE_APP_AUTH_AUDIENCE
ARG VUE_APP_AUTH_CLIENT_ID
ENV VUE_APP_AUTH_DOMAIN $VUE_APP_AUTH_DOMAIN
ENV VUE_APP_AUTH_AUDIENCE $VUE_APP_AUTH_AUDIENCE
ENV VUE_APP_AUTH_CLIENT_ID $VUE_APP_AUTH_CLIENT_ID
WORKDIR /usr/src/app/client
HEALTHCHECK --interval=10s --start-period=10s --timeout=4s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://0.0.0.0:3000/ || exit 1

FROM basebuild as development
ENV NODE_ENV development
# Need bash to run wait-for-it.sh healthcheck
RUN apk update && apk add bash && rm -rf /var/cache/apk/*
COPY ./packages/client/package.json ./packages/client/yarn.lock ./
RUN yarn install --immutable
COPY ./packages/client/ .
RUN yarn build-dev
CMD ["./wait-for-it.sh", "api:3001", "--strict", "--timeout=0", "--", "yarn", "serve-dev"]
EXPOSE 3000

FROM basebuild as production
ENV NODE_ENV production
# Need bash to run wait-for-it.sh healthcheck
RUN apk update && apk add bash && rm -rf /var/cache/apk/*
COPY ./packages/client/package.json ./packages/client/yarn.lock ./
RUN yarn install --production --immutable
COPY ./packages/client/ .
RUN yarn build
CMD ["./wait-for-it.sh", "api:3001", "--strict", "--timeout=0", "--", "yarn", "serve"]
EXPOSE 3000