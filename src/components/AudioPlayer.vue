<template>
  <div class="track-info">
    <img
      :class="{ artwork: true, playing: isPlaying }"
      :src="image"
      :alt="`track artwork for ${title} by ${artist}`"
    />
    <h2 class="title">{{ title }}</h2>
    <h3 class="artist">{{ artist }}</h3>
    <AudioControls
      :isPlaying="isPlaying"
      :onPlayPauseClick="onPlayPauseClick"
      :onPrevClick="onPrevClick"
      :onNextClick="onNextClick"
    />
  </div>
</template>
<script>
import AudioControls from "./AudioControls.vue";

export default {
  data() {
    return {
      isPlaying: false,
      image: "",
      title: "",
      artist: "",
    };
  },
  methods: {
    onPlayPauseClick() {},
    onPrevClick() {},
    onNextClick() {},
  },
  components: {
    AudioControls,
  },
};
</script>
<style scoped>
</style>