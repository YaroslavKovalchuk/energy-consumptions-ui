import axios from "axios";
import { getToken } from "./AuthenticationService";

const headers = {
    'Authorization':'Bearer '+getToken()
  }

export const getDaubTunnelOvenData = (daubRequest) =>{
    return axios.post("http://localhost:8080/ovens/daub/page", daubRequest,{
        headers: headers
    });
}

export const getDaubTunnelOvenDataWithFilterDate = (daubRequest, filterRequest) =>{
    return axios.post("http://localhost:8080/ovens/daub/page/filter?" + filterRequest, daubRequest,{
        headers: headers
    });
}

export const getHecroneTunnelOvenData = (hecroneRequest) =>{
    return axios.post("http://localhost:8080/ovens/hecrone/page", hecroneRequest,{
        headers: headers
    });
}