<template>
  <li class="movie-box">
    <a
      v-bind:href="movieURL"
      v-on:mouseenter="showShortcut"
      v-on:mouseleave="hideShortcut"
      ref="movieBox"
      class="movie-link"
    >
      <img
        class="movie-image"
        v-bind:src="movieImageURL"
        v-on:load="imageHasBeenLoaded"
        v-bind:alt="title"
      />
      <time v-text="duration" class="movie-duration"></time>
      <expect-shadow-circle v-show="fetchingInProgress"></expect-shadow-circle>
    </a>
    <div class="movie-data">
      <a v-bind:href="movieURL" v-text="title" class="movie-description"></a>
      <div class="movie-details-and-controls">
        <span class="movie-details-row">
          <play-round-icon class="play-icon"></play-round-icon>
          <span v-text="translator['views']"></span>
          <span class="detail-separator">:</span>
          <span v-text="views"></span>
        </span>
        <span
          v-on:click="showPreview"
          class="preview-control movie-details-row"
        >
          <magnifier-icon class="magnifier-icon"></magnifier-icon>
          <span v-text="translator['preview']"></span>
        </span>
      </div>
      <div v-if="aditionalInformation" class="movie-details-and-controls">
        <span v-if="pornstars">
          <span v-for="pornstar in pornstars" v-bind:key="pornstar">
            <star-full-icon class="star-icon"></star-full-icon>
            <a
              v-bind:href="`/gwiazda-porno/profil/${getPornstarSlug(pornstar)}`"
              class="pornstar-profile-link"
              v-text="`${pornstar} `"
            ></a>
          </span>
        </span>
        <icon-polish-flag
          v-bind:title="translator['movieTranslatedToPolish']"
          v-if="isTranslatedToPolish"
        />
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import IconPolishFlag from "@jscomponents-decoration/flags/icon_polish_flag.vue";
import Slugifier from "@jsmodules/slugifier";
import PlayRoundIcon from "@svgicon/play_round_icon.vue";
import MagnifierIcon from "@svgicon/magnifier_icon";
import StarFullIcon from "@svgicon/star_full_icon";
import Config from "@config/paths/movies";
import ExpectShadowCircle from "@jscomponents-decoration/expect_shadow_circle";
import Translations from "@jsmodules/translations/components/movie_box";

@Options({
  name: "MovieBox",
  components: {
    IconPolishFlag,
    PlayRoundIcon,
    MagnifierIcon,
    StarFullIcon,
    ExpectShadowCircle,
  },
})
export default class MovieBox extends Vue {
  @Prop({
    type: String,
    required: true,
  })
  readonly duration: string;

  @Prop({
    type: String,
    required: true,
  })
  readonly title: string;

  @Prop({
    type: Number,
    required: true,
  })
  readonly id: number;

  @Prop({
    type: Number,
    required: true,
  })
  readonly views: number;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  readonly isTranslatedToPolish: boolean;

  @Prop({
    required: false,
    default: "",
  })
  readonly pornstars: string | string[];

  private translator = Translations;
  private fetchingInProgress = false;
  private showsGIF = false;
  private ontouchStarted = false;

  mounted() {
    //@ts-ignore
    this.emitter.on("anotherBoxShowsShortcut", this.anotherBoxShowsShortcutHandler);
    (<HTMLElement>this.$refs.movieBox).addEventListener('touchstart', this.touchStartHandler); //somehow vue currently does not provide v-on:touchstart
  }

  touchStartHandler() {
    console.log('touchstart odpalono');
    //@ts-ignore
    this.emitter.emit("anotherBoxShowsShortcut", this.id);
    this.ontouchStarted = true;
    this.fetchingInProgress = true;
    this.showsGIF = true;
  }

  anotherBoxShowsShortcutHandler(movieID: number) {
    if (movieID != this.id) {
      console.log(movieID, this.id);
      this.showsGIF = false;
      this.fetchingInProgress = false;
    }
  } 

  showPreview(event) {
    //@ts-ignore
    this.emitter.emit("showPreview", { id: this.id, title: this.title });
  }

  getPornstarSlug(pornstarNickname) {
    return pornstarNickname.replace(/ /g, "-");
  }

  hideShortcut() {
    if (!this.ontouchStarted) {
      console.log('hideShortcut odpalono');
      this.fetchingInProgress = false;
      this.showsGIF = false;
    }
  }
  showShortcut() {
    if (!this.ontouchStarted) {
      console.log("showShortcutOdpalono");
      this.fetchingInProgress = true;
      this.showsGIF = true;
    }
  }

  imageHasBeenLoaded() {
    this.fetchingInProgress = false;
  }

  get movieURL() {
    return `/film/${Slugifier(this.title)}`;
  }

  get movieImageURL() {
    return this.showsGIF
      ? `${Config.moviePreviewFolder}${this.id}.gif`
      : `${Config.movieImagesFolder}${this.id}.jpg`;
  }

  get aditionalInformation() {
    return this.isTranslatedToPolish || this.pornstars;
  }
}
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.detail-separator {
  margin: 0 5px;
}

.movie-image {
  width: 280px;
  display: block;
  height: 158px;
  border-radius: 3px;
}

.expect-bar {
  margin: 0;
  width: 100%;
}

.expect-circles-inner-container {
  width: 10%;
  height: 10%;
}

.movie-details-row {
  display: inline-flex;
  align-items: center;
}

.pornstar-profile-link {
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
}

.movie-link {
  width: 280px;
  display: block;
  height: 158px;
  text-decoration: none;
  border-radius: 3px;
  position: relative;
  background-size: cover;
  &:hover {
    box-shadow: 2px 2px 2px 2px black;
  }
}

.movie-duration {
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
  color: white;
  padding: 2px;
  font-family: Aldrich;
  background: #0000005c;
}

.movie-description {
  display: block;
  padding-top: 2px;
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}

.movie-box {
  color: white;
  font: {
    size: 16px;
    family: "Exo 2", sans-serif;
  }
}

.movie-details-and-controls {
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
}

.magnifier-icon {
  fill: #df1c4d;
  width: 16px;
  height: auto;
  margin-right: 4px;
}

.star-icon {
  width: 16px;
  height: auto;
  margin: 0 3px;
  fill: gold;
}

.preview-control {
  cursor: pointer;
}

.play-icon {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 4px;
  fill: #ef0244;
}

.relative-shadow-container {
  z-index: 0;
}

@media (max-width: 870px) {
  .movie-image,
  .movie-link {
    width: 232px;
    height: 120px;
  }
}
</style>
