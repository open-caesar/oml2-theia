# OML Theia Extension

[![Build Status](https://travis-ci.org/opencaesar/oml-theia.svg?branch=master)](https://travis-ci.org/opencaesar/oml-theia)

A Theia IDE extension that supports [OML](https://opencaesar.github.io/oml-spec).

> IMPORTANT: We are no longer actively maintaining this repo (the Theia extension for OML) with the latest releases of the OML LSP server. The last supported OML version is 0.7.5. However, we are still actively maintaining the [VSCode extension for OML](https://github.com/opencaesar/oml-vscode), which provides similar functions, and works in the [VSCode](https://code.visualstudio.com/) (desktop) IDE and the [Gitpod](https://www.gitpod.io/) (web) IDE. If there is interest in maintaining a Theia IDE extension for OML, please contact [Maged Elaasar](mailto:melaasar@gmail.com) to discuss options.

## Getting started
Install [nvm](https://github.com/creationix/nvm#install-script).

```shell
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

Install npm and node.

```shell
  nvm install 8
  nvm use 8
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
Note: If you would like to have the latest version of the language server, you will need to clone the language server [here](https://github.com/opencaesar/oml) and follow the build instructions. Once you build the language server, drag the `oml-server-<version>.jar` file from `io.opencaesar.oml.parent/io.opencaesar.oml.dsl.ide.server/build/libs` to `oml-theia/oml/build` in this repository.

## Clean
If you have to clean the build artifacts, use:
```shell
  ./clean.sh
```

## Run the browser application
```shell
  ./start-browser.sh
```
Open http://localhost:3000 in the browser.

## Run the electron application
```shell
  ./start-electron.sh
```
The electron UI should open up in a window
