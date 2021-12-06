import Search from "@/components/Search.vue";
import AudioPlayer from "@/components/AudioPlayer.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "/search",
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/audioPlayer",
    name: "AudioPlayer",
    component: AudioPlayer,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
