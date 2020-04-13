import actions from "../actions";
import { loginUser } from "../../api/api";
import flushPromises from "flush-promises";

jest.mock("../../api/api");

describe("actions", () => {
  it("calls login user and commit the data", async () => {
    expect.assertions(1);
    const userData = { code: "000", status: "success", id: "5e54df5342dd" };
    const loginData = { email: "ravi@gmail.com", password: "test" };
    loginUser.mockImplementation(() => {
      return Promise.resolve(userData);
    });
    const context = {
      commit: jest.fn()
    };
    actions.userLogin(context, loginData);
    await flushPromises();
    expect(context.commit).toHaveBeenCalledWith("SETUSER", userData);
  });
});
