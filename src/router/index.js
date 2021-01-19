import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/element",
    name: "Element",
    component: () => import("../views/Element.vue")
  },
  {
    path: "/sass",
    name: "Sass",
    component: () => import("../views/Sass.vue")
  },
  {
    path: "/brush-javaScript",
    name: "javaScript",
    component: () => import("../views/Brush-javaScript.vue")
  },
  {
    path: "/css",
    name: "css",
    component: () => import("../views/css.vue")
  },
  {
    path: "/grid",
    name: "grid",
    component: () => import("../views/Grid.vue")
  },
  {
    path: "/rem",
    name: "rem",
    component: () => import("../views/Rem.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
