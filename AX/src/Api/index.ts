import type { AxiosInstance, AxiosPromise, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import axios from "axios";

export const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  timeout: 5000,
});

//!
// 请求拦截
instance.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    return config;
  },
  function (error: Error): AxiosPromise {
    return Promise.reject(error);
  }
);
//响应拦截
instance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    const data = response.data;
    const code: number = data.code || response.status;
    return data;
  },
  (error: Error): AxiosPromise => {
    return Promise.reject(error);
  }
);
