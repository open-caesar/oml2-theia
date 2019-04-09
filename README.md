# OML Theia Extension

[![Gitpod - Code Now](https://img.shields.io/badge/Gitpod-code%20now-blue.svg?longCache=true)](https://gitpod.io#https://github.com/opencaesar/oml-theia)
[![Build Status](https://travis-ci.org/opencaesar/oml-theia.svg?branch=master)](https://travis-ci.org/opencaesar/oml-theia)

An extension for the Theia IDE to support the [OML language server](https://github.com/opencaesar/oml)

## Getting started

Install [nvm](https://github.com/creationix/nvm#install-script).

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash

Install npm and node.

nvm install 8
nvm use 8

Install yarn.

npm install -g yarn

## Clone
```
  git clone --recursive https://github.com/opencaesar/oml-theia.git
```

## Running the browser application
```
cd oml-theia && \
cd io.opencaesar.oml.theia.parent && \
yarn rebuild:browser && \
cd browser-app && \
yarn start
```

Open http://localhost:3000 in the browser.

## Running the Electron application
```
cd oml-theia && \
cd io.opencaesar.oml.theia.parent && \
yarn rebuild:electron && \
cd electron-app && \
yarn start
```

## Release

Replace \<version\> by the version, e.g., 1.2
```
  cd oml-theia
  git tag -a v<version> -m "v<version>"
  git push origin v<version>
```

