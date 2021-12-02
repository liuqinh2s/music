<template>
  <Search></Search>
  <AudioPlayer />
</template>

<script>
import Search from "./components/Search.vue";
import AudioPlayer from "./components/AudioPlayer.vue";

export default {
  name: "App",
  components: {
    Search,
    AudioPlayer,
  },
};
</script>

<style>
</style>
