import { createWebHistory, createRouter } from "vue-router";

// TODO qui importiamo componenti
import HomePage from "../pages/HomePage.vue";

import Portfolio from "../pages/Portfolio.vue";

const router = createRouter({
  // TODO qui aggiungiamo la history
  history: createWebHistory(),

  // TODO qui aggiungiamo le rotte
  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: Portfolio,
    },
  ],
});

export { router };
