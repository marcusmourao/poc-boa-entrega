#!/bin/bash

echo "Analysing current branch..."

npm ci
npm run lint
npm run test

echo "Finished analyse."
