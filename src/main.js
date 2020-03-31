import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import ElementUI from "element-ui";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Router);

new Vue({
  render: h => h(App)
}).$mount("#app");
