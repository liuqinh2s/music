<template>
  <div class="audio-controls">
    <button
      type="button"
      class="previous"
      aria-label="Previous"
      @click="onPrevClick"
    >
      <van-icon :name="previous" />
    </button>
    <button
      type="button"
      className="pause"
      aria-label="Pause"
      @click="onPlayPauseClick"
      v-if="isPlaying"
    >
      <van-icon :name="pause" />
    </button>
    <button
      type="button"
      className="play"
      aria-label="play"
      @click="onPlayPauseClick"
      v-if="!isPlaying"
    >
      <van-icon :name="play" />
    </button>
    <button type="button" class="next" aria-label="Next" @click="onNextClick">
      <van-icon :name="next" />
    </button>
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
.audio-controls {
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin: 0 auto 15px;
}

.audio-controls .previous img,
.audio-controls .next img {
  width: 35px;
  height: 35px;
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