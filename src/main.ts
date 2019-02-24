import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store/store";
import VueRx from "vue-rx";

Vue.config.productionTip = false;

Vue.use(VueRx);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
