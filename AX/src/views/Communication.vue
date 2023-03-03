<template>
  <div class="h-auto" style="background-color: #f1f2f3">
    <div class="ax-w-max-2560 mx-auto shadow bg-white min-h-screen">
      <Nav></Nav>
      <main class="w-10/12 mx-auto min-h-screen">
        <!--        * x虚化遮罩层-->
        <div class="ax-bg absolute bg-black bg-opacity-10 backdrop-blur backdrop-filter w-full min-h-screen"></div>
        <!--          *Tabs-->
        <div class="w-full px-0 py-16 sm:px-4 flex">
          <TabGroup vertical>
            <div class="flex flex-col space-x-1 rounded-xl px-1 w-2/12">
              <TabList class="flex flex-col space-x-1 rounded-xl bg-blue-900/20 p-1 w-auto">
                <Tab v-for="category in Object.keys(categories)" :key="category" v-slot="{ selected }" as="template">
                  <button
                    :class="[
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected ? 'bg-white shadow' : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
                    ]"
                    class="!m-0"
                  >
                    {{ category }}
                  </button>
                </Tab>
              </TabList>
            </div>
            <TabPanels class="ml-2 flex-1">
              <TabPanel
                v-for="(posts, idx) in Object.values(categories)"
                :key="idx"
                :class="[
                  'rounded-xl bg-white/[0.5] p-3',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                ]"
              >
                <ul>
                  <li v-for="post in posts" :key="post.id" class="relative rounded-md p-3 hover:bg-gray-100">
                    <h3 class="text-sm font-medium leading-5">
                      {{ post.title }}
                    </h3>

                    <ul class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                      <li>{{ post.date }}</li>
                      <li>&middot;</li>
                      <li>{{ post.commentCount }} comments</li>
                      <li>&middot;</li>
                      <li>{{ post.shareCount }} shares</li>
                    </ul>

                    <a
                      :class="[
                        'absolute inset-0 rounded-md',
                        'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                      ]"
                      href="#"
                    />
                  </li>
                </ul>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/vue";
import Nav from "@/components/Nav.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";

// *路由
const router = useRouter();

const categories = ref({
  Recent: [
    {
      id: 1,
      title: "Does drinking coffee make you smarter?",
      date: "5h ago",
      commentCount: 5,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: "Is tech making coffee better or worse?",
      date: "Jan 7",
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: "The most innovative things happening in coffee",
      date: "Mar 19",
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
    {
      id: 3,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
    {
      id: 4,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
});
</script>

<style lang="scss" scoped>
main {
  background-image: url("../../maonuo.jpg");
}
</style>
