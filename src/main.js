import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Search, Tab, Tabs, Toast, Empty, List } from "vant";
import "vant/lib/index.css";

const app = createApp(App);
app
  .use(store)
  .use(router)
  .use(Search)
  .use(Tab)
  .use(Tabs)
  .use(Toast)
  .use(Empty)
  .use(List)
  .mount("#app");
