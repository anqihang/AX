import router from "./index";
import { getToken } from "@/utils/token";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  console.log(1);
  if (getToken()) {
    console.log(to);
    switch (to.name) {
      case "signIn":
        {
          next({ name: "home" });
        }
        break;
    }
  } else {
    next();
  }
});
router.afterEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, failure) => {
  console.log(2);
});
