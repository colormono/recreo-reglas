const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');
const axios = require('axios');
const routes = require('./routes/index');

// config
const port = process.env.PORT || 4001;
const portAPI = process.env.API_PORT || 4002;

// app
const app = express();

// routes
app.use(routes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// io server
const server = http.createServer(app);
const io = socketIo(server);

// auth devices
const authDevices = [
  'reglas-cliente',
  'timbre',
  'columpio',
  'fichines',
  'soga',
  'pelota'
];

// middleware
io.use((socket, next) => {
  let device = socket.handshake.query.device;
  if (authDevices.includes(device)) {
    return next();
  }
  return next(new Error('authentication error'));
});

// websockets
io.on('connection', socket => {
  let device = socket.handshake.query.device;
  console.log('connected:', device);

  socket.on('disconnect', () => {
    console.log('disconnected:', device);
  });

  socket.on('getDevices', () => {
    console.log('devices connected');
    queryApiAndEmit('devices', 'resDevices', socket);
  });

  socket.on('chat message', msg => {
    console.log('message: ', msg);
  });

  socket.on('FromAPI', msg => {
    console.log('FromAPI Sended: ', msg);
  });

  socket.on('get json', () => {
    queryApiAndEmit('streams', 'testingData', socket);
    // is equivalent to

    // axios.get('http://localhost:4002/streams').then(res => {
    //   socket.emit('FromAPI', res.data);
    //   console.log('streams: ', res.data);
    // });
  });
});

const queryApiAndEmit = async (endpoint, emitter, socket) => {
  try {
    const res = await axios.get(`http://localhost:${portAPI}/${endpoint}`);
    console.log('streams: ', res.data);
    socket.emit(emitter, res.data);
    // return res.data;
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

// start server
server.listen(port, () => console.log(`Listening on port ${port}`));
