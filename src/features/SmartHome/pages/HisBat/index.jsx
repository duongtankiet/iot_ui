import React from 'react';
import './styles.scss';
import { useEffect, useState } from 'react';
import ControllersApi from '../../../../api/controllersApi';
import BatData from '../../components/BatData';

HisBat.propTypes = {};
function HisBat(props) {

  const [batData, setbatData] = useState([]);
  useEffect(()=> {
    async function batData() {
      try {
         const _data = await ControllersApi.getData('Bat');
         setbatData(_data);
        // console.log(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    batData();
  }, []);
  return (
    <div className="photo-edit">
      <BatData posts = {batData} /> 
    </div>
  );
}

export default HisBat;