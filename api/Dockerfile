FROM node:11

WORKDIR /usr/src/api

COPY *.json ./

RUN npm install -g json-server

RUN npm install

EXPOSE 4002

# ENTRYPOINT ["json-server","--port","4002","--watch","db.json","--host", "0.0.0.0"]

CMD ["npm", "start"]
