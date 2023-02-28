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
    {
      name: "introduce",
      path: "/introduce",
      component: () => import("@/views/Introduce.vue"),
    },
  ],
});

export default router;

//!
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (getToken()) {
    console.log(2);
    switch (to.name) {
      case "signIn":
        next({ name: "home" });
        break;
      default:
        next();
        break;
    }
  }
  // else if (to.name !== "home") {
  //   next({ name: "home" });
  // }
  else {
    next();
  }
});
