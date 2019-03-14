import React from 'react';

const Quote = props => {
  const renderStatus = () => {
    return props.device && props.device.status ? 'ON' : 'OFF';
  };

  return (
    <aside className="widget widget-quote">
      <span className="supertitle">Quotes is {renderStatus()}</span>
      <h2 className="title">
        <span>The art of play</span>
      </h2>
      <blockquote>
        <p>
          The inextinguishable fire of play
          <br />
          Shines bright and illuminates
          <br />
          The painted faces
          <br />
          And grass-stained knees
          <br />
          Of those who haven't lost the flame
        </p>
        <cite>Hillarie Tasche</cite>
      </blockquote>
    </aside>
  );
};

export default Quote;
