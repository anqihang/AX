import { defineStore } from "pinia";
import type { interf_Account } from "@/views/types/type_sign";
import { axios_signIn, axios_signUp } from "@/Api/api_sign";
import { getToken, removeToken, setToken } from "@/utils/token";
import { ref } from "vue";

export const useAccountStore = defineStore("account", () => {
  /*注册*/
  function signUp(_account: Partial<interf_Account>) {
    return new Promise((resolve, inject) => {
      axios_signUp(_account)
        .then((res) => {
          resolve(true);
        })
        .catch((err: Error) => {
          inject(err);
        });
    });
  }
  //token
  const token = ref<string | null>(getToken() || null);
  /*登录*/
  function signIn(_account: Partial<interf_Account>) {
    return new Promise((resolve, inject) => {
      axios_signIn(_account)
        .then((res) => {
          //保存token到localStorage
          setToken(res.data.token);
          //将token保存在store
          token.value = res.data.token;
          resolve(true);
        })
        .catch((err: Error) => {
          inject(err);
        });
    });
  }

  /**
   * 注销
   */
  function signOut() {
    removeToken();
    token.value = "";
  }
  return { token, signUp, signIn, signOut };
});
