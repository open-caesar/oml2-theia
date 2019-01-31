FROM node:8-stretch

ARG version=latest

WORKDIR /home/theia

COPY . /home/theia

ADD $version.package.json ./package.json

RUN yarn --cache-folder ./ycache && rm -rf ./ycache

EXPOSE 3000

ENV SHELL /bin/bash

CMD cd browser-app && yarn start /home/project --hostname=0.0.0.0