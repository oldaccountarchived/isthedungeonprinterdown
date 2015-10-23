FROM node:0.12.7-onbuild
RUN npm install
EXPOSE 3000
CMD ["node","server.js"]
