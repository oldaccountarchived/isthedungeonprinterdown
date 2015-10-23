FROM node:0.12.7-onbuild
COPY . /usr/src/isthedungeonprinterdown
WORKDIR /usr/src/isthedungeonprinterdown
EXPOSE 3000
CMD ["node","server.js"]
