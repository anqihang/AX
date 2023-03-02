<template>
  <div class="h-auto" style="background-color: #f1f2f3">
    <div class="ax-w-max-2560 mx-auto shadow bg-white min-h-screen">
      <Nav></Nav>
      <main class="w-10/12 mx-auto min-h-screen">
        <div class="flex w-full py-5 px-5">
          <div class="flex-1">
            <p>3D 卡片效果，需要传递width、height、url属性给组件</p>
          </div>
          <div class="flex-1">
            <Card3D :height="320" :width="240" url="../../public/maonuo.jpg"></Card3D>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Nav from "@/components/Nav.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Card3D from "@/components/Card3D.vue";
// *路由
const router = useRouter();
const isTop = ref(true);
window.addEventListener("scroll", () => {
  window.scrollY > 0 ? (isTop.value = false) : (isTop.value = true);
});
</script>

<style scoped>
.leaveTop {
  padding-top: 0.75rem !important;
  padding-bottom: 0.75rem;
}
main {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
