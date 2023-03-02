<script lang="ts" setup>
import { provide } from "vue";
import { pi_name } from "@/utils/pi_keys";

provide(pi_name, "ax");
</script>
<template>
  <RouterView v-slot="{ Component }">
    <!--    *为了过渡时不显示白色背景,只在Home,SignIn,SignUp之间跳转时显示紫色渐变背景-->
    <div
      :class="{ 'bgi-linear-bp': ['Home', 'SignIn', 'SignUp'].includes(Component?.type.__name) }"
      class="isolate min-h-screen flex"
    >
      <transition mode="out-in" name="fade">
        <component :is="Component" class="w-full">{{ Component?.type.__name }}</component>
      </transition>
    </div>
  </RouterView>
</template>
<style lang="scss" scoped></style>
