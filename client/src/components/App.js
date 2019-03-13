import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import { serverWs } from '../constants';
//import apiReglas from '../api/reglas';

import Status from './Status/Status';
import Testing from './Testing/Testing';
import Reglas from './Reglas/Reglas';

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
      <section>
        <Testing socket={socket} />
        <Status devices={this.state.devices} />
        <Reglas device={this.getDeviceByName('reglas-cliente')} />
      </section>
    );
  }
}

export default App;
