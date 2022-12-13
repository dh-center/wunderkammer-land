import axios from "axios";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    "domain-token": "localhost"
  }
});

export default instance;
