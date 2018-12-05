FROM node:8.9
MAINTAINER "JPL"

LABEL name="oml2"
LABEL version="0.1"

RUN echo 'deb http://httpredir.debian.org/debian/ jessie-backports main' >> /etc/apt/sources.list \
  && apt-get update \
  && apt-get install -y --no-install-recommends -t jessie-backports \
  openjdk-8-jre-headless \
  ca-certificates-java \
  openjdk-8-jdk \
  unzip \
  && update-java-alternatives -s java-1.8.0-openjdk-amd64

RUN npm install -g yarn@1.0.2

# yeoman issue 282
RUN chmod -R 777 /usr/local && useradd -ms /bin/bash oml2
USER oml2
WORKDIR /home/oml2

RUN git clone --recursive https://github.com/open-caesar/oml2-theia && \
  cd oml2-theia/open.caesar.oml2.theia.parent && \
  yarn 
	
EXPOSE 3000
CMD cd oml2-theia/open.caesar.oml2.theia.parent/oml2-app && yarn start