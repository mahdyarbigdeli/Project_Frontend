FROM node:latest as build
RUN apt-get update && apt-get install -y git

WORKDIR /app

COPY . .
COPY package.json  ./
RUN rm -rf .env
COPY ./devops/.env-dev /app/.env

RUN cat .env
RUN npm install --legacy-peer-deps

RUN npm run build

RUN ls
EXPOSE 3000
CMD npm run start
