import axios from 'axios';

const API = {};

API.getCaipuData = (params) => {
  return axios.get("/juhe/historyWeather/province", {
    params: params,
  });
};

API.getCaipuData2 = (params) => {
  return axios.get("/api/historyWeather/province", {
    params: params,
  });
};

export default API;