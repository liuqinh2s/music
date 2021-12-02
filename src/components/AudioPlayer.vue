<template>
  <div class="track-info">
    <img
      :class="{ artwork: true, playing: isPlaying }"
      :src="image"
      :alt="`track artwork for ${title} by ${artist}`"
    />
    <h2 class="title">{{ title }}</h2>
    <h3 class="artist">{{ artist }}</h3>
    <AudioControls />
    <input
      type="range"
      :value="trackProgeress"
      step="1"
      min="0"
      :max="duration"
      class="progress"
      @change="onScrub"
      @mouseup="onScrubEnd"
      @keyup="onScrubEnd"
      style="background: trackStyling"
    />
  </div>
</template>
<script>
import AudioControls from "./AudioControls.vue";
import ref from "vue";
import api from "@/api/api";

export default {
  setup() {
    api.getSongUrl(1461725161).then((res) => {
      console.log(res);
    });
    const audio = ref(new Audio(""));
    return {
      audio,
    };
  },
  data() {
    return {
      isPlaying: true,
      image: "",
      title: "",
      artist: "",
    };
  },
  components: {
    AudioControls,
  },
};
</script>
<style scoped>
</style>