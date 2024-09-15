import { createRouter, createWebHistory } from "vue-router";

import Coins from "../views/Coins.vue";
import CoinDetail from "../views/CoinDetail.vue";
import Trendings from "../views/Trendings.vue";


const router = createRouter({
  history: createWebHistory('/crypto-dashboard/'),
  routes: [
    {
      path: "/",
      name: "coins",
      component: () => import("../views/Coins.vue"),
    },
    {
      path: "/:id",
      name: "coin-detail",
      component: CoinDetail,
    },
    {
      path: "/trendings",
      name: "trendings",
      component: () => import("../views/Trendings.vue"),
    },
  ],
});

export default router;