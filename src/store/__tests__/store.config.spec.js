import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import cloneDeep from "lodash.clonedeep";
import flushPromises from "flush-promises";
import storeConfig from "../store.config";
import { loginUser } from "../../api/api";

jest.mock("../../api/api");

const localVue = createLocalVue();
localVue.use(Vuex);

describe("store.config.vue", () => {
  it("calling loginUser and set logge-in user id in store.user", async () => {
    expect.assertions(1);
    const userData = { code: "000", status: "success", id: "5e54df5342dd" };
    const loginData = { email: "ravi@gmail.com", password: "test" };
    const clonedStoreConfig = cloneDeep(storeConfig);
    const store = new Vuex.Store(clonedStoreConfig);
    loginUser.mockImplementation(() => {
      return Promise.resolve(userData);
    });
    store.dispatch("userLogin", loginData);
    await flushPromises();
    expect(store.state.user).toEqual(userData.id);
  });
});
