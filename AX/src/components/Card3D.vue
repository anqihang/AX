<!--
  3d可转动卡片
  props:
        width:number,height:number,url:string

-->

<template>
  <div class="out flex justify-center">
    <div
      ref="card"
      :style="{
        transform: `rotateY(${8 * (offsetX / (props.width / 2))}deg) rotateX(${
          -8 * (offsetY / (props.height / 2))
        }deg)`,
      }"
      class="card"
    >
      <div
        :style="{
          transform: `translateX(${-css_props_padding * (offsetX / (props.width / 2))}px) translateY(${
            -css_props_padding * (offsetY / (props.height / 2))
          }px)`,
          padding: `${css_props_padding}px`,
          top: `${-1 * css_props_padding}px`,
          left: `${-1 * css_props_padding}px`,
          backgroundImage: `url(${props.url})`,
        }"
        class="img"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from "vue";

//*props基于类型的声明
interface interf_Props {
  width: number;
  height: number;
  url: string;
}

// const props = defineProps<interf_Props>();
// *可以给定默认值
const props = withDefaults(defineProps<interf_Props>(), { width: 240, height: 320, url: "../../public/maonuo,jpg" });

const css_props_width = ref(props.width).value + "px";
const css_props_height = ref(props.height).value + "px";
// *拿小的边的宽度的1/12
const css_props_padding = ref(props.width > props.height ? props.height / 12 : props.width / 12);

const card = ref<HTMLDivElement | null>(null);
//?鼠标相对卡片中心的偏移量
let offsetX = ref<number>(0);
let offsetY = ref<number>(0);
nextTick(() => {
  const cardWidth: number = card.value!.offsetWidth;
  const cardHeight: number = card.value!.offsetHeight;
  // const cardLeft: number = card.value!.offsetLeft;
  // const cardTop: number = card.value!.offsetTop;
  // *div相对视口的位置
  const cardX = card.value!.getBoundingClientRect().left;
  const cardY = card.value!.getBoundingClientRect().top;
  // *移动鼠标事件
  card.value!.addEventListener("mousemove", (e: MouseEvent) => {
    offsetX.value = e.pageX - cardX - cardWidth / 2;
    offsetY.value = e.pageY - cardY - cardHeight / 2;
  });
  // *离开卡片，恢复初始状态
  card.value!.addEventListener("mouseleave", () => {
    offsetX.value = 0;
    offsetY.value = 0;
  });
});
</script>

<style lang="scss" scoped>
.out {
  //3d
  perspective: 800px;
  //是否和别的物体之间重叠交叉穿透
  //transform-style: preserve-3d;
  padding: 5px;
  width: v-bind(css_props_width);
  height: v-bind(css_props_height);
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 66%) 0 30px 60px 0, inset #333 0 0 0 5px, inset rgb(255 255 255 / 50%) 0 0 0 6px;
  transition: all 1s ease-in-out 0s;
}

.img {
  box-sizing: unset;
  position: absolute;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  //transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95), opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
  transition: 1s ease-in-out 0s, opacity 2s ease 0s;
}
.card:hover {
  box-shadow: rgb(255 255 255 / 0.2) 0 0 40px 5px, rgb(255 255 255 / 1) 0 0 0 1px, rgb(0 0 0 / 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px, inset white 0 0 0 6px;
}
.card:hover > .img {
  opacity: 0.8;
}
</style>
