import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import storeConfig from "./store/store.config";

import Vuelidate from "vuelidate";

Vue.use(Vuelidate);
Vue.use(Vuex);
const store = new Vuex.Store(storeConfig);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
