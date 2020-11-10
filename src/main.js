import Vue from "vue";
import ElementUI from "element-ui";
import "../element-variables.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(ElementUI);

let vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  let loading = vm.$loading();
  setTimeout(() => {
    loading.close();
    next();
  }, 1000 * Math.random());
});
