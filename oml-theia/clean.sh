#!/bin/bash

# clean root
rm -r node_modules
rm lerna-debug.log

# clean brower-app
rm browser-app/webpack.config.js
rm -r browser-app/lib
rm -r browser-app/node_modules
rm -r browser-app/src-gen

# clean electron-app
rm electron-app/webpack.config.js
rm -r electron-app/lib
rm -r electron-app/node_modules
rm -r electron-app/src-gen

# clean oml
rm -r oml/build
rm -r oml/lib
rm -r oml/node_modules

# clean sprotty
rm -r oml-sprotty/lib
rm -r oml-sprotty/node_modules
