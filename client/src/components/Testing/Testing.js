import React from 'react';
import ReglasAPI from '../../api/reglas';

const fetchPattern = id => {
  ReglasAPI.get(`/recreos/${id}`).then(response =>
    console.log('recreo', response.data)
  );
};

const sendMessage = socket => {
  socket.emit('test');
};

const TestWS = props => {
  if (!props.devices) {
    return null;
  }

  return (
    <aside className="widget" id="widget-tests">
      <span className="supertitle">Testing</span>
      <h2 className="title">
        <span>Devices</span>
      </h2>
      <div className="row">
        {props.devices.map(device => (
          <div key={device.id} style={{ marginRight: '16px' }}>
            ({device.id}){device.name}={device.status}
          </div>
        ))}
      </div>
      <hr />
      <button onClick={sendMessage}>Send Message</button>
      <button onClick={() => props.socket.emit('devices:update')}>
        Update devices list
      </button>
      <button onClick={() => fetchPattern(1)}>Get Recreo from API</button>
    </aside>
  );
};

export default TestWS;
