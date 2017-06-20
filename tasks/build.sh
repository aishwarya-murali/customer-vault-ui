#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Print shell input lines as they are read
set -v

# Clean dist and package folder
rm -rf dist
rm -rf artifact

mkdir dist
mkdir artifact
mkdir -p src/etc

# Get package name and version
PACKAGE_NAME=`node -e "console.log(require('./package.json').name);"`
PACKAGE_VERSION=`node -e "console.log(require('./package.json').version);"`

# If not running in JENKINS
if [ -z ${JENKINS_PROCESS} ]; then
  # Install all dependencies
  npm install
else
  echo 'Skipping npm install in build script since running in JENKINS'
fi

# Shrinkwrap
npm shrinkwrap

# Build assets
npm run build:webpack

# Git revision
npm run git:version -- dist/VERSION.json

# Copy package.json
cp package.json dist/

# If not running in JENKINS
if [ -z ${JENKINS_PROCESS} ]; then
  # Install production dependencies
  npm install --production --prefix dist
else
  # Install production dependencies
  npm install --production --prefix dist --userconfig=.npmrc
fi

# Transpile
npm run babel -- src --out-dir dist/src/ --source-maps true
npm run babel -- config --out-dir dist/config --source-maps true

# Copy css and json files
find src -name '*.css' -exec rsync -R '{}' dist ";"
find src -name '*.json' -exec rsync -R '{}' dist ";"

# Create Tar
tar -czf artifact/${PACKAGE_NAME}-${PACKAGE_VERSION}.tar.gz -C dist .
