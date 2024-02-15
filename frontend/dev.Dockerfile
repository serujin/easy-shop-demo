FROM node:21-alpine3.18

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY app ./app
COPY components ./components
COPY lib ./lib
COPY models ./models
COPY public ./public
COPY next.config.mjs .
COPY tsconfig.json .

ENV NEXT_TELEMETRY_DISABLED 1

CMD npm run dev