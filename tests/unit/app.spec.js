import { shallowMount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";
import Vuex from "vuex";
import App from "@/App.vue";
import Login from "@/views/Login.vue";
import flushPromises from "flush-promises";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe("App.vue", () => {
  it("trigger event", async () => {
    const storeConfig = {
      actions: {
        userLogin: jest.fn()
      },
      state: {}
    };
    const $route = {
      path: "/dashboard"
    };
    const store = new Vuex.Store(storeConfig);
    store.dispatch = jest.fn(() => Promise.resolve());
    const wrapper = shallowMount(App, {
      localVue,
      attachToDocument: true,
      mocks: {
        $store: store,
        $route
      }
    });
    wrapper.find(Login).vm.$emit("form-submitted");
    await flushPromises();
    let data;
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith("userLogin", data);
  });
});
