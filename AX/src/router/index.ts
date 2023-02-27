import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
import { getToken } from "@/utils/token";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      name: "signIn",
      path: "/signIn",
      component: () => import("@/views/SignIn.vue"),
    },
    {
      name: "signUp",
      path: "/signUp",
      component: () => import("@/views/SignUp.vue"),
    },
  ],
});

export default router;

//!
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (getToken()) {
    switch (to.name) {
      case "signIn":
        next({ name: "home" });
        break;
      default:
        next();
        break;
    }
  } else {
    next();
  }
});
