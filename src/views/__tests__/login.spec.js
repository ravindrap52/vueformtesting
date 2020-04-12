import { shallowMount, createLocalVue } from "@vue/test-utils";
import Login from "../Login.vue";
import Vuelidate from "vuelidate";

const localVue = createLocalVue();
localVue.use(Vuelidate);

describe("Login.vue", () => {
  it.only("emit formsubmitted event and check the payload", () => {
    const wrapper = shallowMount(Login, {
      localVue,
      attachToDocument: true
    });
    const email = wrapper.find('[data-testid="email"]');
    email.setValue("ravi@gmail.com");
    const password = wrapper.find('[data-testid="password"]');
    password.setValue("ravi");
    wrapper.find("[type='submit']").trigger("click");
    const emittedFormEvent = wrapper.emitted("form-submitted");
    expect(emittedFormEvent).toHaveLength(1);
    const payload = { email: "ravi@gmail.com", password: "ravi" };
    expect(wrapper.emitted("form-submitted")[0][0]).toMatchObject(payload);
  });
});
