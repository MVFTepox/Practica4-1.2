import { createRouter, createWebHistory } from "vue-router";
import home from "../components/Home.vue";

const routes = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: home,
    },
  ],
});

export default routes;
