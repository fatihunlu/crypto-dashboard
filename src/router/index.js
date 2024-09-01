import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "coins",
      component: () => import("../views/Coins.vue"),
    },
    {
      path: "/trendings",
      name: "trendings",
      component: () => import("../views/Trendings.vue"),
    },
  ],
});

export default router;