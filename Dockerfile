FROM node:0.12.7-onbuild
COPY . /usr/src/isthedungeonprinterdown
WORKDIR /usr/src/isthedungeonprinterdown
RUN npm install
RUN npm install -g bower
RUN bower install
EXPOSE 3000
CMD ["node","server.js"]
