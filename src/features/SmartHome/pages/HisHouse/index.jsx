import React from 'react';
import './styles.scss';
import { useEffect, useState } from 'react';
import ControllersApi from '../../../../api/controllersApi';
import HouseData from '../../components/HouseData';

HisHouse.propTypes = {};
function HisHouse(props) {

  const [houseData, sethouseData] = useState([]);
  useEffect(()=> {
    async function houseData() {
      try {
         const _data = await ControllersApi.getData('House');
         sethouseData(_data);
        // console.log(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    houseData();
  }, []);
  return (
    <div className="photo-edit">
      <HouseData posts = {houseData} /> 
    </div>
  );
}

export default HisHouse;