// import axios from "axios";
import { instance as axios } from "./index";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
//请求拦截
axios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig) {
    return config;
  },
  function (error: Error) {
    return Promise.reject(error);
  }
);
//响应拦截
axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: Error) => {
    return Promise.reject(error);
  }
);
