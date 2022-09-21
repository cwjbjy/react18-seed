import axios from "axios";

const API = {};

API.getCaipuData = (params) => {
  return axios.get("/juhe/historyWeather/province", {
    params: params,
  });
};

API.getData = () => {
  return fetch("http://127.0.0.1:9000/api/contactList").then((res) =>
    res.json()
  );
};

export default API;
