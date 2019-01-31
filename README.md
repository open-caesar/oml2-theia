# OML Theia Extension

[![Gitpod - Code Now](https://img.shields.io/badge/Gitpod-code%20now-blue.svg?longCache=true)](https://gitpod.io#https://github.com/open-caesar/oml-theia)
[![Build Status](https://travis-ci.org/open-caesar/oml-theia.svg?branch=master)](https://travis-ci.org/open-caesar/oml-theia)
[![Open questions](https://img.shields.io/badge/Open-questions-lightgrey.svg?style=flat-curved)](https://github.com/open-caesar/oml-theia/labels/question)
[![Open bugs](https://img.shields.io/badge/Open-bugs-red.svg?style=flat-curved)](https://github.com/open-caesar/oml-theia/labels/bug)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-yellowgreen.svg?style=flat-curved)](https://github.com/open-caesar/oml-theia/labels/help%20wanted)

An extension for the Theia IDE to support the [OML language server](https://github.com/open-caesar/oml-language-server)

## Getting started

Install [nvm](https://github.com/creationix/nvm#install-script).

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.5/install.sh | bash

Install npm and node.

nvm install 8
nvm use 8

Install yarn.

npm install -g yarn

Clone the code

git clone https://github.com/open-caesar/oml-theia.git

Change directory

cd oml-theia/open.caesar.oml.theia.parent/

## Running the browser application

yarn rebuild:browser && \
cd browser-app && \
yarn start

Open http://localhost:3000 in the browser.

## Running the Electron application

yarn rebuild:electron && \
cd electron-app && \
yarn start
