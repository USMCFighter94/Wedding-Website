FROM postgres
COPY init.sql /docker-entrypoint-initdb.d/10-init.sql

FROM node:11.13-alpine

WORKDIR /opt/app

ENV PORT=80

COPY package.json .
RUN npm install --quiet --production

COPY . .
