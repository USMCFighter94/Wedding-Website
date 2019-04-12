FROM node:11.13-alpine

WORKDIR /opt/app

ENV PORT=80

COPY package.json .

RUN npm install --quiet --production
