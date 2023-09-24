import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());

router.beforeEach((to, from, next) => {
  // if user needs to be logged in for these routes
  if (to.meta.requiresAuth) {
    // user is not logged in
    // trying to access the routes that need login
    if (localStorage.getItem("user") === null) {
      next("/login");
    } else {
      next();
    }
  } else {
    // user is logged in
    // trying to access the routes where user can go if they are not logged in
    // like "login" | "signup"
    if (localStorage.getItem("user") === null) {
      next();
    } else {
      next("/");
    }
  }
});

app.use(router);

app.mount("#app");
