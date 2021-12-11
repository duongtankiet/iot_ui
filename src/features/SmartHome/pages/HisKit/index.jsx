import React from 'react';
import './styles.scss';
import { useEffect, useState } from 'react';
import ControllersApi from '../../../../api/controllersApi';
import KitData from '../../components/KitData';

HisKit.propTypes = {};
function HisKit(props) {

  const [kitData, setkitData] = useState([]);
  useEffect(()=> {
    async function kitData() {
      try {
         const _data = await ControllersApi.getData('Kit');
         setkitData(_data);
        // console.log(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    kitData();
  }, []);
  return (
    <div className="photo-edit">
      <KitData posts = {kitData} /> 
    </div>
  );
}

export default HisKit;