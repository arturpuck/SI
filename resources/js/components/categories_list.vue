<template>
  <section v-show="showCategories" class="categories-panel">
    <div class="panel-bar">
      <div class="panel-bar__description">
        <span v-text="translations['categories_list']"></span>
        <movie-tape-icon class="panel-bar__icon" />
      </div>
      <button-close
        v-on:click.native="hideCategories"
        class="panel-bar__close-button"
      ></button-close>
    </div>
    <ul class="categories-list">
      <li
        v-for="category in categories"
        v-bind:key="category.fileName"
        v-bind:style="{
          backgroundImage: `url(/images/decoration/categories/categories_list/${category.fileName}.jpg)`,
        }"
        class="categories-list__element"
      >
        <a
          v-bind:href="`/filmy/kategoria/${category.slug}`"
          class="categories-list__link"
        >
          <span v-text="category.translatedName" class="categories-list__name"></span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CategoriesListTranslations from "@jsmodules/translations/categories_list.ts";
import ButtonClose from "@jscomponents/form_controls/button_close.vue";
import Categories from "@jsmodules/categories_list";
import CategoryData from "@interfaces/movies/category_data";
import MovieTapeIcon from "@svgicon/movie_tape_icon.vue";

@Component({ components: { ButtonClose, MovieTapeIcon } })
export default class CategoriesList extends Vue {
  private showCategories: boolean = false;
  private translations: object = CategoriesListTranslations;
  private categories: CategoryData[] = Categories;

  showPanel(): void {
    this.showCategories = true;
  }

  created(): void {
    this.$root.$on("showCategories", this.showPanel);
  }

  hideCategories(): void {
    this.showCategories = false;
  }
}
</script>

<style lang="scss">
@import "~sass/fonts";
@import "~sass/responsive_icon";
@import "~sass/nice_scrollbar";

.categories-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 140px);
  justify-content: space-evenly;
  list-style-type: none;
  grid-column-gap: 5px;
  row-gap: 5px;
  padding: 0;
  margin: calc(40px + 1vw) 0 0 0;

  &__element {
    background-size: cover;
    background-position: center;
    width: 140px;
    height: 140px;
    border-radius: 6px;
    margin: 0;
    padding: 0;
    border: 1px solid #981a37;
    overflow: hidden;
    &:hover {
      filter: saturate(1.5);
    }
  }

  &__link {
    display: block;
    height: 100%;
    position: relative;
    text-decoration: none;
  }

  &__name {
    text-align: center;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 4px 1px;
    background: #bf0e30db;
    font: {
      family: "Exo 2", sans-serif;
      size: 14px;
    }
  }
}

.categories-panel {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 11;
  overflow-y: auto;
}

@include nice-scrollbar(".categories-panel");

.panel-bar {
  display: flex;
  justify-content: center;
  background: black;
  padding: 7px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;

  &__icon {
    @include responsive-icon(0 5px);
    fill: crimson;
    vertical-align: middle;
  }

  &__description {
    color: white;
    @include responsive-font(1.4vw, 17px);
    text-align: center;
    flex-grow: 100;
  }

  &__close-button {
    margin-left: auto;
  }
}
</style>
