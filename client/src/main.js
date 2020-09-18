import Vue from "vue";
import VueResource from "vue-resource";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import router from "./router";
import store from "./store";


Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.prototype.$appUrl = "http://localhost:3000/";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
