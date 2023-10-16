import Axios from "axios";
import config from "./config.json"
const api = Axios.create({
    baseURL: config._baseApiUrl,
    headers: { 'Authorization': `Bearer ${config.apikey}` }
  });

export default api;