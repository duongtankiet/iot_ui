
import axiosClient from "../api/axiosClient";

const controllersApi = { 
    postControllers : (state,deviceName) => { 
    const url = `controller/${state}/${deviceName}`; 
    return axiosClient.post(url,{}); 
    },
    
    // postOff : (deviceName) => { 
    //     const url = `/off/${deviceName}`; 
    //     return axiosClient.post(url,{}); 
    // },
    
    getData : (deviceName) => {
        const url = `history/${deviceName}`;
        return axiosClient.get(url,{});
    },

    getWarning: () =>{
        const url = `/warnings`;
        return axiosClient.get(url);
    }

//     data : (params) => {
//         const url = '/controllers';
//         return axiosClient.get(url, { params });
//     }
//    }  

//    updateState(idOfDevice, state){
//        // find id => tim ra du lieu cua device
//        // update state 
   }

   export default controllersApi; 
   