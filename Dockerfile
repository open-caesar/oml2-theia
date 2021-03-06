FROM node:10-jessie

USER root:root

ARG version=latest

RUN apt update && apt upgrade -y && apt install libx11-dev libxkbfile-dev -y

WORKDIR /home/theia

COPY . /home/theia

# ADD $version.package.json ./package.json

RUN cd oml-theia && yarn --cache-folder ./ycache && rm -rf ./ycache

EXPOSE 3000

ENV SHELL /bin/bash

CMD cd oml-theia/browser-app && yarn start /home/project --hostname=0.0.0.0
