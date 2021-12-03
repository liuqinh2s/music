<template>
  <div class="footer">
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
    <div class="audio-controls">
      <button
        type="button"
        class="previous"
        aria-label="Previous"
        @click="onPrevClick"
      >
        <img :src="previous" />
      </button>
      <button
        type="button"
        className="pause"
        aria-label="Pause"
        @click="onPlayPauseClick"
        v-if="isPlaying"
      >
        <img :src="pause" />
      </button>
      <button
        type="button"
        className="play"
        aria-label="play"
        @click="onPlayPauseClick"
        v-if="!isPlaying"
      >
        <img :src="play" />
      </button>
      <button type="button" class="next" aria-label="Next" @click="onNextClick">
        <img :src="next" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isPlaying: Boolean,
    onPlayPauseClick: Function,
    onPrevClick: Function,
    onNextClick: Function,
  },
  data() {
    return {
      previous: require("@/assets/previous.svg"),
      pause: require("@/assets/pause.svg"),
      play: require("@/assets/play.svg"),
      next: require("@/assets/next.svg"),
    };
  },
};
</script>
<style scoped>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.audio-controls,
.progress {
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto 15px;
}

.audio-controls button {
  border: none;
  background: none;
}

.audio-controls .previous img,
.audio-controls .next img {
  width: 20px;
  height: 20px;
}

.audio-controls .play img,
.audio-controls .pause img {
  height: 40px;
  width: 40px;
}

.audio-controls path {
  fill: var(--white);
}
</style>