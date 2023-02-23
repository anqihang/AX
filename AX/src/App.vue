<script lang="ts" setup>
import { provide } from "vue";
import { pi_name } from "@/utils/pi_keys";

provide(pi_name, "ax");
</script>
<template>
  <RouterView v-slot="{ Component }">
    <div
      class="isolate bg-white min-h-screen"
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
      <transition mode="out-in" name="home">
        <component :is="Component"></component>
      </transition>
    </div>
  </RouterView>
</template>
<style lang="scss" scoped>
.home-enter-from {
  opacity: 0;
}
.home-enter-active {
  transition: opacity 0.5s ease;
}
.home-enter-to {
}
.home-leave-from {
}
.home-leave-active {
  transition: opacity 0.5s ease;
}
.home-leave-to {
  opacity: 0;
}
</style>
