import Vue from "vue";
import VueRouter from "vue-router";
import Country from "../views/Country.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:country",
    name: "Country",
    component: Country
  }
];

const router = new VueRouter({
  routes
});

export default router;
