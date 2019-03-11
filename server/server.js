const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const axios = require('axios');

const port = process.env.PORT || 4001;
const index = require('./routes/index');

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);

// middleware
io.use((socket, next) => {
  let token = socket.handshake.query.token;
  if (token === 'colormono') {
    return next();
  }
  return next(new Error('authentication error'));
});

io.on('connection', socket => {
  console.log('a user connected');
  let token = socket.handshake.query.token;
  console.log(token);

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', msg => {
    console.log('message: ', msg);
  });

  socket.on('FromAPI', msg => {
    console.log('FromAPI Sended: ', msg);
  });

  //io.sockets.emit('data', 'everyone');

  socket.on('get json', () => {
    getApiAndEmit(socket);
    // is equivalent to

    // axios.get('http://localhost:4002/streams').then(res => {
    //   socket.emit('FromAPI', res.data);
    //   console.log('streams: ', res.data);
    // });
  });
});

const getApiAndEmit = async socket => {
  try {
    const res = await axios.get('http://localhost:4002/streams');
    socket.emit('testingData', res.data);
    console.log('streams: ', res.data);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

server.listen(port, () => console.log(`Listening on port ${port}`));
