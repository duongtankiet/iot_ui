import React from 'react';
import './styles.scss';
import { useEffect, useState } from 'react';
import ControllersApi from '../../../../api/controllersApi';
import ParData from '../../components/LivData';

HisLiv.propTypes = {};
function HisLiv(props) {

  const [livData, setlivData] = useState([]);
  useEffect(()=> {
    async function livData() {
      try {
         const _data = await ControllersApi.getData('Liv');
         setlivData(_data);
        // console.log(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    livData();
  }, []);
  return (
    <div className="photo-edit">
      <ParData posts = {livData} /> 
    </div>
  );
}

export default HisLiv;