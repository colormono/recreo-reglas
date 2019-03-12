import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

import Testing from './Testing/Testing';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = null;

    this.state = {
      endpoint: 'http://localhost:4001?device=reglas-cliente', // this is where we are connecting to with sockets
      username: localStorage.getItem('username')
        ? localStorage.getItem('username')
        : '',
      uid: localStorage.getItem('uid')
        ? localStorage.getItem('uid')
        : this.generateUID(),
      users: [],
      messages: [],
      message: '',
      testing: []
    };
  }

  componentDidMount() {
    const { endpoint, username, uid } = this.state;
    localStorage.setItem('username', username);
    //this.socket = socketIOClient(endpoint);

    this.socket = socketIOClient(endpoint, {
      query: 'username=' + username + '&uid=' + uid
    });

    // Listeners
    this.socket.emit('getDevices');

    this.socket.on('testingData', data => console.log(data));
    this.socket.on('testingData', data => this.setState({ testing: data }));
    this.socket.on('resDevices', data => console.log(data));
  }

  generateUID() {
    let text = '';
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 15; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    localStorage.setItem('uid', text);
    return text;
  }

  sendMessage = () => {
    //this.socket.emit('chat message', 'Hello Tini');
    this.socket.emit('get json');
  };

  render() {
    return (
      <section>
        <Testing sendMessage={this.sendMessage} data={this.state.testing} />
      </section>
    );
  }
}

export default App;
