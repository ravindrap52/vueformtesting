import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginUserID: ""
  },
  mutations: {
    SAVE_LOGIN_INFO(state, data) {
      state.loginUserID = data.id;
    }
  },
  actions: {
    async login({ commit }, loginInfo) {
      const response = await axios.post(
        "http://localhost:9999/api/save_login_info/login_info",
        loginInfo
      );
      if (response.status === 200 && response.data.code === "000") {
        commit("SAVE_LOGIN_INFO", response.data);
      }
    }
  },
  modules: {}
});
