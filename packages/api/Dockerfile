# Multi-Image Build to reduce image size
# 
# 
# Base Image
FROM node:16.15.1-alpine3.16 AS basebuild
ARG DEV_DATABASE_URL
ARG INT_DATABASE_URL
ARG PROD_DATABASE_URL
ARG AUTH_DOMAIN
ARG AUTH_AUDIENCE
ENV DEV_DATABASE_URL $DEV_DATABASE_URL
ENV INT_DATABASE_URL $INT_DATABASE_URL
ENV PROD_DATABASE_URL $PROD_DATABASE_URL
ENV AUTH_DOMAIN $AUTH_DOMAIN
ENV AUTH_AUDIENCE $AUTH_AUDIENCE
WORKDIR /usr/src/app/api
HEALTHCHECK --interval=10s --start-period=10s --timeout=4s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://0.0.0.0:3001/api/v1/healthcheck || exit 1

FROM basebuild as development
ENV NODE_ENV development
ENV DATABASE_URL $DEV_DATABASE_URL
# Need bash to run wait-for-it.sh healthcheck
RUN apk update && apk add bash && rm -rf /var/cache/apk/*
COPY ./packages/api/package.json ./packages/api/yarn.lock ./
RUN yarn install --immutable
COPY ./packages/api/ .
RUN yarn build-api
CMD ["./wait-for-it.sh", "database:5432", "--strict", "--timeout=0", "--", "yarn", "serve-dev"]
EXPOSE 3001

FROM basebuild as test
ENV NODE_ENV test
ENV DATABASE_URL $INT_DATABASE_URL
# Need bash to run wait-for-it.sh healthcheck
RUN apk update && apk add bash && rm -rf /var/cache/apk/*
COPY ./packages/api/package.json ./packages/api/yarn.lock ./
RUN yarn install --immutable
COPY ./packages/api/ ./
RUN yarn build-api
CMD ["./wait-for-it.sh", "database_test:5432", "--strict", "--timeout=0", "--", "yarn", "test"]
EXPOSE 3001

FROM basebuild as production
ENV NODE_ENV production
ENV DATABASE_URL $PROD_DATABASE_URL
# Need bash to run wait-for-it.sh healthcheck
RUN apk update && apk add bash && rm -rf /var/cache/apk/*
COPY ./packages/api/package.json ./packages/api/yarn.lock ./
RUN yarn install --production --immutable
COPY ./packages/api/ ./
RUN yarn build-api
CMD ["./wait-for-it.sh", "database:5432", "--strict", "--timeout=0", "--", "yarn", "serve"]
EXPOSE 3001
