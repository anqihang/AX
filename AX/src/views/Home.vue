<template>
  <div
    class="isolate flex flex-col min-h-screen"
    style="
      background-repeat: no-repeat;
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
    <div class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>
    <!--      region-->
    <!--    <div class="px-6 pt-6 lg:px-8">-->
    <!--      <nav aria-label="Global" class="flex items-center justify-between">-->
    <!--        <div class="flex lg:flex-1">-->
    <!--          <a class="-m-1.5 p-1.5" href="#">-->
    <!--            <span class="sr-only">Your Company</span>-->
    <!--            <img alt="" class="h-8" src="@/assets/ax.svg" />-->
    <!--          </a>-->
    <!--        </div>-->
    <!--        &lt;!&ndash;  !md&ndash;&gt;-->
    <!--        <div class="flex lg:hidden">-->
    <!--          <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" type="button" @click="mobileMenuOpen = true">-->
    <!--            <span class="sr-only">Open main menu</span>-->
    <!--            <Bars3Icon aria-hidden="true" class="h-6 w-6" />-->
    <!--          </button>-->
    <!--        </div>-->
    <!--        &lt;!&ndash;        !&ndash;&gt;-->
    <!--        <div class="hidden lg:flex lg:gap-x-12">-->
    <!--          <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text&#45;&#45;color">-->
    <!--            {{ item.name }}-->
    <!--          </a>-->
    <!--        </div>-->
    <!--        <Transition mode="out-in" name="fade">-->
    <!--          <div v-if="!is_signIn" class="hidden lg:flex lg:flex-1 lg:justify-end">-->
    <!--            <a class="text&#45;&#45;color text-sm font-semibold leading-6 text-gray-900" href="javascript:void(0);" @click="f_router_to('signUp')">-->
    <!--              注册-->
    <!--              &lt;!&ndash;            <span aria-hidden="true">&rarr;</span>&ndash;&gt;-->
    <!--            </a>-->
    <!--            <a-->
    <!--              class="cursor-pointer flex hover:text-blue-600 items-center justify-center rounded-md border text-white border-transparent px-4 ml-2 font-semibold shadow-sm bg-indigo-600"-->
    <!--              @click="f_router_to('signIn')"-->
    <!--            >-->
    <!--              登录-->
    <!--            </a>-->
    <!--          </div>-->
    <!--          &lt;!&ndash;        *头像&ndash;&gt;-->
    <!--          <div v-else class="hidden lg:flex lg:flex-1 lg:justify-end">-->
    <!--            <Menu as="div" class="relative inline-block">-->
    <!--              <div>-->
    <!--                <MenuButton class="inline-flex justify-center px-4 focus:outline-none" style="vertical-align: top">-->
    <!--                  <div-->
    <!--                    class="flex -space-x-2 overflow-hidden cursor-pointer hover:ring-indigo-600 hover:ring-2 hover:ring-offset-4 hover:ring-offset-blue-400 rounded-full"-->
    <!--                  >-->
    <!--                    <img-->
    <!--                      alt="userImage"-->
    <!--                      class="block h-8 w-8 rounded-full"-->
    <!--                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"-->
    <!--                    />-->
    <!--                  </div>-->
    <!--                </MenuButton>-->
    <!--              </div>-->

    <!--              <transition-->
    <!--                enter-active-class="transition duration-100 ease-out"-->
    <!--                enter-from-class="transform scale-95 opacity-0"-->
    <!--                enter-to-class="transform scale-100 opacity-100"-->
    <!--                leave-active-class="transition duration-75 ease-in"-->
    <!--                leave-from-class="transform scale-100 opacity-100"-->
    <!--                leave-to-class="transform scale-95 opacity-0"-->
    <!--              >-->
    <!--                <MenuItems-->
    <!--                  class="z-10 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"-->
    <!--                  style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); box-shadow: 0 0 12px 1px rgba(255, 255, 255, 0.1)"-->
    <!--                >-->
    <!--                  <div class="px-1 py-1">-->
    <!--                    <MenuItem v-slot="{ active }">-->
    <!--                      <button-->
    <!--                        :class="[-->
    <!--                          active ? 'bg-violet-500 text-white' : 'text&#45;&#45;color text-gray-900',-->
    <!--                          ' group flex w-full items-center rounded-md px-2 py-2 text-sm',-->
    <!--                        ]"-->
    <!--                      >-->
    <!--                        <PencilSquareIcon :active="active" aria-hidden="true" class="mr-2 h-5 w-5 text-violet-700" />-->
    <!--                        Edit-->
    <!--                      </button>-->
    <!--                    </MenuItem>-->
    <!--                    <MenuItem v-slot="{ active }">-->
    <!--                      <button-->
    <!--                        :class="[-->
    <!--                          active ? 'bg-violet-500 text-white' : 'text&#45;&#45;color text-gray-900',-->
    <!--                          ' group flex w-full items-center rounded-md px-2 py-2 text-sm',-->
    <!--                        ]"-->
    <!--                      >-->
    <!--                        <Cog6ToothIcon :active="active" aria-hidden="true" class="mr-2 h-5 w-5 text-violet-700" />-->
    <!--                        Setting-->
    <!--                      </button>-->
    <!--                    </MenuItem>-->
    <!--                  </div>-->
    <!--                  <div class="px-1 py-1 !border-blue-400">-->
    <!--                    <MenuItem v-slot="{ active }">-->
    <!--                      <button-->
    <!--                        :class="[-->
    <!--                          active ? 'bg-violet-500 text-white' : 'text&#45;&#45;color text-gray-900',-->
    <!--                          ' group flex w-full items-center rounded-md px-2 py-2 text-sm',-->
    <!--                        ]"-->
    <!--                        @click="f_signOut"-->
    <!--                      >-->
    <!--                        <ArrowLeftOnRectangleIcon :active="active" aria-hidden="true" class="mr-2 h-5 w-5 text-violet-700" />-->
    <!--                        注销-->
    <!--                      </button>-->
    <!--                    </MenuItem>-->
    <!--                  </div>-->
    <!--                </MenuItems>-->
    <!--              </transition>-->
    <!--            </Menu>-->
    <!--          </div>-->
    <!--        </Transition>-->
    <!--      </nav>-->
    <!--      &lt;!&ndash;      !&ndash;&gt;-->
    <!--      <Dialog :open="mobileMenuOpen" as="div" @close="mobileMenuOpen = false">-->
    <!--        <DialogPanel class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden" focus="true">-->
    <!--          <div class="flex items-center justify-between">-->
    <!--            <a class="-m-1.5 p-1.5" href="#">-->
    <!--              <span class="sr-only">Your Company</span>-->
    <!--              <img alt="" class="h-8" src="@/assets/ax.svg" />-->
    <!--            </a>-->
    <!--            <button class="-m-2.5 rounded-md p-2.5 text-gray-700" type="button" @click="mobileMenuOpen = false">-->
    <!--              <span class="sr-only">Close menu</span>-->
    <!--              <XMarkIcon aria-hidden="true" class="h-6 w-6" />-->
    <!--            </button>-->
    <!--          </div>-->
    <!--          <div class="mt-6 flow-root">-->
    <!--            <div class="-my-6 divide-y divide-gray-500/10">-->
    <!--              <div class="space-y-2 py-6">-->
    <!--                <a-->
    <!--                  v-for="item in navigation"-->
    <!--                  :key="item.name"-->
    <!--                  :href="item.href"-->
    <!--                  class="text&#45;&#45;color mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"-->
    <!--                >-->
    <!--                  {{ item.name }}-->
    <!--                </a>-->
    <!--              </div>-->
    <!--              <div class="py-6">-->
    <!--                <a-->
    <!--                  v-if="!is_signIn"-->
    <!--                  class="cursor-pointer text&#45;&#45;color -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"-->
    <!--                  @cliick="f_router_to('signIn')"-->
    <!--                >-->
    <!--                  登录-->
    <!--                </a>-->
    <!--                <div-->
    <!--                  v-else-->
    <!--                  class="flex -space-x-2 overflow-hidden cursor-pointer hover:ring-indigo-600 hover:ring-2 hover:ring-offset-4 hover:ring-offset-white rounded-full"-->
    <!--                >-->
    <!--                  <img-->
    <!--                    alt="userImage"-->
    <!--                    class="inline-block h-8 w-8 rounded-full"-->
    <!--                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"-->
    <!--                  />-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </DialogPanel>-->
    <!--      </Dialog>-->
    <!--      &lt;!&ndash;      !&ndash;&gt;-->
    <!--    </div>-->
    <!--      endregion-->
    <Nav></Nav>
    <main class="flex-grow flex justify-center items-center">
      <div class="relative px-6 lg:px-8 py-32">
        <div class="mx-auto max-w-2xl">
          <div class="text-center">
            <h1 class="text--color text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
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
              Anim auto id magna aliquot ad ad non dedent sunt. Qui inure qui lorem cupidity common. Elite sunt amet fugit venial toccata fugit
              aliquot.
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a
                class="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                href="#"
              >
                Get started
              </a>
              <a class="text--color text-base font-semibold leading-7 text-gray-900" href="#">
                Learn more
                <span aria-hidden="true" class="text-indigo-900">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
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
//*字体渐变
.text--color {
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, #533fb5, #463ea8, #3a3c9c, #30398e, #273681);
}
</style>
