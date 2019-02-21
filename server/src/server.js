import express from 'express';
import { json, urlencoded } from 'body-parser';
import morgan from 'morgan';
import config from './config';
import cors from 'cors';
//import { signup, signin, protect } from './utils/auth';
import { connect } from './utils/db';
//import userRouter from './resources/user/user.router';
//import itemRouter from './resources/item/item.router';
//import listRouter from './resources/list/list.router';
// communication
import socketIO from 'socket.io';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan('dev'));

//app.post('/signup', signup)
//app.post('/signin', signin)

//app.use('/api', protect)
//app.use('/api/user', userRouter)
//app.use('/api/item', itemRouter)
//app.use('/api/list', listRouter)

const router = express.Router();

// CRUD (post, get, put, delete)
router.get('/mono', (req, res) => {
  res.send({ hi: 'there' });
});

app.use('/api', router);

// IO
const listenSocketEvents = io => {
  // This is what the socket.io syntax is like, we will work this later
  io.on('connection', socket => {
    console.log('New client connected');

    const res = 'hi world';
    socket.emit('FromAPI', res);

    // just like on the client side, we have a socket.on method that takes a callback function
    socket.on('pattern', pattern => {
      // once we get a 'pattern' event from one of our clients, we will send it to the rest of the clients
      // we make use of the socket.emit method again with the argument given to use from the callback function above
      console.log('Nuevo parttern: ', pattern);
      io.sockets.emit('pattern', pattern);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

export const start = async () => {
  try {
    await connect();
    const server = app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`);
    });
    const io = socketIO.listen(server);
    listenSocketEvents(io);
  } catch (e) {
    console.error(e);
  }
};
