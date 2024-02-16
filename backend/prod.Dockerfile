FROM node:21-alpine3.18

WORKDIR /app

COPY .env ./
COPY package.json ./
COPY package-lock.json ./
COPY src ./src

RUN npm ci

EXPOSE 3000

COPY database.json .

RUN npm run build

CMD npm run start