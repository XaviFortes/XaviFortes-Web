import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
// Check if route exists, if not, redirect to 404 NotFoundView
router.beforeEach((to, from, next) => {
  if (to.matched.length) {
    next();
  } else {
    next({
      name: "NotFound",
      params: { pathMatch: to.path.substring(1).split("/") },
    });
  }
});

app.use(router);

app.mount("#app");
