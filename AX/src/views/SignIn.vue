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
        <img
          alt="logo"
          class="border--hover h-12 mx-auto w-auto cursor-pointer"
          src="@/assets/ax.svg"
          @click="f_router_to('home')"
        />
        <h2
          class="text--color mt-6 text-center text-3xl font-bold tracking-tight leading-10"
        >
          Sign in to your account
        </h2>
        <p
          class="border--hover cursor-pointer color--autoChange text-center mt-4"
          style="color: #4f46e5"
          @click="f_router_to('signUp')"
        >
          Or sign up
        </p>
      </div>
      <form
        action="#"
        class="mx-auto mt-4 w-96 space-y-6"
        data-test="account_form"
      >
        <div>
          <div>
            <label class="font-bold text--color" for="email-address">
              Email address
            </label>
            <input
              id="email-address"
              v-model="account.email"
              autocomplete="email"
              class="input"
              data-test="account_email"
              name="email"
              required
              type="email"
            />
          </div>
          <div>
            <label class="font-bold text--color" for="password">Password</label>
            <input
              id="password"
              v-model="account.pwd"
              autocomplete="current-password"
              class="input"
              data-test="account_pwd"
              name="password"
              required
              type="password"
            />
          </div>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <input
              id="remember-me"
              class="bg-transparent h-4 w-4 rounded text-indigo-500 border-indigo-500 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-500"
              name="remember-me"
              type="checkbox"
            />
            <label
              class="ml-2 block text-sm text-gray-900 cursor-pointer text--color"
              for="remember-me"
            >
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a class="font-medium text--color hover:!text-indigo-500" href="#"
              >Forgot your password?</a
            >
          </div>
        </div>

        <div>
          <button
            class="hover:text-blue-600 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-blue-500"
            data-test="button_signIn"
            type="button"
            @click="f_api_signIn"
          >
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                aria-hidden="true"
                class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { LockClosedIcon } from "@heroicons/vue/20/solid";
import { useRouter } from "vue-router";

const emit = defineEmits<{ (e: "submit", value: object): void }>();
//*路由
const router = useRouter();
function f_router_to(to: string) {
  router.push({ name: to });
}
//account信息
const account = ref<{ email: string; pwd: string }>({
  email: "",
  pwd: "",
});
emit("submit", account.value);
//post请求
function f_api_signIn() {
  console.log(account.value);
}
</script>

<style lang="scss" scoped>
.input {
  //*input的文字颜色
  -webkit-text-fill-color: #273681;
  @apply mt-1 mb-6 bg-transparent  relative block w-full appearance-none rounded-md border border-indigo-500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-800 focus:outline-none focus:ring-indigo-500 sm:text-sm;
}

//*input的自动填充
.input:-webkit-autofill {
  transition: background-color 50000s ease-in-out 0s;
}

//!文本颜色-渐变
.text--color {
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(
    to right,
    #533fb5,
    #463ea8,
    #3a3c9c,
    #30398e,
    #273681
  );
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
