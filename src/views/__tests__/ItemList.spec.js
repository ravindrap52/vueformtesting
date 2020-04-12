import { shallowMount } from "@vue/test-utils";
import ItemList from "@/views/ItemList.vue";

describe("ItemList.vue", () => {
  it("should contain hello text", () => {
    const wrapper = shallowMount(ItemList);
    expect(wrapper.find("p").text()).toContain("Hello");
  });
});
