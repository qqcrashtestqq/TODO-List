import allTasksPage from "../pages/AllTasksPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import HomePage from "../pages/HomePage.vue";

export default [
  { path: "/", name: "home", component: HomePage },
  { path: "/about", name: "about", component: AboutPage },
  { path: "/tasks", name: "like", component: allTasksPage },
];
