import React from 'react';
import './styles.scss';
import { useEffect, useState } from 'react';
import ControllersApi from '../../../../api/controllersApi';
import Bed1Data from '../../components/Bed1Data';

HisBed1.propTypes = {};
function HisBed1(props) {

  const [bed1Data, setbed1Data] = useState([]);
  useEffect(()=> {
    async function bed1Data() {
      try {
         const _data = await ControllersApi.getData('Bed1');
         setbed1Data(_data);
        // console.log(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    bed1Data();
  }, []);
  return (
    <div className="photo-edit">
      <Bed1Data posts = {bed1Data} /> 
    </div>
  );
}

export default HisBed1;