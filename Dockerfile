FROM node:10-alpine

WORKDIR /opt/app

ENV PORT=80

FROM postgres
COPY init.sql /docker-entrypoint-initdb.d/10-init.sql

COPY package.json .
RUN echo 'npm install --quiet --production' >> /boot.sh

COPY . .

CMD sh /boot.sh
