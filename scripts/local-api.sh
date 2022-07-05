#!/usr/bin/env bash

yarn --cwd ./packages/api run install --immutable &&
yarn --cwd ./packages/api run serve:dev
