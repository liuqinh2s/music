<template>
  <Search />
  <AudioPlayer />
</template>

<script>
import AudioPlayer from "./components/AudioPlayer.vue";
import Search from "./components/Search.vue";

export default {
  name: "App",
  components: {
    AudioPlayer,
    Search,
  },
};
</script>

<style>
</style>
