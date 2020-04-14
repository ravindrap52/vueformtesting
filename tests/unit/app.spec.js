import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import flushPromises from "flush-promises";
import App from "@/App.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("App.vue", () => {
  let storeOptions;
  let store;
  beforeEach(() => {
    storeOptions = {
      actions: {
        userLogin: jest.fn(() => Promise.resolve())
      }
    };
  });
  store = new Vuex.Store(storeOptions);
  it("dispatches userlogin with login data", async () => {
    // expect.assertions(1);
    store.dispatch = jest.fn(() => Promise.resolve());
    shallowMount(App, {
      mocks: {
        localVue,
        store
      }
    });
    await flushPromises();
    // expect(store.dispatch).toHaveBeenCalledWith("userLogin");
  });
});
