<template>
  <div class="movie-preview-container">
    <img
      v-bind:src="currentFramePath"
      v-bind:alt="movieAlt"
      class="movie-preview-frame"
    />
    <div class="movie-preview-controls-and-decoration">
      <div
        aria-hidden="true"
        class="television-decoration green-light preview-control-element"
      ></div>
      <button
        v-bind:title="playButtonCaption"
        class="preview-control-element play-button"
      >
        <span v-text="playButtonCaption" class="play-button-description"></span>
      </button>
      <input
        v-model="currentFrame"
        min="1"
        max="100"
        type="range"
        class="movie-frame-selection preview-control-element"
        name="movie-frame-selection"
        id="movie-frame-selection"
      />
      <button-close
        class="preview-close-icon"
        title="close_movie_preview"
        v-on:click.native="hidePreview"
      />
    </div>
    <div aria-hidden="true" class="trapeze-decoration">
      <empire-logo class="empire-logo--modified"></empire-logo>
    </div>
  </div>
</template>

<script lang="ts">
import PreviewMovieData from "@interfaces/movies/preview_movie_data";

export default {
  data() {
    return {
      movieID: 0,
      currentFrame: 1,
      title: "",
    };
  },

  methods: {
    showMoviePreview(movie: PreviewMovieData): void {
      this.currentFrame = 1;
      this.movieID = movie.id;
      this.title = movie.title;
    },

    hidePreview(): void {
      this.$root.$emit("closePreview");
    },
  },

  computed: {
    movieAlt(): string {
      return `${this.translator.translate("movie_frame")} : ${this.title}`;
    },

    currentFramePath(): string {
      return `/images/movies/preview/${this.movieID}/${this.movieID} ${String(
        this.currentFrame
      ).padStart(3, "0")}.jpg`;
    },

    playButtonCaption(): string {
      return this.translator.translate("play_movie_preview");
    },
  },

  mounted() {
    this.$root.$on("showPreview", this.showMoviePreview);
    this.translator = this.$root.translator;
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";
@mixin television-decoration {
  margin-left: 5px;
  min-width: 20px;
  min-height: 20px;
  width: 2vw;
  height: 2vw;
}

$transparent-border-width: 3vw;
$borders-difference: 0.8vw;

@mixin trapeze-creator-borders($color, $gap: 0px) {
  border-left: calc(#{$transparent-border-width} + #{$gap}) solid transparent;
  border-right: calc(#{$transparent-border-width} + #{$gap}) solid transparent;
  border-top: calc(#{$transparent-border-width} - #{$borders-difference} - #{$gap}) solid
    $color;
  @media (max-width: 450px) {
    border-top-width: calc(#{$transparent-border-width} + 5px);
  }
}

.trapeze-decoration {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%);
  @include trapeze-creator-borders(#2b2929);

  width: 70%;
}

.trapeze-decoration::after {
  content: "";
  width: calc(100% - 2px);
  display: block;
  position: absolute;
  @include trapeze-creator-borders(#0e0e0e, 1px);
  top: -2px;
  left: -3vw;
  transform: translateY(-100%);
}

.empire-logo--modified {
  @include responsive-font(1.5vw, 13px, "", 780px);
  position: absolute;
  transform: translate(-50%, calc(-100% - 1vw));
  z-index: 1;
  left: 50%;
  white-space: nowrap;
}

.play-button {
  display: inline-block;
  border: none;
  background: linear-gradient(#2af92a, #054006);
  clip-path: polygon(0 0, 0 100%, 100% 50%);
  @include television-decoration();
  outline: none;
  cursor: pointer;
}

.play-button-description {
  position: absolute;
  top: -9999px;
  left: 0;
}

.preview-control-element {
  margin-right: 7px;
}

.movie-preview-container {
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  box-shadow: 2px 2px 2px 2px black;
  background: #0e0e0e;
  border: 1px solid #2b2929;
  min-width: 300px;
  padding: 3vw 3vw 1vw;
}

.movie-preview-frame {
  display: block;
  width: 100%;
  height: auto;
  box-shadow: 2px 2px 2px 2px black;
}

.movie-title {
  @include responsive-font();
  overflow: hidden;
  white-space: nowrap;
  color: white;
}

.movie-preview-bar {
  padding: 0.5vw 0;
}

.television-decoration {
  @include television-decoration();
  border-radius: 50%;
}

.preview-close-icon {
  min-width: 25px;
  min-height: 25px;
  width: 2.1vw;
  height: 2.1vw;
}

.green-light {
  background: linear-gradient(#2af92a, #054006);
}

.preview-close-icon {
  margin-left: 7px;
}

.movie-icon {
  color: white;
  margin-right: 8px;
}

.movie-frame-selection {
  flex-grow: 100;
  width: 100%;
  margin: 0 auto;
  -webkit-appearance: none;
  outline: none;
  height: 2vh;
}

@mixin slider-thumb {
  border: 1px solid #000000;
  height: 3vh;
  width: 5%;
  border-radius: 1vh;
  background: rgb(6, 163, 6);
  cursor: pointer;
  margin-top: -0.5vh;
  margin-bottom: -0.5vh;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}

@mixin runnable-track {
  background: black;
  height: 2vh;
}
.movie-frame-selection::-webkit-slider-thumb {
  -webkit-appearance: none;
  @include slider-thumb();
}

.movie-frame-selection::-moz-range-thumb {
  @include slider-thumb();
}

.movie-frame-selection::-webkit-slider-runnable-track {
  @include runnable-track();
}

.movie-frame-selection::-moz-range-track {
  @include runnable-track();
  color: black;
}

.movie-preview-controls-and-decoration {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 1vw 0;
}
</style>
