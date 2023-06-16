FROM node:19

WORKDIR /usr/src/app
COPY package*.json ./
COPY ./public ./public
COPY ./cli ./cli
COPY ./src ./src

CMD npm install && \
    npm run start