import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("should render child components", () => {
    const wrapper = shallowMount(App);
  });
});
