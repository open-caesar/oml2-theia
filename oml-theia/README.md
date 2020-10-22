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

```
yarn run v1.22.5
$ cd oml-sprotty && yarn clean && yarn build && cd .. && yarn theia clean && yarn theia build
$ rimraf lib
$ tsc && yarn lint
$ tslint -c ./tslint.json --project ./tsconfig.json
no-use-before-declare is deprecated. Since TypeScript 2.9. Please use the built-in compiler checks instead.
$ /opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/.bin/theia clean
$ /opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/.bin/theia build
Hash: 535c17c2ef126e417604
Version: webpack 4.21.0
Time: 17661ms
Built at: 10/22/2020 11:31:17 AM
                                 Asset      Size  Chunks                    Chunk Names
0a32a80243e05284a5d741c5dc093f31.woff2  23.8 KiB          [emitted]         
  e817279537a0417d042f62fbb1b99eea.gif  43.1 KiB          [emitted]         
af7ae505a9eed503f8b8e6982036873e.woff2  75.4 KiB          [emitted]         
 fee66e712a8a08eef5805a46892932ad.woff  95.7 KiB          [emitted]         
  b06871f281fee6b241d60582ae9369b9.ttf   162 KiB          [emitted]         
  912ec66d7572ff821749319396470bde.svg   434 KiB          [emitted]  [big]  
  674f50d287a8c48dc19ba404d20fe713.eot   162 KiB          [emitted]         
e19892df121e7f85c61754c54bbb7951.woff2  48.6 KiB          [emitted]         
11d1a2390613abf202bfd2ebbd5c4500.woff2  88.6 KiB          [emitted]         
de59a97248b44599e6747a27a943f738.woff2  19.8 KiB          [emitted]         
                             bundle.js  1.73 MiB       0  [emitted]  [big]  main
                         bundle.js.map  4.74 MiB       0  [emitted]         main
Entrypoint main [big] = bundle.js bundle.js.map
 [31] (webpack)/buildin/global.js 509 bytes {0} [built]
[260] ./src-gen/frontend/index.js 1.39 KiB {0} [built]
[440] ./node_modules/@theia/core/src/common/keyboard/layouts sync ^\.\/.*\.json$ 1.39 KiB {0} [built]
[623] ./node_modules/react-virtualized/dist/es/index.js + 66 modules 324 KiB {0} [built]
      |    67 modules
    + 620 hidden modules

WARNING in ./node_modules/reflect-metadata/Reflect.js
Module Warning (from ./node_modules/source-map-loader/index.js):
(Emitted value instead of an instance of Error) Cannot find source file 'Reflect.ts': Error: Can't resolve './Reflect.ts' in '/opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/reflect-metadata'
 @ ./src-gen/frontend/index.js 3:0-27

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  912ec66d7572ff821749319396470bde.svg (434 KiB)
  bundle.js (1.73 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (1.73 MiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

Done in 22.31s.

```

### 3)

```
yarn refresh:electron
```

```
yarn run v1.22.5
$ yarn refresh && cd electron-app && yarn prepare
$ cd oml-sprotty && yarn clean && yarn build && cd .. && yarn theia clean && yarn theia build
$ rimraf lib
$ tsc && yarn lint
$ tslint -c ./tslint.json --project ./tsconfig.json
no-use-before-declare is deprecated. Since TypeScript 2.9. Please use the built-in compiler checks instead.
$ /opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/.bin/theia clean
$ /opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/.bin/theia build
Hash: 535c17c2ef126e417604
Version: webpack 4.21.0
Time: 4749ms
Built at: 10/22/2020 11:33:32 AM
                                 Asset      Size  Chunks                    Chunk Names
0a32a80243e05284a5d741c5dc093f31.woff2  23.8 KiB          [emitted]         
  e817279537a0417d042f62fbb1b99eea.gif  43.1 KiB          [emitted]         
af7ae505a9eed503f8b8e6982036873e.woff2  75.4 KiB          [emitted]         
 fee66e712a8a08eef5805a46892932ad.woff  95.7 KiB          [emitted]         
  b06871f281fee6b241d60582ae9369b9.ttf   162 KiB          [emitted]         
  912ec66d7572ff821749319396470bde.svg   434 KiB          [emitted]  [big]  
  674f50d287a8c48dc19ba404d20fe713.eot   162 KiB          [emitted]         
e19892df121e7f85c61754c54bbb7951.woff2  48.6 KiB          [emitted]         
11d1a2390613abf202bfd2ebbd5c4500.woff2  88.6 KiB          [emitted]         
de59a97248b44599e6747a27a943f738.woff2  19.8 KiB          [emitted]         
                             bundle.js  1.73 MiB       0  [emitted]  [big]  main
                         bundle.js.map  4.74 MiB       0  [emitted]         main
Entrypoint main [big] = bundle.js bundle.js.map
 [31] (webpack)/buildin/global.js 509 bytes {0} [built]
[260] ./src-gen/frontend/index.js 1.39 KiB {0} [built]
[440] ./node_modules/@theia/core/src/common/keyboard/layouts sync ^\.\/.*\.json$ 1.39 KiB {0} [built]
[623] ./node_modules/react-virtualized/dist/es/index.js + 66 modules 324 KiB {0} [built]
      |    67 modules
    + 620 hidden modules

WARNING in ./node_modules/reflect-metadata/Reflect.js
Module Warning (from ./node_modules/source-map-loader/index.js):
(Emitted value instead of an instance of Error) Cannot find source file 'Reflect.ts': Error: Can't resolve './Reflect.ts' in '/opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/reflect-metadata'
 @ ./src-gen/frontend/index.js 3:0-27

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  912ec66d7572ff821749319396470bde.svg (434 KiB)
  bundle.js (1.73 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (1.73 MiB)
      bundle.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

$ theia build --mode development
Hash: 90aadf99c634bf184537
Version: webpack 4.21.0
Time: 9816ms
Built at: 10/22/2020 11:33:42 AM
                                  Asset      Size  Chunks             Chunk Names
                        5.bundle.js.map  19.4 KiB       5  [emitted]  
   e817279537a0417d042f62fbb1b99eea.gif  43.1 KiB          [emitted]  
 e19892df121e7f85c61754c54bbb7951.woff2  48.6 KiB          [emitted]  
 11d1a2390613abf202bfd2ebbd5c4500.woff2  88.6 KiB          [emitted]  
 af7ae505a9eed503f8b8e6982036873e.woff2  75.4 KiB          [emitted]  
 0a32a80243e05284a5d741c5dc093f31.woff2  23.8 KiB          [emitted]  
 de59a97248b44599e6747a27a943f738.woff2  19.8 KiB          [emitted]  
   674f50d287a8c48dc19ba404d20fe713.eot   162 KiB          [emitted]  
   912ec66d7572ff821749319396470bde.svg   434 KiB          [emitted]  
   b06871f281fee6b241d60582ae9369b9.ttf   162 KiB          [emitted]  
  fee66e712a8a08eef5805a46892932ad.woff  95.7 KiB          [emitted]  
  f8f821a66b20e5801e35df5ec4565b30.wasm   583 KiB          [emitted]  
                            0.bundle.js  34.4 KiB       0  [emitted]  
                            1.bundle.js  31.1 KiB       1  [emitted]  
                            2.bundle.js   122 KiB       2  [emitted]  
                            3.bundle.js  21.4 KiB       3  [emitted]  
                            4.bundle.js   121 KiB       4  [emitted]  
                            5.bundle.js  29.3 KiB       5  [emitted]  
                            6.bundle.js  23.1 KiB       6  [emitted]  
                            7.bundle.js  22.3 KiB       7  [emitted]  
                            8.bundle.js   713 KiB       8  [emitted]  
                            9.bundle.js  51.9 KiB       9  [emitted]  
                           10.bundle.js  31.5 KiB      10  [emitted]  
                           11.bundle.js   484 KiB      11  [emitted]  
                           12.bundle.js  47.4 KiB      12  [emitted]  
                           13.bundle.js   164 KiB      13  [emitted]  
                           14.bundle.js  14.9 KiB      14  [emitted]  
                           15.bundle.js  98.1 KiB      15  [emitted]  
                           16.bundle.js  15.4 KiB      16  [emitted]  
                           17.bundle.js  61.1 KiB      17  [emitted]  
                           18.bundle.js  44.8 KiB      18  [emitted]  
                           19.bundle.js    18 KiB      19  [emitted]  
                           20.bundle.js   930 KiB      20  [emitted]  
                           21.bundle.js   357 KiB      21  [emitted]  
                           22.bundle.js   278 KiB      22  [emitted]  
                           23.bundle.js   144 KiB      23  [emitted]  
                           24.bundle.js  60.9 KiB      24  [emitted]  
                           25.bundle.js  23.9 KiB      25  [emitted]  
                           26.bundle.js  23.2 KiB      26  [emitted]  
                           27.bundle.js  11.6 KiB      27  [emitted]  
                           28.bundle.js  6.64 KiB      28  [emitted]  
                           29.bundle.js  6.47 KiB      29  [emitted]  
                           30.bundle.js  10.9 KiB      30  [emitted]  
                           31.bundle.js  9.35 KiB      31  [emitted]  
                           32.bundle.js  13.4 KiB      32  [emitted]  
                              bundle.js  4.82 MiB    main  [emitted]  main
                           33.bundle.js  13.4 KiB      33  [emitted]  
                           34.bundle.js  13.4 KiB      34  [emitted]  
                           35.bundle.js  13.4 KiB      35  [emitted]  
                           36.bundle.js  13.4 KiB      36  [emitted]  
                           37.bundle.js  13.4 KiB      37  [emitted]  
                           38.bundle.js    14 KiB      38  [emitted]  
                           39.bundle.js    14 KiB      39  [emitted]  
                           40.bundle.js  13.4 KiB      40  [emitted]  
                           41.bundle.js  13.4 KiB      41  [emitted]  
                           42.bundle.js  13.4 KiB      42  [emitted]  
                           43.bundle.js  13.4 KiB      43  [emitted]  
                           44.bundle.js  13.4 KiB      44  [emitted]  
                           45.bundle.js  13.4 KiB      45  [emitted]  
                           46.bundle.js   135 KiB      46  [emitted]  
                           47.bundle.js   579 KiB      47  [emitted]  
                           48.bundle.js   498 KiB      48  [emitted]  
                           49.bundle.js   100 KiB      49  [emitted]  
                           50.bundle.js   173 KiB      50  [emitted]  
                           51.bundle.js   178 KiB      51  [emitted]  
                           52.bundle.js  89.4 KiB      52  [emitted]  
                           53.bundle.js  75.2 KiB      53  [emitted]  
                           54.bundle.js   105 KiB      54  [emitted]  
                           55.bundle.js   148 KiB      55  [emitted]  
                           56.bundle.js  43.6 KiB      56  [emitted]  
                           57.bundle.js  27.7 KiB      57  [emitted]  
                           58.bundle.js  22.1 KiB      58  [emitted]  
                           59.bundle.js  25.5 KiB      59  [emitted]  
                           60.bundle.js  16.8 KiB      60  [emitted]  
                           61.bundle.js  33.2 KiB      61  [emitted]  
                           62.bundle.js  34.2 KiB      62  [emitted]  
                           63.bundle.js  21.5 KiB      63  [emitted]  
                           64.bundle.js  24.9 KiB      64  [emitted]  
                        0.bundle.js.map  43.2 KiB       0  [emitted]  
                        1.bundle.js.map    25 KiB       1  [emitted]  
                        2.bundle.js.map   102 KiB       2  [emitted]  
                        3.bundle.js.map  16.3 KiB       3  [emitted]  
                        4.bundle.js.map   115 KiB       4  [emitted]  
   cf2aabacdc2b3a5768b03545cb1d8330.svg    21 KiB          [emitted]  
                        6.bundle.js.map  17.7 KiB       6  [emitted]  
                        7.bundle.js.map  16.5 KiB       7  [emitted]  
                        8.bundle.js.map   767 KiB       8  [emitted]  
                        9.bundle.js.map  54.9 KiB       9  [emitted]  
                       10.bundle.js.map  29.3 KiB      10  [emitted]  
                       11.bundle.js.map   578 KiB      11  [emitted]  
                       12.bundle.js.map  59.2 KiB      12  [emitted]  
                       13.bundle.js.map   164 KiB      13  [emitted]  
                       14.bundle.js.map  15.3 KiB      14  [emitted]  
                       15.bundle.js.map  89.5 KiB      15  [emitted]  
                       16.bundle.js.map  36.5 KiB      16  [emitted]  
                       17.bundle.js.map  67.6 KiB      17  [emitted]  
                       18.bundle.js.map  38.1 KiB      18  [emitted]  
                       19.bundle.js.map  15.7 KiB      19  [emitted]  
                       20.bundle.js.map  1.08 MiB      20  [emitted]  
                       21.bundle.js.map   193 KiB      21  [emitted]  
                       22.bundle.js.map   293 KiB      22  [emitted]  
                       23.bundle.js.map   156 KiB      23  [emitted]  
                       24.bundle.js.map  48.3 KiB      24  [emitted]  
                       25.bundle.js.map  17.6 KiB      25  [emitted]  
                       26.bundle.js.map  18.5 KiB      26  [emitted]  
                       27.bundle.js.map  8.34 KiB      27  [emitted]  
                       28.bundle.js.map  4.74 KiB      28  [emitted]  
                       29.bundle.js.map  5.04 KiB      29  [emitted]  
                       30.bundle.js.map  7.86 KiB      30  [emitted]  
                       31.bundle.js.map  16.1 KiB      31  [emitted]  
                       32.bundle.js.map  15.9 KiB      32  [emitted]  
                          bundle.js.map  5.03 MiB    main  [emitted]  main
                       33.bundle.js.map  15.9 KiB      33  [emitted]  
                       34.bundle.js.map  15.9 KiB      34  [emitted]  
                       35.bundle.js.map  15.9 KiB      35  [emitted]  
                       36.bundle.js.map  15.9 KiB      36  [emitted]  
                       37.bundle.js.map  15.9 KiB      37  [emitted]  
                       38.bundle.js.map  16.4 KiB      38  [emitted]  
                       39.bundle.js.map  16.4 KiB      39  [emitted]  
                       40.bundle.js.map  15.9 KiB      40  [emitted]  
                       41.bundle.js.map  15.9 KiB      41  [emitted]  
                       42.bundle.js.map  15.9 KiB      42  [emitted]  
                       43.bundle.js.map  15.9 KiB      43  [emitted]  
                       44.bundle.js.map  15.9 KiB      44  [emitted]  
                       45.bundle.js.map  15.9 KiB      45  [emitted]  
                       46.bundle.js.map   126 KiB      46  [emitted]  
                       47.bundle.js.map  1010 KiB      47  [emitted]  
                       48.bundle.js.map   478 KiB      48  [emitted]  
                       49.bundle.js.map  79.8 KiB      49  [emitted]  
                       50.bundle.js.map   155 KiB      50  [emitted]  
                       51.bundle.js.map   144 KiB      51  [emitted]  
                       52.bundle.js.map  75.6 KiB      52  [emitted]  
                       53.bundle.js.map  60.1 KiB      53  [emitted]  
                       54.bundle.js.map    79 KiB      54  [emitted]  
                       55.bundle.js.map   160 KiB      55  [emitted]  
                       56.bundle.js.map  24.7 KiB      56  [emitted]  
                       57.bundle.js.map  20.8 KiB      57  [emitted]  
                       58.bundle.js.map  17.4 KiB      58  [emitted]  
                       59.bundle.js.map  20.7 KiB      59  [emitted]  
                       60.bundle.js.map  12.8 KiB      60  [emitted]  
                       61.bundle.js.map  31.1 KiB      61  [emitted]  
                       62.bundle.js.map  28.9 KiB      62  [emitted]  
                       63.bundle.js.map  17.2 KiB      63  [emitted]  
                       64.bundle.js.map  15.8 KiB      64  [emitted]  
 vs/language/css/monaco.contribution.js  2.13 KiB          [emitted]  
vs/language/html/monaco.contribution.js  2.16 KiB          [emitted]  
           vs/language/html/htmlMode.js    23 KiB          [emitted]  
             vs/language/css/cssMode.js  25.8 KiB          [emitted]  
           vs/editor/editor.main.nls.js  35.6 KiB          [emitted]  
     vs/editor/editor.main.nls.zh-cn.js  34.2 KiB          [emitted]  
     vs/editor/editor.main.nls.zh-tw.js  34.3 KiB          [emitted]  
        vs/editor/editor.main.nls.de.js  41.3 KiB          [emitted]  
        vs/editor/editor.main.nls.es.js  41.8 KiB          [emitted]  
        vs/editor/editor.main.nls.fr.js  45.2 KiB          [emitted]  
        vs/editor/editor.main.nls.it.js  43.5 KiB          [emitted]  
        vs/editor/editor.main.nls.ja.js  45.9 KiB          [emitted]  
        vs/editor/editor.main.nls.ko.js  41.9 KiB          [emitted]  
        vs/editor/editor.main.nls.ru.js    63 KiB          [emitted]  
                           vs/loader.js  77.8 KiB          [emitted]  
                       vs/loader.js.map    88 KiB          [emitted]  
         vs/language/html/htmlWorker.js   164 KiB          [emitted]  
              vs/editor/editor.main.css   255 KiB          [emitted]  
           vs/base/worker/workerMain.js   489 KiB          [emitted]  
           vs/language/css/cssWorker.js   555 KiB          [emitted]  
       vs/base/worker/workerMain.js.map   661 KiB          [emitted]  
               vs/editor/editor.main.js  5.19 MiB          [emitted]  
           vs/editor/editor.main.js.map  8.03 MiB          [emitted]  
Entrypoint main = bundle.js bundle.js.map
[../oml/lib/frontend/diagram/di.config.js] 3.33 KiB {46} [built]
[../oml/lib/frontend/diagram/oml-diagram-language-client.js] 2.49 KiB {46} [built]
[../oml/lib/frontend/diagram/oml-diagram-manager.js] 7.47 KiB {46} [built]
[../oml/lib/frontend/diagram/theme-manager.js] 1.95 KiB {46} [built]
[../oml/lib/frontend/language/dynamic-commands.js] 2.98 KiB {46} [built]
[../oml/lib/frontend/language/frontend-extension.js] 3.34 KiB {46} [built]
[../oml/lib/frontend/language/oml-commands.js] 2.34 KiB {46} [built]
[../oml/lib/frontend/language/oml-language-client-contribution.js] 3.31 KiB {46} [built]
[../oml/lib/frontend/language/oml-monaco-language.js] 745 bytes {46} [built]
[../oml/lib/frontend/language/oml-textmate-contribution.js] 4.1 KiB {46} [built]
[../oml/lib/frontend/monaco/oml-monaco-editor-provider.js] 5.98 KiB {46} [built]
[../oml/lib/frontend/widgets/oml-diagram-widget.js] 3.24 KiB {46} [built]
[./src-gen/frontend/index.js] 4.58 KiB {main} [built]
[electron] external "electron" 42 bytes {main} [built]
[path] external "path" 42 bytes {main} [built]
    + 1562 hidden modules

WARNING in ../node_modules/vscode-textmate/release/main.js 14:15-27
Critical dependency: the request of a dependency is an expression
 @ ../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js
 @ ../node_modules/@theia/monaco/lib/browser/textmate/index.js
 @ ../node_modules/@theia/json/lib/browser/json-frontend-module.js
 @ ./src-gen/frontend/index.js

WARNING in ../node_modules/vscode-textmate/release/main.js
Module Warning (from ../node_modules/source-map-loader/index.js):
(Emitted value instead of an instance of Error) Cannot find SourceMap '_suffix.js.map': Error: Can't resolve './_suffix.js.map' in '/opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/vscode-textmate/release'
 @ ../node_modules/@theia/monaco/lib/browser/textmate/monaco-textmate-service.js 73:24-50
 @ ../node_modules/@theia/monaco/lib/browser/textmate/index.js
 @ ../node_modules/@theia/json/lib/browser/json-frontend-module.js
 @ ./src-gen/frontend/index.js

WARNING in ../node_modules/typescript-language-server/lib/commands.js
Module Warning (from ../node_modules/source-map-loader/index.js):
(Emitted value instead of an instance of Error) Cannot find source file '../src/commands.ts': Error: Can't resolve '../src/commands.ts' in '/opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/typescript-language-server/lib'
 @ ../node_modules/@theia/typescript/lib/browser/typescript-frontend-contribution.js 93:17-67
 @ ../node_modules/@theia/typescript/lib/browser/typescript-frontend-module.js
 @ ./src-gen/frontend/index.js

WARNING in ../node_modules/reflect-metadata/Reflect.js
Module Warning (from ../node_modules/source-map-loader/index.js):
(Emitted value instead of an instance of Error) Cannot find source file 'Reflect.ts': Error: Can't resolve './Reflect.ts' in '/opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/reflect-metadata'
 @ ./src-gen/frontend/index.js 3:0-27

Done in 20.16s.
```

## Run with a socket server

```
yarn start:electron-socket-server
```

```
yarn run v1.22.5
$ cd electron-app && yarn start --LSP_PORT=5009
$ theia start --LSP_PORT=5009
/opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/electron/dist/electron --LSP_PORT=5009 /opt/local/github.opencaesar/o: symbol lookup error: /opt/local/github.opencaesar/oml-theia/oml-theia/node_modules/native-keymap/build/Release/keymapping.node: undefined symbol: _ZN2v816FunctionTemplate3NewEPNS_7IsolateEPFvRKNS_20FunctionCallbackInfoINS_5ValueEEEENS_5LocalIS4_EENSA_INS_9SignatureEEEiNS_19ConstructorBehaviorENS_14SideEffectTypeE
Done in 0.90s.
```