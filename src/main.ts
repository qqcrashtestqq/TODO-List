import { createApp } from "vue";
import "./assets/scss/index.scss";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router).use(createPinia()).mount("#app");
// createApp(App).mount("#app");
