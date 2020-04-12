import { mount, createLocalVue } from "@vue/test-utils";
import Main from "@/components/Main.vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();

describe("Main.vue", () => {
  it("should render child component", () => {
    const wrapper = mount(Main, {
      localVue,
      router,
      stubs: ["router-link", "router-view"]
    });
    const childComponent = wrapper.find(Login);
  });
});
