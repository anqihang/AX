<template>
  <div
    class="w-full h-screen flex items-center"
    style="
      background-image: linear-gradient(
        to left top,
        #6922c9,
        #5b40d0,
        #5055d3,
        #4c65d3,
        #5074d0,
        #4284d7,
        #3c92da,
        #41a0dc,
        #2bb3e3,
        #2ac6e6,
        #43d7e4,
        #66e7e0
      );
    "
  >
    <div class="max-w-4xl mx-auto">
      <div>
        <img alt="logo" class="border--hover h-12 mx-auto w-auto cursor-pointer" src="@/assets/ax.svg" @click="f_router_to('home')" />
        <h2 class="text--color mt-6 text-center text-3xl font-bold tracking-tight leading-10">Sign in to your account</h2>
        <p class="border--hover cursor-pointer color--autoChange text-center mt-4" style="color: #4f46e5" @click="f_router_to('signUp')">
          Or sign up
        </p>
      </div>
      <form action="#" class="mx-auto mt-4 w-96 space-y-6" data-test="account_form" @submit.prevent="f_api_signIn">
        <div>
          <div>
            <label class="font-bold text--color" for="email-address">Email address</label>
            <input
              id="email-address"
              v-model="account.email"
              :class="{ err: is_err.email }"
              autocomplete="email"
              class="input"
              data-test="account_email"
              name="email"
              required
              type="email"
              @blur="f_check_account('email')"
            />
          </div>
          <div>
            <label class="font-bold text--color" for="password">Password</label>
            <input
              id="password"
              v-model="account.pwd"
              :class="{ err: is_err.pwd }"
              autocomplete="current-password"
              class="input"
              data-test="account_pwd"
              name="password"
              placeholder="最少6位，1个大写字母，1个小写字母，1个数字，1个特殊字符"
              required
              type="password"
              @blur="f_check_account('pwd')"
            />
          </div>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <input
              id="remember-me"
              v-model="account.rememberMe"
              class="cursor-pointer bg-transparent h-4 w-4 rounded text-indigo-500 border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-500"
              data-test="checkbox_remember"
              name="remember-me"
              type="checkbox"
            />
            <label class="ml-2 block text-sm text-gray-900 cursor-pointer text--color" for="remember-me"> Remember me </label>
          </div>

          <div class="text-sm">
            <a class="font-medium text--color hover:!text-indigo-500" href="#">Forgot your password?</a>
          </div>
        </div>

        <div>
          <button
            class="hover:text-blue-600 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-500"
            data-test="button_signIn"
            type="submit"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" />
            </span>
            登 录
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<!--!-->
<script lang="ts" setup>
import type { Ref } from "vue";
import { ref, unref } from "vue";
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";
import type { interf_Account } from "@/views/types/type_signIn.";
import { useAccountStore } from "@/stores/account";

//*test
const emit = defineEmits<{ (e: "test", value: object): void }>();
//*路由
const router = useRouter();
function f_router_to(to: string) {
  router.push({ name: to });
}

//account信息==
//? Required修饰必须包含所有的接口属性 == a:boolean
const account = ref<Partial<interf_Account>>({
  email: "",
  pwd: "",
  rememberMe: false,
});
//account格式验证变量=红色边框
//?Partial修饰可以包含接口一部分属性 == a?:boolean
const is_err: Ref<Partial<interf_Account>> = ref({
  email: false,
  pwd: false,
});

//去除空格
function f_trim_space(): void {
  //?从interf_Account中剔除rememberMe
  type k = keyof Omit<interf_Account, "rememberMe" | "code">;
  for (const argumentsKey in account.value) {
    if (argumentsKey != "rememberMe" && argumentsKey != "code")
      unref(account)[argumentsKey as k] = (unref(account)[argumentsKey as k] as string).replace(/\s/g, "");
  }
}

//blur事件-检查格式
function f_check_account(_ep: string): void {
  f_trim_space();
  if (_ep == "email")
    /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(account.value.email as string)
      ? (is_err.value.email = false)
      : (is_err.value.email = true);
  //大写，小写，数字，字符（6-2）
  if (_ep == "pwd")
    /^(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*?.]).{6,20}$/.test(account.value.pwd as string)
      ? (is_err.value.pwd = false)
      : (is_err.value.pwd = true);
}

//?post请求 == 登录
function f_api_signIn(): void {
  useAccountStore()
    .signIn(account.value)
    .then(() => {
      console.log(1);
      f_router_to("home");
    })
    .catch((err) => {
      console.log(err);
    });
  //test
  emit("test", { ...account.value });
}
</script>
<!--!-->
<style lang="scss" scoped>
$--color-text: #533fb5, #463ea8, #3a3c9c, #30398e, #273681;
//sass混入
/*输入框的红色报错 */
@mixin errBorder {
  box-shadow: 0 0 0 2px red;
}

.err {
  //box-shadow: 0 0 0 2px red;
  @include errBorder;
}

//*input的文字颜色
.input {
  -webkit-text-fill-color: #3a3c9c;
  @apply mt-1 mb-6 bg-transparent relative block w-full appearance-none rounded-md border border-indigo-500 px-3 py-2
  text-gray-900 focus:z-10 focus:border-indigo-800 focus:outline-none focus:ring-indigo-500 sm:text-sm;
}

//*input的自动填充背景透明
.input:-webkit-autofill {
  transition: background-color 50000s ease-in-out 0s;
}
.input::placeholder {
  font-size: 12px;
}
.input::-moz-placeholder {
  font-size: 12px;
}
.input::-ms-input-placeholder {
  font-size: 12px;
}

/*文本颜色-渐变*/
.text--color {
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, $--color-text);
}

.border--hover {
  @apply px-2 rounded-md border border-transparent hover:border-blue-600;
}

//*sign up的颜色渐变动画
.color--autoChange {
  animation: colorAnim 3s linear 0s infinite alternate-reverse;
}

@keyframes colorAnim {
  0% {
    color: #5ae2e1;
  }

  20% {
    color: #2bb5e3;
  }

  40% {
    color: #3d95da;
  }

  60% {
    color: #4f73d0;
  }

  80% {
    color: #4f59d3;
  }

  100% {
    color: #5d3ccf;
  }
}
</style>
