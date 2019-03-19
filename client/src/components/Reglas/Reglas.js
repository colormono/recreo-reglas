import React, { useState, useEffect } from 'react';
import ReglasAPI from '../../api/reglas';

const fetchPattern = async id => {
  const resp = await ReglasAPI.get(`/recreos/${id}`);
  return resp.data;
};

const Reglas = props => {
  const [reglas, setReglas] = useState({});
  const reglasId = 1;

  const fetchData = async () => {
    const result = await ReglasAPI.get(`/recreos/${reglasId}`);
    setReglas(result.data);
  };

  useEffect(() => {
    fetchData();
  }, [reglasId]);

  if (!props.device || !reglas.id) {
    return <div>Loading Recreo Cliente...</div>;
  }
  const { device, socket } = props;
  console.log(reglas);

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
      {reglas.time.work}
    </aside>
  );
};

export default Reglas;
