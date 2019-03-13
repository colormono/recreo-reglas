import React from 'react';

const Reglas = props => {
  if (!props.device) {
    return <div>Loading Recreo Cliente...</div>;
  }

  const renderStatus = () => {
    return props.device.status ? 'ON' : 'OFF';
  };

  return (
    <aside className="widget widget-reglas">
      <h4>Current Pattern</h4>
      <div>Recreo is {renderStatus()}</div>
    </aside>
  );
};

export default Reglas;
