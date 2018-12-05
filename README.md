# OML2 - Theia

[![Gitpod - Code Now](https://img.shields.io/badge/Gitpod-code%20now-blue.svg?longCache=true)](https://gitpod.io#https://github.com/open-caesar/oml2-theia)
[![Build Status](https://travis-ci.org/open-caesar/oml2-theia.svg?branch=master)](https://travis-ci.org/open-caesar/oml2-theia)
[![Open questions](https://img.shields.io/badge/Open-questions-lightgrey.svg?style=flat-curved)](https://github.com/open-caesar/oml2-theia/labels/question)
[![Open bugs](https://img.shields.io/badge/Open-bugs-red.svg?style=flat-curved)](https://github.com/open-caesar/oml2-theia/labels/bug)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-yellowgreen.svg?style=flat-curved)](https://github.com/open-caesar/oml2-theia/labels/help%20wanted)

An extension for the Theia IDE to support the [OML2 language server](https://github.com/open-caesar/oml2-language-server)

### Build

Requirements: Python 2.x, Java 8.x, node 8.x, yarn >1.0.2, a C++ compiler, curl, unzip.

```bash
git clone https://github.com/open-caesar/oml2-theia.git && \
cd oml2-theia/open.caesar.oml2.theia.parent/ && \
yarn
```

### Run

The browser version:
```bash
yarn rebuild:browser && \
cd oml2-app && \
yarn start
```
Then point your browser to `http://localhost:3000`

The Electron version:
```bash
yarn rebuild:electron && \
cd oml2-app-electron && \
yarn start
```
