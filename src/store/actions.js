import { loginUser } from "../api/api";

export default {
  userLogin: async ({ commit }, loginData) => {
    const userData = await loginUser(loginData);
    commit("SETUSER", userData);
    return userData;
  }
};
