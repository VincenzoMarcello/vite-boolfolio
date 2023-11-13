import { createWebHistory, createRouter } from "vue-router";

// TODO qui importiamo componenti
import HomePage from "../pages/HomePage.vue";

import PortfolioPage from "../pages/PortfolioPage.vue";

import ProjectDetailPage from "../pages/ProjectDetailPage.vue";

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
      component: PortfolioPage,
    },
    {
      name: "project-detail",
      path: "/portfolio/:id",
      component: ProjectDetailPage,
    },
  ],
});

export { router };
