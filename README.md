# OML Theia Extension

[![Gitpod - Code Now](https://img.shields.io/badge/Gitpod-code%20now-blue.svg?longCache=true)](https://gitpod.io#https://github.com/opencaesar/oml-theia)
[![Build Status](https://travis-ci.org/opencaesar/oml-theia.svg?branch=master)](https://travis-ci.org/opencaesar/oml-theia)

An extension for the Theia IDE to support the [OML language server](https://github.com/opencaesar/oml)

## Getting started

Install [nvm](https://github.com/creationix/nvm#install-script).

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Install npm and node.

```shell
nvm install 10
nvm use 10
```

Install yarn.

```shell
npm install -g yarn
```

## Clone
```shell
  git clone --recursive https://github.com/opencaesar/oml-theia.git
```

## Running the browser application
```shell
cd oml-theia && \
cd io.opencaesar.oml.theia && \
yarn && \
yarn rebuild:browser && \
cd browser-app && \
yarn start
```

Open http://localhost:3000 in the browser.

## Running the Electron application
```shell
cd oml-theia && \
cd io.opencaesar.oml.theia && \
yarn rebuild:electron && \
cd electron-app && \
yarn start
```

## Release

Replace \<version\> by the version, e.g., 1.2
```shell
  cd oml-theia
  git tag -a v<version> -m "v<version>"
  git push origin v<version>
```

