import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import App from "@/App.vue";
import Login from "@/views/Login.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("App.vue", () => {
  it("trigger event", () => {
    const storeConfig = {
      actions: {
        userLogin: jest.fn()
      },
      state: {}
    };
    const store = new Vuex.Store(storeConfig);
    const wrapper = shallowMount(App, {
      localVue,
      attachToDocument: true,
      mocks: {
        $store: store
      }
    });
    wrapper.find(Login).vm.$emit("form-submitted");
  });
});
