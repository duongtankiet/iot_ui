import React from 'react';
import './styles.scss';
import { useEffect, useState } from 'react';
import ControllersApi from '../../../../api/controllersApi';
import AirData from '../../components/AirData';

HisAir.propTypes = {};
function HisAir(props) {

  const [airData, setairData] = useState([]);
  useEffect(()=> {
    async function airData() {
      try {
         const _data = await ControllersApi.getData('Air');
        setairData(_data);
        // console.log(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    airData();
  }, []);
  return (
    <div className="photo-edit">
      <AirData posts = {airData} /> 
    </div>
  );
}

export default HisAir;