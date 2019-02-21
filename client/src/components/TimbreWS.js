import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';

class Timbre extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: 'http://localhost:4001' // this is where we are connecting to with sockets
    };
  }
  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('FromAPI', data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        {response ? (
          <p>The temperature in Florence is: {response} °F</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default Timbre;
