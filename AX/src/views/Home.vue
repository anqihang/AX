<template>
  <div class="isolate min-h-full bgi-linear-bp bg-no-repeat">
    <div class="w-max-2560 flex flex-col mx-auto min-h-full">
      <!--      <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">-->
      <!--        aaa-->
      <!--      </div>-->
      <Nav></Nav>
      <main class="flex-grow flex justify-center items-center flex-grow">
        <div class="relative px-6 lg:px-8 py-32">
          <div class="mx-auto max-w-2xl">
            <div class="text-center">
              <h1 class="text--color-p text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your own exploration<br />
                Start from now
              </h1>
              <p
                class="description mt-6 text-lg leading-8 text-gray-700"
                style="
                  color: transparent;
                  -webkit-background-clip: text;
                  background-image: linear-gradient(to right, #6348df, #4c48ce, #3746bc, #2443aa, #123f97);
                "
              >
                Anim auto id magna aliquot ad ad non dedent sunt. Qui inure qui lorem cupidity common. Elite sunt amet
                fugit venial toccata fugit aliquot.
              </p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  class="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  href="#"
                >
                  Get started
                </a>
                <a class="text--color-p text-base font-semibold leading-7 text-gray-900" href="#">
                  Learn more
                  <span aria-hidden="true" class="text-indigo-900">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Nav from "@/components/Nav.vue";
import { inject } from "vue";
import { pi_name } from "@/utils/pi_keys";

//*依赖注入
const _pi_name = inject<string>(pi_name);
</script>

<style lang="scss" scoped>
a {
  transition: border 0.5s ease 0s;
  @apply px-2 rounded-md border border-transparent hover:border-blue-600;
}
////*字体渐变
//.text--color {
//  color: transparent;
//  -webkit-background-clip: text;
//  background-image: linear-gradient(to right, #533fb5, #463ea8, #3a3c9c, #30398e, #273681);
//}
</style>
