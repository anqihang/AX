import type { AxiosPromise, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";
import { setToken } from "@/utils/token";

// 请求拦截
axios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    return config;
  },
  function (error: Error): AxiosPromise {
    return Promise.reject(error);
  }
);
//响应拦截
axios.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    response.data.token && setToken(response.data.token);

    return response;
  },
  (error: Error): AxiosPromise => {
    return Promise.reject(error);
  }
);
