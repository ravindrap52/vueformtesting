import { loginUser } from "../api/api";

export default {
  userLogin: ({ commit }, { loginData }) => {
    return loginUser(loginData).then(userData => commit("SETUSER", userData));
  }
};
