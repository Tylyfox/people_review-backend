FROM node:lts-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

RUN apk add --no-cache curl

COPY . .
COPY tsconfig.json tsconfig.json

CMD ["yarn", "start:dev"]