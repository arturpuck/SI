<template>
  <li class="movie-box">
    <a
      v-bind:href="movieURL"
      v-on:mouseenter="toggleImages"
      v-on:mouseleave="toggleImages"
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
          <span v-text="viewsTranslated"></span>
          <span v-text="views"></span>
        </span>
        <span v-on:click="showPreview" class="preview-control movie-details-row">
          <magnifier-icon class="magnifier-icon"></magnifier-icon>
          <span v-text="preViewTranslated"></span>
        </span>
      </div>
      <div v-if="aditionalInformation" class="movie-details-and-controls">
        <span v-if="pornstars">
          <span v-for="pornstar in pornstars" v-bind:key="pornstar">
            <star-yellow-icon class="star-icon"></star-yellow-icon>
            <a
              v-bind:href="`/gwiazda-porno/profil/${getPornstarSlug(pornstar)}`"
              class="pornstar-profile-link"
              v-text="`${pornstar} `"
            ></a>
          </span>
        </span>
        <icon-polish-flag v-bind:title="iconDecription" v-if="isTranslatedToPolish" />
      </div>
    </div>
  </li>
</template>

<script>
import IconPolishFlag from "@jscomponents-decoration/flags/icon_polish_flag.vue";
import Slugifier from "@jsmodules/slugifier";
import PlayRoundIcon from "@svgicon/play_round_icon.vue";
import MagnifierIcon from "@svgicon/magnifier_icon";
import StarYellowIcon from "@svgicon/star_yellow_icon";
import Config from "@config/paths/movies";
import ExpectShadowCircle from "@jscomponents-decoration/expect_shadow_circle";
//use teleport instead???

export default {
  name: "movie-box",

  components: {
    IconPolishFlag,
    PlayRoundIcon,
    MagnifierIcon,
    StarYellowIcon,
    ExpectShadowCircle,
  },

  data() {
    return {
      translator: null,
      fetchingInProgress: false,
      showsGIF: false,
    };
  },

  methods: {
    showPreview(event) {
      this.$root.$emit("showPreview", { id: this.id, title: this.title });
    },

    getPornstarSlug(pornstarNickname) {
      return pornstarNickname.replaceAll(" ", "-");
    },

    toggleImages() {
      this.fetchingInProgress = true;
      this.showsGIF = !this.showsGIF;
    },

    imageHasBeenLoaded() {
      this.fetchingInProgress = false;
    },
  },

  computed: {
    movieURL() {
      return `/film/${Slugifier(this.title)}`;
    },

    movieImageURL() {
      return this.showsGIF
        ? `${Config.moviePreviewFolder}${this.id}.gif`
        : `${Config.movieImagesFolder}${this.id}.jpg`;
    },

    viewsTranslated() {
      return `${this.translator.translate("views")} : `;
    },

    preViewTranslated() {
      return `${this.translator.translate("preview")}`;
    },

    aditionalInformation() {
      return this.isTranslatedToPolish || this.pornstars;
    },

    pornstarsListTranslated() {
      return this.pornstars.join(", ");
    },

    iconDecription() {
      return this.translator.translate("movie_translated_to_polish");
    },
  },

  props: {
    duration: {
      required: true,
      type: String,
    },

    title: {
      required: true,
      type: String,
    },

    id: {
      required: true,
      type: Number,
    },

    views: {
      required: true,
      type: Number,
    },

    isTranslatedToPolish: {
      required: false,
      type: Boolean,
      default: false,
    },

    pornstars: {
      required: false,
      default: "",
    },
  },

  created() {
    this.translator = this.$root.translator;
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

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
