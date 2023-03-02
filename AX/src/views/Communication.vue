<template>
  <div @click="f_router_to">to</div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

// *路由
const router = useRouter();
function f_router_to() {
  router.push({ name: "home" });
}
</script>

<style lang="scss" scoped></style>
