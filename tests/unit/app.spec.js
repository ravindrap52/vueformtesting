import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import App from "@/App.vue";
import Login from "@/views/Login.vue";
import flushPromises from "flush-promises";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("App.vue", () => {
  it("trigger event", async () => {
    const storeConfig = {
      actions: {
        userLogin: jest.fn()
      },
      state: {}
    };
    const store = new Vuex.Store(storeConfig);
    store.dispatch = jest.fn(() => Promise.resolve());
    const wrapper = shallowMount(App, {
      localVue,
      attachToDocument: true,
      mocks: {
        $store: store
      }
    });
    wrapper.find(Login).vm.$emit("form-submitted");
    await flushPromises();
    let data;
    expect(wrapper.vm.$store.dispatch).toHaveBeenCalledWith("userLogin", data);
  });
});
