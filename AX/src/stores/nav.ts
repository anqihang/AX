import { defineStore } from "pinia";

export const useNavStore = defineStore("nav", () => {
  //顶部中间的选项
  const navigation = [
    { name: "产 品", href: "#" },
    { name: "工 具", href: "tool" },
    { name: "交 流", href: "communication" },
    { name: "关 于", href: "introduction" },
  ];
  return { navigation };
});
