<template>
  <div class="track-info">
    <img
      :class="{ artwork: true, playing: true }"
      :src="imgSrc"
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
      imgSrc: "",
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
    this.title = this.$route.query.title;
    this.artist = this.$route.query.artist;
    const promise1 = api.getSongDetail(this.$route.query.audioId);
    const promise2 = api.getSongUrl(this.$route.query.audioId);
    Promise.all([promise1, promise2]).then((values) => {
      console.log(values);
      this.imgSrc = values[0].songs[0].al.picUrl;
      this.audio.src = values[1][0].url;
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
.track-info {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
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
.artwork {
  border-radius: 50%;
  display: block;
  height: 200px;
  width: 200px;
}
.playing {
  animation: rotate 10s linear infinite;
}
.title {
  font-weight: 700;
  margin-bottom: 4px;
}
.artist {
  font-weight: 300;
  margin-top: 0;
}
</style>