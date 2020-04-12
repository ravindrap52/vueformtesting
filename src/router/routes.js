import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

export default [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  }
];
