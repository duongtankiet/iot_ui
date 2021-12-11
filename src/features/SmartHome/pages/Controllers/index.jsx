import React, {useEffect, useState, useRef} from 'react';
// import Banner from '../../../../components/Banner';
// import PhotoForm from '../../components/PhotoForm';
import './styles.scss';
// import Button from 'reactstrap/lib/Button';
import ControllersApi from '../../../../api/controllersApi';
import mqtt from 'mqtt'



Controllers.propTypes = {};

const DEVICES = {
  LivingroomLight: 'Liv',
  AirConditional: 'Air',
  BathroomLights: 'Bat',
  BedroomLights1: 'Bed1',
  BedroomLights2: 'Bed2',
  KitchenLights: 'Kit'
}

const STATE = {
  On: 'on',
  Off: 'off'
}

 function Controllers(props) {


  let client = useRef(null).current;

  const [data, setData] = useState({
    [DEVICES.LivingroomLight]: null,
    [DEVICES.AirConditional]: null,
    [DEVICES.BathroomLights]: null,
    [DEVICES.BedroomLights1]: null,
    [DEVICES.BedroomLights2]: null,
    [DEVICES.KitchenLights]: null,
  });

  const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8);

  const options = {
    clientId: clientId,
    protocolId: 'MQTT',
  }

  
  


  


  useEffect(() => {
    
    //eslint-disable-next-line react-hooks/exhaustive-deps
    client = mqtt.connect('ws://broker.emqx.io:8083/mqtt',options);
    client.on('connect', function () {
    console.log('Connected MQTT');
    });
    
    client.subscribe('esp8266todevice');
    client.on('message', async function (topic, message) {
      //console.log('Received message:', topic, message.toString());
      await fecthData();
    });
    const fecthData = async () => {
      const tempData = {};

      const parData = await ControllersApi.getData(DEVICES.LivingroomLight);
      const airData = await ControllersApi.getData(DEVICES.AirConditional);
      const batData = await ControllersApi.getData(DEVICES.BathroomLights);
      const bed1Data = await ControllersApi.getData(DEVICES.BedroomLights1);
      const bed2Data = await ControllersApi.getData(DEVICES.BedroomLights2);
      const kitData = await ControllersApi.getData(DEVICES.KitchenLights);

      if(parData && airData && batData && bed1Data && bed2Data && kitData){
        tempData[DEVICES.LivingroomLight] = parData;
        tempData[DEVICES.AirConditional] = airData;
        tempData[DEVICES.BathroomLights] = batData;
        tempData[DEVICES.BedroomLights1] = bed1Data;
        tempData[DEVICES.BedroomLights2] = bed2Data;
        tempData[DEVICES.KitchenLights] = kitData;
      }

      setData(tempData);
    }

    fecthData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickOn = async (state,deviceName) => {
    await ControllersApi.postControllers(state,deviceName);
    
    const _data = await ControllersApi.getData(deviceName);
    if(_data){
      setData((prevState) => ({...prevState, [deviceName]: _data}));
    }
  }

  const onClickOff = async (state,deviceName) => {
    await ControllersApi.postControllers(state,deviceName);
    
    const _data = await ControllersApi.getData(deviceName);
    if(_data){
      setData((prevState) => ({...prevState, [deviceName]: _data}));
    }
  }



  return (
    <div className="backgroud">
        <div className="group1">
          <div className="group_title1">
            <p className="title">LivingroomLight:</p>
            <p className="title">{data[DEVICES.LivingroomLight]?.[data[DEVICES.LivingroomLight].length - 1]?.state}</p>
          </div>
          <div className="group_bt">
            <button onClick={() => onClickOn(STATE.On,DEVICES.LivingroomLight)} className="bt">ON</button>
            <button onClick={() => onClickOff(STATE.Off,DEVICES.LivingroomLight)} className="bt">OFF</button>
          </div>
        </div>

        <div className="group2">
          <div className="group_title2">
            <p className="title">AirConditional:</p>
            <p className="title">{data[DEVICES.AirConditional]?.[data[DEVICES.AirConditional].length - 1]?.state}</p>
          </div>
          <div className="group_bt">
            <button onClick={() => onClickOn(STATE.On,DEVICES.AirConditional)} className="bt">ON</button>
            <button onClick={() => onClickOff(STATE.Off,DEVICES.AirConditional)} className="bt">OFF</button>
          </div>
        </div>

        <div className="group3">  
          <div className="group_title3">
            <p className="title">BathroomLight:</p>
            <p className="title">{data[DEVICES.BathroomLights]?.[data[DEVICES.BathroomLights].length - 1]?.state}</p>
          </div>
          <div className="group_bt">
            <button onClick={() => onClickOn(STATE.On,DEVICES.BathroomLights)} className="bt">ON</button>
            <button onClick={() => onClickOff(STATE.Off,DEVICES.BathroomLights)} className="bt">OFF</button>
          </div>
        </div>
          
        <div className="group4">
          <div className="group_title4">
            <p className="title"> KitchenLights: </p>
            <p className="title">{data[DEVICES.KitchenLights]?.[data[DEVICES.KitchenLights].length - 1]?.state}</p>
          </div>
          <div className="group_bt">
            <button onClick={() => onClickOn(STATE.On,DEVICES.KitchenLights)} className="bt">ON</button>
            <button onClick={() => onClickOff(STATE.Off,DEVICES.KitchenLights)} className="bt">OFF</button>
          </div>
        </div>

        <div className="group5">
          <div className="group_title5">
            <p className="title">BedroomLights1:</p>
            <p className="title">{data[DEVICES.BedroomLights1]?.[data[DEVICES.BedroomLights1].length - 1]?.state}</p>
          </div>
          <div className="group_bt">
            <button onClick={() => onClickOn(STATE.On,DEVICES.BedroomLights1)} className="bt">ON</button>
            <button onClick={() => onClickOff(STATE.Off,DEVICES.BedroomLights1)} className="bt">OFF</button>
          </div>
        </div>
          
        <div className="group6">
          <div className="group_title6">
            <p className="title">BedroomLights2:</p>
            <p className="title">{data[DEVICES.BedroomLights2]?.[data[DEVICES.BedroomLights2].length - 1]?.state}</p>
          </div>
          <div className="group_bt">
            <button onClick={() => onClickOn(STATE.On,DEVICES.BedroomLights2)} className="bt">ON</button>
            <button onClick={() => onClickOff(STATE.Off,DEVICES.BedroomLights2)} className="bt">OFF</button>
          </div>
        </div>

    </div>
  )
};

export default Controllers;