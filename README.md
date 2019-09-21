# OML Theia Extension

[![Gitpod - Code Now](https://img.shields.io/badge/Gitpod-code%20now-blue.svg?longCache=true)](https://gitpod.io#https://github.com/opencaesar/oml-theia)
[![Build Status](https://travis-ci.org/opencaesar/oml-theia.svg?branch=master)](https://travis-ci.org/opencaesar/oml-theia)

A Theia IDE extension to support [OML](https://opencaesar.github.io/oml-spec)

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
  cd oml-theia
```

## Build
```shell
  cd oml-theia && \
  yarn
```

## Run the browser application
```shell
  cd oml-theia && \
  yarn rebuild:browser && \
  cd browser-app && \
  yarn start
```

If you would like to run the latest version of the language server, you will need to clone the language server [here](https://github.com/opencaesar/oml-server) and follow the build instructions. Once you build the language server, drag the `oml-server-<version>.jar` file from `oml-server/io.opencaesar.oml.dsl.ide/build/libs` to `oml-theia/oml/build` in this repository.

Open http://localhost:3000 in the browser.

## Run the electron application
```shell
  cd oml-theia && \
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

