FROM node:11

WORKDIR /usr/src/client

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 4000

CMD ["npm", "start"]
