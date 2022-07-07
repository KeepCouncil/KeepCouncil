#!/usr/bin/env bash

docker-compose -f docker-compose.build.yml -f docker-compose.local.yml up --build
