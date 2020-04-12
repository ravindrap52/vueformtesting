import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";
import Header from "@/components/Header.vue";
import Main from "@/components/Main.vue";

describe("App.vue", () => {
  it("should render child components", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find(Header).exists()).toBe(true);
    expect(wrapper.find(Main).exists()).toBe(true);
  });
});
