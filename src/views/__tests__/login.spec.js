import { shallowMount, createLocalVue } from "@vue/test-utils";
import Login from "@/views/Login.vue";
import Vuelidate from "vuelidate";

const localVue = createLocalVue();
localVue.use(Vuelidate);

describe("Login.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Login, {
      localVue
    });
  });
  it("initialize Login Component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it("trigger submit button and verify form is invalid", () => {
    const submitButton = wrapper.find("button");
    // wrapper.find("#email").setValue("ravi@gmail.com");
    // wrapper.find("#password").setValue("ravi");
    submitButton.trigger("submit");
    expect(wrapper.vm.$v.$invalid).toBeTruthy();
  });
});
