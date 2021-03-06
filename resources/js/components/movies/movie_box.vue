<template>
  <li class="movie-box">
    <a
      v-bind:href="movieURL"
      v-bind:style="{ backgroundImage: mainImageURL }"
      class="movie-main-image"
    >
      <time v-text="duration" class="movie-duration"></time>
    </a>
    <div class="movie-data">
      <a v-bind:href="movieURL" v-text="title" class="movie-description"></a>
      <div class="movie-details-and-controls">
        <span>
          <span class="fas fa-play-circle play-icon"></span>
          <span v-text="viewsTranslated"></span>
          <span v-text="views"></span>
        </span>
        <span v-on:click="showPreview" class="preview-control">
          <span class="fas fa-search-plus magnifier-icon"></span>
          <span v-text="preViewTranslated"></span>
        </span>
      </div>
      <div v-if="aditionalInformation" class="movie-details-and-controls">
        <span v-if="pornstars">
          <span v-for="pornstar in pornstars" v-bind:key="pornstar">
            <span class="fas fa-star star-icon"></span>
            <a
              v-bind:href="`/gwiazda-porno/profil/${getPornstarSlug(pornstar)}`"
              class="pornstar-profile-link"
              v-text="`${pornstar} `"
            ></a>
          </span>
        </span>
        <icon-polish-flag
          v-bind:title="iconDecription"
          v-if="isTranslatedToPolish"
        />
      </div>
    </div>
  </li>
</template>

<script>
import IconPolishFlag from "@jscomponents-decoration/flags/icon_polish_flag.vue";

export default {
  name: "movie-box",

  components: {
    IconPolishFlag,
  },

  data() {
    return {
      translator: null,
    };
  },

  methods: {
    showPreview(event) {
      this.$root.$emit("showPreview", { id: this.id, title: this.title });
    },

    getPornstarSlug(pornstarNickname) {
      return pornstarNickname.replaceAll(" ", "-");
    },
  },

  computed: {
    mainImageURL() {
      return `url('/images/movies/main/${this.id}.jpg')`;
    },

    movieURL() {
      return `/film/${this.id}`;
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

.pornstar-profile-link {
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
}

.movie-main-image {
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
  @include responsive-font(1.2vw, 14px);
}

.movie-details-and-controls {
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
}

.play-icon,
.magnifier-icon {
  color: #960b2e;
}

.star-icon {
  color: gold;
}

.preview-control {
  cursor: pointer;
}

@media (max-width: 870px) {
  .movie-main-image {
    width: 232px;
    height: 120px;
  }
}
</style>