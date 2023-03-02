import { instance } from "./index";
import type { interf_Account } from "@/views/types/type_sign";
import type { AxiosPromise } from "axios";
//登录
export const axios_signIn = function (account: Partial<interf_Account>): AxiosPromise {
  return instance({
    url: "/login",
    method: "POST",
    data: {
      email: account.email,
      pwd: account.pwd,
      remember: account.rememberMe,
    },
    // params: {},
  });
};
//注册
export const axios_signUp = function (account: Partial<interf_Account>): AxiosPromise {
  return instance({
    url: "/logup",
    method: "POST",
    data: {
      email: account.email,
      pwd: account.pwd,
      code: account.code,
    },
    // params: {},
  });
};
