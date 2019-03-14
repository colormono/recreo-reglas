import React from 'react';

const Reglas = props => {
  if (!props.device) {
    return <div>Loading Recreo Cliente...</div>;
  }

  const { device, socket } = props;

  const renderStatus = () => {
    return device.status ? 'ON' : 'OFF';
  };

  return (
    <aside className="widget widget-reglas">
      <span className="supertitle">
        {device.title} is {renderStatus()}
      </span>
      <h2 className="title">
        <span>REGLAS ACTUALES</span>
      </h2>
      <h4 />
    </aside>
  );
};

export default Reglas;
