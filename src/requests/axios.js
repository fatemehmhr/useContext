import axios from "axios";

const request = axios.create();

request.interceptors.request.use(
  (config) => {
    console.log("in request...");
    config.headers.test = "I am only a header!";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    console.log(response);
    console.log("after request...");
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
