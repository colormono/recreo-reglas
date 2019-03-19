import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { serverWs } from '../constants';
//import ReglasAPI from '../api/reglas';

import Testing from './Testing/Testing';
import Reglas from './Reglas/Reglas';
import Quote from './Quote/Quote';

const socket = socketIOClient(serverWs);

class App extends Component {
  state = {
    devices: [],
    pattern: {}
  };

  componentDidMount() {
    // Turn on reglas-cliente
    socket.emit('device:on', 3);

    // Listeners
    socket.on('devices:update', data => {
      console.log(data);
      this.setState({ devices: data });
    });

    socket.on('pattern:new', data => {
      console.log(data);
      this.setState({ pattern: data });
    });

    socket.on('testingData', data => {
      console.log(data);
    });
  }

  getDeviceByName = name => {
    const reglasId = this.state.devices
      .filter(device => device.name === name)
      .map(device => device)[0];
    console.log(reglasId);
    return reglasId;
  };

  render() {
    if (!this.state.devices) {
      return null;
    }

    return (
      <section className="grid">
        <div className="row">
          <Reglas
            device={this.getDeviceByName('reglas-cliente')}
            socket={socket}
          />
          <Quote />
        </div>
        <Testing socket={socket} devices={this.state.devices} />
      </section>
    );
  }
}

export default App;
