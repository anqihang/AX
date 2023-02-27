import { defineStore } from "pinia";
import type { interf_Account } from "@/views/types/type_signIn.";
import { axios_signIn } from "@/Api/api_sign";
import { getToken, removeToken, setToken } from "@/utils/token";
import { ref } from "vue";

export const useAccountStore = defineStore("account", () => {
  //token
  const token = ref<string | null>(getToken() || null);
  /*登录*/
  function signIn(_account: Partial<interf_Account>) {
    return new Promise((resolve, reject) => {
      axios_signIn(_account)
        .then((res) => {
          //保存token到localStorage
          console.log(res);
          setToken(res.data.token);
          //将token保存在store
          token.value = res.data.token;
          resolve(true);
        })
        .catch((err: Error) => {
          reject(err);
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
  return { token, signIn, signOut };
});
