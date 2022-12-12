#!/usr/bin/env bash

rm -rf ./packages/api/dist
rm -rf ./packages/api/node_modules

rm -rf ./packages/client/dist
rm -rf ./packages/client/.nuxt
rm -rf ./packages/client/.output
rm -rf ./packages/client/node_modules

docker-compose down
docker system prune --all --volumes --force
echo "cleaned packages and docker environment"
exit 0
