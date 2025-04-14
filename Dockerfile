FROM node:latest as build

RUN apt-get update && apt-get install -y git


WORKDIR /app

COPY package.json ./

RUN npm install --legacy-peer-deps \
    && npm install @paypal/react-paypal-js --legacy-peer-deps


COPY . .


RUN rm -rf .env
COPY ./devops/.env-dev /app/.env

RUN cat .env


RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
