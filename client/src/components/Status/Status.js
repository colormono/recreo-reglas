import React from 'react';

const Status = props => {
  return (
    <aside className="widget widget-status">
      <h4>Dispositivos</h4>
      {props.devices.map(device => (
        <div key={device.id}>
          {device.id} {device.name} = {device.status}
        </div>
      ))}
    </aside>
  );
};

export default Status;
