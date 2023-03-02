import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import SignIn from "../SignIn.vue";
import SignUp from "@/views/SignUp.vue";

describe("signIn Component", () => {
  it("test account signIn", async () => {
    //!获取组件
    const wrapper = mount(SignIn);
    //input设置值
    // const input_email = wrapper.find('[data-test="account_email"]');
    // await input_email.setValue("anqihang");
    //?
    await wrapper.get('[data-test="account_email"]').setValue("1711404616@qq.com");
    await wrapper.get('[data-test="account_pwd"]').setValue("ANqihang2000.");
    await wrapper.get('[data-test="checkbox-remember"]').setValue(true);
    //!触发事件
    // await wrapper.get('[data-test="account_form"]').trigger("submit");
    // await wrapper.get('[data-test="button_signIn"]').trigger("click");
    //*表单提交-阻止默认行为
    await wrapper.find("form").trigger("submit.prevent");
    //!断言
    // expect(wrapper.get('[data-test="result"]').text()).toContain(
    //   "email:1711404616@qq.com password:ANqihang2000."
    // );
    //?
    expect(wrapper.emitted("test")?.[0]).toEqual([
      {
        email: "1711404616@qq.com",
        pwd: "ANqihang2000.",
        rememberMe: true,
      },
    ]);
  });
});
describe("signUp Component", () => {
  it("test account signUp", async () => {
    const wrapper = mount(SignUp);
  });
});
