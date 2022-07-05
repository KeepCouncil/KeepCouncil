#!/usr/bin/env bash

yarn --cwd ./packages/client run install --immutable &&
yarn --cwd ./packages/client run serve:dev
