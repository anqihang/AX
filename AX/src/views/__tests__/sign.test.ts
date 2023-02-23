import { describe, expect, it } from "vitest";
import SignIn from "../SignIn.vue";
import { mount } from "@vue/test-utils";

describe("signIn Component", () => {
  it("test account signIn", async () => {
    //获取组件
    const wrapper = mount(SignIn);
    //input设置值
    await wrapper
      .get('[data-test="account_email"]')
      .setValue("1711404616@qq.com");
    await wrapper.get('[data-test="account_pwd"]').setValue("ANqihang2000.");
    //触发事件
    // await wrapper.get('[data-test="account_form"]').trigger("submit");
    await wrapper.get('[data-test="button_signIn"]').trigger("click");
    //断言
    // expect(wrapper.get('[data-test="result"]').text()).toContain(
    //   "email:1711404616@qq.com password:ANqihang2000."
    // );
    // console.log(wrapper.emitted("submit"));
    expect(wrapper.emitted("submit")?.[0][0]).toEqual([
      {
        email: "1711404616@qq.com",
        pwd: "ANqihang2000.",
      },
    ]);
  });
});
