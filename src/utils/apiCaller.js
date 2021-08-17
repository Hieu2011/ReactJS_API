import axios from "axios";
import * as Config from '../constants/Config';

export default function callAPI(endpoint, method='GET',body) {
    
    return axios({
        method : method,
        url : `${Config.API_URL}/${endpoint}`,
        data : body,
        config: {
            headers: { "Content-Type": "multipart/form-data" }
          }
   
    }).catch(err =>{
        console.log(err);
    });
};