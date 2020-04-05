import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header.vue";

describe("Header.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Header);
  });
  it("initialize header component", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it("contains img tag", () => {
    expect(wrapper.contains("img")).toBe(true);
  });
  it("img src should be equal to", () => {
    const img = wrapper.find("img");
    expect(img.attributes().src).toMatch(
      "https://shoutrlabs.com/wp-content/themes/argon-theme/public/img/brand/shoutrlabs-logo.svg"
    );
  });
});
