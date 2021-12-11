import React, { useEffect, useState } from 'react';
import './styles.scss';
import controllersApi from '../../../../api/controllersApi';

History.propTypes = {};

function History(props) {

  const [warnings,setWarning] = useState([]);


  useEffect(()=>{
    const fetchData = async () =>{
      const data = await controllersApi.getWarning();
      // setWarning([{_id:'fixedId', title: 'Devices', isWarning: 'Status'}, ...data]);
       setWarning(data);
    }
    fetchData();
  },[]);


  return (
    <div className="backgroud">
      
      <div className="titlehis1">DEVICES</div>
      <div className="titlehis2">WARNING</div>
     
      {warnings.map(({ _id, title, isWarning },index) => (
        <div className="grouphis"  key={_id}>
          <div
            className="bthis"
            onClick={() => {
              window.location.href=(`/smarthome/${title?.substring(0, 15).toLowerCase()}`);
            }}
          >
            {title}
          </div>
          <div className="warning">{isWarning}</div>
        </div>
      ))}
    </div>
  );
}

export default History;