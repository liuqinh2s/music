<template>
  <div class="track-info">
    <img
      :class="{ artwork: true, playing: isPlaying }"
      :src="image"
      :alt="`track artwork for ${title} by ${artist}`"
    />
    <h2 class="title">{{ title }}</h2>
    <h3 class="artist">{{ artist }}</h3>
    <div class="footer">
      <input
        type="range"
        :value="trackProgress"
        step="1"
        min="0"
        :max="audio.duration"
        class="progress"
        @change="
          (e) => {
            onScrub(e.target.value);
          }
        "
        @mouseup="onScrubEnd"
        @keyup="onScrubEnd"
        style="background: trackStyling"
      />
      <AudioControls
        :isPlaying="isPlaying"
        :onPlayPauseClick="onPlayPauseClick"
        :onPrevClick="onPrevClick"
        :onNextClick="onNextClick"
      />
    </div>
  </div>
</template>
<script>
import AudioControls from "./AudioControls.vue";
import api from "@/api/api";

export default {
  data() {
    return {
      isPlaying: false,
      image: "",
      title: "",
      artist: "",
      audio: new Audio(),
      trackProgress: 0,
      interval: null,
    };
  },
  methods: {
    onPlayPauseClick(value) {
      this.isPlaying = value;
    },
    onPrevClick() {},
    onNextClick() {},
    onScrub(value) {
      clearInterval(this.interval);
      this.audio.currentTime = value;
      this.trackProgress = this.audio.currentTime;
    },
    onScrubEnd() {
      if (this.isPlaying) {
        this.startTimer();
      }
    },
    startTimer() {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.audio.ended) {
          this.toNextTrack();
        } else {
          this.trackProgress = this.audio.currentTime;
        }
      }, 100);
    },
    toNextTrack() {},
  },
  watch: {
    isPlaying() {
      if (this.isPlaying) {
        this.audio.play();
        this.startTimer();
      } else {
        this.audio.pause();
      }
    },
  },
  created() {
    api.getSongUrl(this.$route.query.audioId).then((res) => {
      console.log(res);
      this.audio.src = res[0].url;
    });
  },
  mounted() {},
  unmounted() {
    this.audio.pause();
    clearInterval(this.interval);
  },
  components: {
    AudioControls,
  },
};
</script>
<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.progress {
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto 15px;
}
</style>