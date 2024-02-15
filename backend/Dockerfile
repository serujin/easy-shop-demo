FROM node:21-alpine3.18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY index.js ./

RUN npm ci

EXPOSE 3000

COPY database.json .

CMD npm run start