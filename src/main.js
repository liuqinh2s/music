import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Search,
  Tab,
  Tabs,
  Toast,
  Empty,
  List,
  Icon,
  Cell,
  CellGroup,
} from "vant";
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
  .use(Cell)
  .use(CellGroup)
  .use(List)
  .use(Icon)
  .mount("#app");
