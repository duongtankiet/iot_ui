import React from 'react';
import './styles.scss';
import { useEffect, useState } from 'react';
import ControllersApi from '../../../../api/controllersApi';
import Bed2Data from '../../components/Bed2Data';

HisBed2.propTypes = {};
function HisBed2(props) {

  const [bed2Data, setbed2Data] = useState([]);
  useEffect(()=> {
    async function bed2Data() {
      try {
         const _data = await ControllersApi.getData('Bed2');
         setbed2Data(_data);
        // console.log(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    bed2Data();
  }, []);
  return (
    <div className="photo-edit">
      <Bed2Data posts = {bed2Data} /> 
    </div>
  );
}

export default HisBed2;