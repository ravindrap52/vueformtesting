import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import flushPromises from "flush-promises";
import App from "@/App.vue";
import merge from "lodash.merge";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("App.vue", () => {
  function createStore(overrides) {
    const defaultStoreConfig = {
      actions: {
        userLogin: jest.fn()
      },
      state: {}
    };
    return new Vuex.Store(merge(defaultStoreConfig, overrides));
  }
  function createWrapper(overrides) {
    const defaultMountingOptions = {
      localVue,
      store: createStore()
    };
    return shallowMount(App, merge(defaultMountingOptions, overrides));
  }
  it("dispatches fetchListData with $route.params.type", async () => {
    expect.assertions(1);
    const store = createStore();
    store.dispatch = jest.fn();
    const data = { email: "ravi@gmail.com", password: "test" };
    createWrapper(store);
    await flushPromises();
    console.log(store.dispatch);
    expect(store.dispatch).toHaveBeenCalledWith("userLogin", data);
  });
});
