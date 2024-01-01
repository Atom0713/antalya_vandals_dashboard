FROM node:21.5-alpine as builder
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
COPY . ./

CMD ["npm", "start"]