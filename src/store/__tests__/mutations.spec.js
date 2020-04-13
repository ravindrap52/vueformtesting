import mutations from "../mutations";

describe("mutations", () => {
  it("set user in state.user", () => {
    const user = {
      id: "5e94c7e244ab1d182804b7f0"
    };
    const state = {
      user: null
    };
    mutations.SETUSER(state, user);
    expect(state.user).toBe(user.id);
  });
});
