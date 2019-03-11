import React from 'react';

const TestWS = props => {
  return (
    <aside className="widget" id="widget-tests">
      <button onClick={props.sendMessage}>Send Message</button>
      <button onClick={props.sendMessage}>Get data from API</button>
      {props.data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </aside>
  );
};

export default TestWS;
