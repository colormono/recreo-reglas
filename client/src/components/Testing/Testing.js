import React from 'react';
import apiReglas from '../../api/reglas';

const fetchPattern = id => {
  apiReglas
    .get(`/recreos/${id}`)
    .then(response => console.log('recreo', response.data));
};

const sendMessage = socket => {
  socket.emit('test');
};

const TestWS = props => {
  return (
    <aside className="widget" id="widget-tests">
      <button onClick={sendMessage}>Send Message</button>
      <button onClick={() => props.socket.emit('devices:update')}>
        Update devices list
      </button>
      <button onClick={() => fetchPattern(1)}>Get Recreo from API</button>
    </aside>
  );
};

export default TestWS;
