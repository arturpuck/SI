<template>
  <fixed-shadow-container v-show="showPreview">
    <movie-preview></movie-preview>
  </fixed-shadow-container>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import Translator from "@jsmodules/translator.js";
import FixedShadowContainer from "@jscomponents/decoration/fixed_shadow_container.vue";
import MoviePreview from "@jscomponents/movies/movie_preview.vue";

@Options({
  components: { FixedShadowContainer, MoviePreview },
  name: "MoviePreviewComplete",
})
export default class MoviePreviewComplete extends Vue {
  private showPreview: boolean = false;

  showMoviePreview(): void {
    this.showPreview = true;
  }

  hideMoviePreview(): void {
    this.showPreview = false;
  }

  created() {
    //@ts-ignore
    this.emitter.on("showPreview", this.showMoviePreview);
    //@ts-ignore
    this.emitter.on("closePreview", this.hideMoviePreview);
  }
}
</script>

<style lang="scss"></style>
