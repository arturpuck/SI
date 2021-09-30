<template>
  <nav class="fixed-sidebar content-side-bar">
    <ul class="user-sidebar-list">
      <li
        v-on:click="hideSideBar"
        v-bind:title="translations['hide_side_bar_title']"
        class="content-sidebar-list-element hoverable-element"
      >
        <phantom-button>
          <angle-top-icon class="content-sidebar-icon"></angle-top-icon>
          <span
            v-text="translations['hide_side_bar_caption']"
            class="content-sidebar-description"
          ></span>
        </phantom-button>
      </li>
      <li class="content-sidebar-list-element">
        <phantom-button
          class="expandable-icon hoverable-element"
          v-on:click="toggleMoviesMenu"
        >
          <component v-bind:is="moviesIconName" class="content-sidebar-icon"></component>
          <span
            v-text="translations['movies_caption']"
            class="content-sidebar-description"
          ></span>
        </phantom-button>
        <ul
          v-bind:aria-hidden="!moviesSubMenuIsVisible"
          class="nested-user-sidebar-list"
          v-bind:class="{
            'visible-sidebar-menu': moviesSubMenuIsVisible,
            'hidden-sidebar-menu': !moviesSubMenuIsVisible,
          }"
        >
          <li
            v-bind:title="translations['movie_categories_title']"
            class="content-sidebar-list-element hoverable-element"
            v-on:click="showCategories"
          >
            <phantom-button>
              <folder-icon class="content-sidebar-icon-nested"></folder-icon>
              <span
                v-text="translations['movie_categories_label']"
                class="content-sidebar-description"
              ></span>
            </phantom-button>
          </li>
          <li
            v-bind:title="translations['latest_porn_movies_title']"
            class="content-sidebar-list-element hoverable-element"
          >
            <a href="/filmy/najnowsze/strona/1" class="sub-menu-link">
              <expand-all-icon class="content-sidebar-icon-nested"></expand-all-icon>
              <span
                v-text="translations['latest_porn_movies_caption']"
                class="content-sidebar-description"
              ></span>
            </a>
          </li>
          <li
            v-bind:title="translations['the_most_popular_porn_movies_title']"
            class="content-sidebar-list-element hoverable-element"
          >
            <a href="/filmy/najpopularniejsze/strona/1" class="sub-menu-link">
            <smile-light-icon class="content-sidebar-icon-nested"></smile-light-icon> 
              <span
                v-text="translations['the_most_popular_porn_movies_caption']"
                class="content-sidebar-description"
              ></span>
            </a>
          </li>
          <li
            v-bind:title="translations['advanced_search_title']"
            class="content-sidebar-list-element hoverable-element"
          >
            <a href="/filmy/wyszukiwanie-zaawansowane" class="sub-menu-link">
              <magnifier-icon class="content-sidebar-icon-nested"></magnifier-icon>
              <span
                v-text="translations['advanced_search_caption']"
                class="content-sidebar-description"
              ></span>
            </a>
          </li>
        </ul>
      </li>
      <li class="content-sidebar-list-element hoverable-element">
        <a href="/gwiazdy-porno/lista" class="sub-menu-link">
          <star-full-icon class="content-sidebar-icon"></star-full-icon>
          <span
            v-text="translations['pornstars']"
            class="content-sidebar-description"
          ></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import Translator from "@jsmodules/translator.js";
import AngleTopIcon from "@svgicon/angle_top_icon";
import MovieMediaPlayerIcon from "@svgicon/movie_media_player_icon";
import FolderIcon from "@svgicon/folder_icon";
import ExpandAllIcon from "@svgicon/expand_all_icon";
import MagnifierIcon from "@svgicon/magnifier_icon";
import SmileLightIcon from "@svgicon/smile_light_icon";
import StarFullIcon from "@svgicon/star_full_icon";
import EventEmmiter from "mitt";
const EventBus = EventEmmiter();

@Options({
  components: {
    AngleTopIcon,
    MovieMediaPlayerIcon,
    FolderIcon,
    ExpandAllIcon,
    SmileLightIcon,
    MagnifierIcon,
    StarFullIcon,
  },
  name: "ContentSideBar",
})
export default class ContentSideBar extends Vue {
  private translations: Object = Translator.getPackage("content_sidebar");
  moviesSubMenuIsVisible: Boolean = false;

  showCategories() {
    //@ts-ignore
    this.emitter.emit("showMoviesCategories");
  }

  hideSideBar() {
    //@ts-ignore
    this.emitter.emit("hideContentBar");
  }

  toggleMoviesMenu() {
    this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
  }

  get moviesIconName(): string {
    return this.moviesSubMenuIsVisible ? "AngleTopIcon" : "MovieMediaPlayerIcon";
  }
}
</script>

<style lang="scss">
@import "~sass/fonts";
@import "~sass/components/side_bar";

.expandable-icon {
  min-height: 2em;
  width: 100%;
}

.content-sidebar-description {
  font: {
    size: 13px;
    family: "Exo 2";
  }
  color: white;
}

.visible-sidebar-menu {
  max-height: 2000px;
}

.hidden-sidebar-menu {
  max-height: 0;
}

.content-side-bar {
  left: 0;
  display: none;
  box-shadow: 1px 1px 2px 2px black;
  width: min-content;
}

.nested-user-sidebar-list {
  overflow: hidden;
  transition: max-height 1.5s;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.content-sidebar-list-element {
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
  padding: 10px 2px;
}

.hoverable-element {
  &:hover {
    background: #211e1e;
  }
}

.content-sidebar-icon {
  width: 1.5em;
  height: auto;
  fill: red;
  display: block;
  margin: 0 auto;
}

.content-sidebar-icon-nested {
  width: 1.2em;
  fill: yellow;
  height: auto;
  display: block;
  margin: 0 auto;
}

@media (max-width: 540px) {
  .content-side-bar {
    display: block;
  }
}
</style>
