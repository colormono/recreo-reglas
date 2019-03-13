const express = require('express');
const http = require('http');
const path = require('path');
const socketIo = require('socket.io');
const axios = require('axios');
const routes = require('./routes/index');

// config
const port = process.env.PORT || 4001;
const portAPI = process.env.API_PORT || 4002;
const apiReglas = axios.create({
  baseURL: `http://localhost:${portAPI}`
});

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
let devicesList = [];
const getDevicesList = async () => {
  try {
    const devices = await apiReglas.get('/devices');
    devicesList = devices.data;
  } catch (error) {
    console.error(`Can't connect to the API: ${error.code}`);
  }
};
getDevicesList();

// middleware for authorization
io.use((socket, next) => {
  let device = socket.handshake.query.device;
  devicesList.forEach(d => {
    if (d.name === device) {
      return next();
    }
  });
});

// websockets
io.on('connection', socket => {
  let deviceName = socket.handshake.query.device;
  let deviceId = devicesList.filter(device => device.name === deviceName)[0].id;
  console.log('connected', deviceName);
  console.log('socket id', socket.id);

  socket.on('device:on', id => {
    deviceOn(socket, id);
    console.log('turned on', deviceName);
  });

  socket.on('disconnect', () => {
    deviceOff(socket, deviceId);
    console.log('disconnected', deviceName);
  });

  socket.on('devices:update', () => {
    queryApiAndEmit(socket, '/devices', 'devices:update');
    console.log('update devices list');
  });

  socket.on('chat message', msg => {
    console.log('message: ', msg);
  });

  socket.on('send:all', data => {
    io.sockets.emit('send:pattern', data);
  });

  socket.on('send:allExceptMe', data => {
    socket.broadcast.emit('send:pattern', data);
  });

  socket.on('test', () => {
    queryApiAndEmit(socket, '/streams', 'testingData');
  });
});

const deviceOn = async (socket, id) => {
  try {
    await apiReglas.patch(`/devices/${id}`, { status: 1 });
    queryApiAndEmit(socket, '/devices', 'devices:update');
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

const deviceOff = async (socket, id) => {
  try {
    await apiReglas.patch(`/devices/${id}`, { status: 0 });
    queryApiAndEmit(socket, '/devices', 'devices:update');
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

const queryApiAndEmit = async (socket, endpoint, emitter) => {
  try {
    const res = await apiReglas.get(endpoint);
    console.error(res.data);
    socket.emit(emitter, res.data);
    console.log(`emited ${emitter}`);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};

// start server
server.listen(port, () => console.log(`Listening on port ${port}`));
