# OML Theia Extension

[![Build Status](https://travis-ci.org/opencaesar/oml-theia.svg?branch=master)](https://travis-ci.org/opencaesar/oml-theia)

A Theia IDE extension that supports [OML](https://opencaesar.github.io/oml-spec)

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

Install (only on MacOs)

If you don't have Xcode command line tools, or have an incomplete/old version, install them by following instructions in this [blog article](https://medium.com/flawless-app-stories/gyp-no-xcode-or-clt-version-detected-macos-catalina-anansewaa-38b536389e8d)

Install (only on Linux)

```shell
   apt-get install libxkbfile1 libxkbfile-dev
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

If you would like to run the latest version of the language server, you will need to clone the language server [here](https://github.com/opencaesar/oml) and follow the build instructions. Once you build the language server, drag the `oml-server-<version>.jar` file from `io.opencaesar.oml.parent/io.opencaesar.oml.dsl.ide.server/build/libs` to `oml-theia/oml/build` in this repository.

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
  git tag -a <version> -m "<version>"
  git push origin <version>
```

