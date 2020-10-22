# OML Theia

## Dependencies

### `devDepenencies`

Is it OK to use `latest`?

### `dependencies` 

Use specific versions.

- [Theia releases](https://github.com/eclipse-theia/theia/releases)
- [Sprotty releases](https://github.com/eclipse/sprotty/releases)
- [Sprotty-theia releases](https://github.com/eclipse/sprotty-theia/releases)

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

### 1)

```
yarn build:oml
```

### 2)

```
yarn refresh
```

See problems: [yarn-refresh.log](yarn-refresh.log)

### 3)

```
yarn refresh:electron
```

See problems [yarn-refresh:electron.log](yarn-refresh:electron.log)

## Run with a socket server

```
yarn start:electron-socket-server
```

Fails:

```
yarn run v1.22.5
$ cd electron-app && yarn start --LSP_PORT=5009
$ theia start --LSP_PORT=5009
/opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/electron/dist/electron --LSP_PORT=5009 /opt/local/github.opencaesar/oml-theia/oml-theia/electron-app/src-gen/frontend/electron-main.js: symbol lookup error: /opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/nsfw/build/Release/nsfw.node: undefined symbol: _ZN2v816FunctionTemplate3NewEPNS_7IsolateEPFvRKNS_20FunctionCallbackInfoINS_5ValueEEEENS_5LocalIS4_EENSA_INS_9SignatureEEEiNS_19ConstructorBehaviorENS_14SideEffectTypeE
Done in 1.31s.
```