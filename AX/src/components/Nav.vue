<template>
  <div class="px-6 pt-6 lg:px-8">
    <nav aria-label="Global" class="flex items-center justify-between">
      <!--      *logo-->
      <div class="flex lg:flex-1">
        <a class="-m-1.5 p-1.5" href="#">
          <span class="sr-only">Your Company</span>
          <img alt="" class="h-8" src="@/assets/ax.svg" />
        </a>
      </div>
      <!--  !md设置 三-->
      <div class="flex lg:hidden">
        <button class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" type="button" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" class="h-6 w-6" />
        </button>
      </div>
      <!--        !-->
      <!--      *中间选项-->
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          class="text-sm font-semibold leading-6 text--color"
          href="javascript:void(0)"
          @click="f_router_to(item.href)"
        >
          {{ item.name }}
        </a>
      </div>
      <!--      *登陆注册-->
      <Transition mode="out-in" name="fade">
        <div v-if="!is_signIn" class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a class="text--color text-sm font-semibold leading-6 text-gray-900" href="javascript:void(0);" @click="f_router_to('signUp')">
            注 册
            <!--            <span aria-hidden="true">&rarr;</span>-->
          </a>
          <a
            class="cursor-pointer flex hover:text-blue-600 items-center justify-center rounded-md border text-white border-transparent px-4 ml-2 font-semibold shadow-sm bg-indigo-600"
            @click="f_router_to('signIn')"
          >
            登 录
          </a>
        </div>
        <!--        *头像-->
        <div v-else class="hidden lg:flex lg:flex-1 lg:justify-end">
          <Menu as="div" class="relative inline-block">
            <div>
              <MenuButton class="inline-flex justify-center px-4 focus:outline-none" style="vertical-align: top">
                <div
                  class="flex -space-x-2 overflow-hidden cursor-pointer hover:ring-indigo-600 hover:ring-2 hover:ring-offset-4 hover:ring-offset-blue-400 rounded-full"
                >
                  <img
                    alt="userImage"
                    class="block h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  />
                </div>
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="z-10 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); box-shadow: 0 0 12px 1px rgba(255, 255, 255, 0.1)"
              >
                <div class="px-1 py-1">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text--color text-gray-900',
                        ' group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <PencilSquareIcon :active="active" aria-hidden="true" class="mr-2 h-5 w-5 text-violet-700" />
                      编辑
                    </button>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text--color text-gray-900',
                        ' group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                    >
                      <Cog6ToothIcon :active="active" aria-hidden="true" class="mr-2 h-5 w-5 text-violet-700" />
                      设置
                    </button>
                  </MenuItem>
                </div>
                <div class="px-1 py-1 !border-blue-400">
                  <MenuItem v-slot="{ active }">
                    <button
                      :class="[
                        active ? 'bg-violet-500 text-white' : 'text--color text-gray-900',
                        ' group flex w-full items-center rounded-md px-2 py-2 text-sm',
                      ]"
                      @click="f_signOut"
                    >
                      <ArrowLeftOnRectangleIcon :active="active" aria-hidden="true" class="mr-2 h-5 w-5 text-violet-700" />
                      注销
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </Transition>
    </nav>
    <!--      !md设置侧边栏-->
    <Dialog :open="mobileMenuOpen" as="div" @close="mobileMenuOpen = false">
      <DialogPanel class="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden" focus="true">
        <div class="flex items-center justify-between">
          <a class="-m-1.5 p-1.5" href="#">
            <span class="sr-only">Your Company</span>
            <img alt="" class="h-8" src="@/assets/ax.svg" />
          </a>
          <button class="-m-2.5 rounded-md p-2.5 text-gray-700" type="button" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" class="h-6 w-6" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="text--color mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
              >
                {{ item.name }}
              </a>
            </div>
            <div class="py-6">
              <a
                v-if="!is_signIn"
                class="cursor-pointer text--color -mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                @cliick="f_router_to('signIn')"
              >
                登 录
              </a>
              <div
                v-else
                class="flex -space-x-2 overflow-hidden cursor-pointer hover:ring-indigo-600 hover:ring-2 hover:ring-offset-4 hover:ring-offset-white rounded-full"
              >
                <img
                  alt="userImage"
                  class="inline-block h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
    <!--      !-->
  </div>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import { ArrowLeftOnRectangleIcon, Bars3Icon, Cog6ToothIcon, PencilSquareIcon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useAccountStore } from "@/stores/account";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useNavStore } from "@/stores/nav";
import { useRouter } from "vue-router";

//*l路由
const router = useRouter();
function f_router_to(to: string): void {
  router.push({ name: to });
}
//*store
const { token } = storeToRefs(useAccountStore());
const { navigation } = useNavStore();
//md的侧边栏 开关量
const mobileMenuOpen = ref(false);

//头像显示 开关量
const is_signIn = token;

//注销账号
function f_signOut(): void {
  useAccountStore().signOut();
}
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
