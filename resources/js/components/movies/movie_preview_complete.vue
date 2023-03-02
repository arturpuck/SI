<template>
  <fixed-shadow-container v-show="showPreview">
    <movie-preview></movie-preview>
  </fixed-shadow-container>
</template>

<script lang="ts">
import FixedShadowContainer from "@jscomponents/decoration/fixed_shadow_container.vue";
import MoviePreview from "@jscomponents/movies/movie_preview.vue";

export default {
  name : 'movie-preview-complete',

  data() {
    return {
      showPreview: false
    }
  },

  components: { 
    FixedShadowContainer, 
    MoviePreview 
  },

  methods : { 
    showMoviePreview(): void {
    this.showPreview = true;
  },

  hideMoviePreview(): void {
    this.showPreview = false;
  }
  },

  created() {
    //@ts-ignore
    this.emitter.on("showPreview", this.showMoviePreview);
    //@ts-ignore
    this.emitter.on("closePreview", this.hideMoviePreview);
  }
}
</script>

<style lang="scss"></style>
