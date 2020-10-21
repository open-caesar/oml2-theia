# OML Theia

## Building.

Following [Theia's development prerequesites](https://github.com/eclipse-theia/theia/blob/master/doc/Developing.md#prerequisites) recommend using:

- Node.js >= 12.14.1 AND < 13.
  Preferably, use Node version 12.14.1, as it is the the recommended minimum version according to the framework's supported electron version.
- Yarn package manager v1.7.0

Note, there may be a build error:

```
FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
```

Following this [SO](https://stackoverflow.com/a/59572966/1009693), the following may help:

```
export NODE_OPTIONS="--max-old-space-size=8192"
```

## Development

```
yarn build:oml
yarn refresh
yarn refresh:electron
```

## Run with a socket server

```
yarn start:electron-socket-server
```