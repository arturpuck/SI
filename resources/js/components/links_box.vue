<template>
  <nav class="links-box">
    <div class="scrollable-controls">
      <button
        v-if="arrowsShouldBeDisplayed"
        v-on:click="scrollLinks(leftScrollDirection)"
        v-on:mousedown="scrollLinksByMouseDown(leftScrollDirection)"
        v-on:mouseup="stopScrollingFromMouseDown"
        v-bind:title="translations.previousLinksDescription"
        class="scroll-links-button"
      >
        <left-arrow-icon class="big-arrow-icon"></left-arrow-icon>
        <span
          v-text="translations.previousLinksDescription"
          class="links-button-description"
        ></span>
      </button>
      <div class="links-container-outer">
        <ul
          v-bind:style="{ left: leftOffsetStyle }" 
          ref="slider_container"
          v-bind:class="{ 'content-in-center': !arrowsShouldBeDisplayed }"
          class="content-container-slider"
        >
          <li
            v-for="(link, index) in links"
            v-bind:key="link"
            class="pagination-link-list-element"
          >
            <a
              v-bind:href="link"
              v-text="index + 1"
              class="pagination-link"
              v-bind:class="{'current-page-link' : index + 1 == initialCurrentPage}"
            ></a>
          </li>
        </ul>
      </div>
      <button
        v-if="arrowsShouldBeDisplayed"
        v-on:click="scrollLinks(rightScrollDirection)"
        v-on:mousedown="scrollLinksByMouseDown(rightScrollDirection)"
        v-on:mouseup="stopScrollingFromMouseDown"
        v-bind:title="translations.nextLinksDescription"
        class="scroll-links-button"
      >
        <right-arrow-icon class="big-arrow-icon"></right-arrow-icon>
        <span
          v-text="translations.nextLinksDescription"
          class="links-button-description"
        ></span>
      </button>
    </div>
    <ul v-if="displayAditionalLinks" class="aditional-links">
      <li v-if="pageIsNotFirst" class="aditional-link-list-element">
        <a
          v-bind:href="previousPage"
          class="aditional-link"
        >
          <left-arrow-icon class="aditional-link-icon"></left-arrow-icon>
          <span v-text="translations.back" class="aditional-link-description"></span>
        </a>
      </li>
      <li v-if="pageIsNotFirst" class="aditional-link-list-element">
        <a
          v-bind:href="links[0]"
          class="aditional-link"
        >
          <fast-backward-icon class="aditional-link-icon"></fast-backward-icon>
          <span v-text="translations.first_page" class="aditional-link-description"></span>
        </a>
      </li>
      <li v-if="pageIsNotLast" class="aditional-link-list-element">
        <a
          v-bind:href="links[getamountOfElementsInBox() - 1]"
          class="aditional-link"
        >
        <span v-text="translations.last_page" class="aditional-link-description"></span>
         <fast-forward-icon class="aditional-link-icon"></fast-forward-icon>
        </a>
      </li>

      <li v-if="pageIsNotLast" class="aditional-link-list-element">
        <a
          v-bind:href="nextPage"
          class="aditional-link"
        >
          <span v-text="translations.further" class="aditional-link-description"></span>
          <right-arrow-icon class="aditional-link-icon"></right-arrow-icon>
        </a>
      </li>
    </ul>
  </nav>
  <nav v-if="showFixedShortcuts" v-show="fixedShortcutsAreVisible" class="fixed-shortcuts">
    <ul class="fixed-shortcuts__list">
      <li v-if="pageIsNotFirst">
        <a v-bind:href="previousPage" class="fixed-shortcuts__link--back">
          <left-arrow-icon class="aditional-link-icon"></left-arrow-icon>
          <span
            v-text="translations.back"
            class="fixed-shortcuts__description"
          ></span>
        </a>
      </li>
      <li v-if="pageIsNotLast">
        <a v-bind:href="nextPage" class="fixed-shortcuts__link--further">
          <span
            v-text="translations.further"
            class="fixed-shortcuts__description"
          ></span>
          <right-arrow-icon class="aditional-link-icon"></right-arrow-icon>
        </a>
      </li>
      <li>
        <button v-on:click="scrollUp" class="fixed-shortcuts__up-button">
          <span
            class="fixed-shortcuts__description"
            v-text="translations.up"
          ></span>
          <angle-top-icon class="aditional-link-icon"></angle-top-icon>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import Translations from "@jsmodules/translations/components/pages_list";
import { LinkListScrollDirection } from "@js/enum/movies/scroll_types";
import LeftArrowIcon from "@jscomponents/decoration/icons/svg/left_arrow_icon.vue";
import RightArrowIcon from "@jscomponents/decoration/icons/svg/right_arrow_icon.vue";
import AngleTopIcon from "@jscomponents/decoration/icons/svg/angle_top_icon.vue";
import FastBackwardIcon from "@svgicon/fast_backward_icon.vue";
import FastForwardIcon from "@svgicon/fast_forward_icon.vue";


@Options({
  name: "LinksBox",
  components: { LeftArrowIcon, RightArrowIcon, AngleTopIcon, FastBackwardIcon, FastForwardIcon },
})
export default class LinksBox extends Vue {
  @Prop({
    type: Number,
    required: false,
    default: null,
  })
  readonly initialCurrentPage: number;

  @Prop({
    type: Array,
    required: true,
  })
  readonly links: string[];

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  })
  readonly showFixedShortcuts: boolean;

  private scrollOffset: number = 0;
  private leftScrollDirection = LinkListScrollDirection.Left;
  private rightScrollDirection = LinkListScrollDirection.Right;
  private mouseDown: boolean = false;
  private interval = null;
  private linksAmount: number = undefined;
  private arrowsShouldBeDisplayed: boolean = false;
  private currentPage: number = null;
  private translations = Translations;
  private fixedShortcutsAreVisible = false;

  scrollUp(): void {
    window.scrollTo(0, 0);
  }

  getamountOfElementsInBox(): number {
    return this.links.length;
  }

  chechIfArrowsShouldBeDisplayed() {
    this.arrowsShouldBeDisplayed =
      this.getamountOfElementsInBox() > this.getamountOfVisibleLinksInBox();
  }

  get leftOffsetStyle(): string {
    const linksInBox = this.getamountOfVisibleLinksInBox();
    const unit = linksInBox === 5 ? "px" : "vw";
    const offsetBase = linksInBox === 5 ? 48 : 5;
    return `calc(${-1 * this.scrollOffset * offsetBase}${unit})`;
  }

  getamountOfVisibleLinksInBox(): number {
    return window.innerWidth <= 830 ? 5 : 10;
  }

  getMaxOffset(): number {
    return this.linksAmount > this.getamountOfVisibleLinksInBox()
      ? this.linksAmount - this.getamountOfVisibleLinksInBox()
      : 0;
  }

  scrollLinks(direction: LinkListScrollDirection) {
    const linksToSkip = this.getamountOfVisibleLinksInBox();

    switch (direction) {
      case LinkListScrollDirection.Left:
        this.scrollOffset =
          this.scrollOffset - linksToSkip <= 0
            ? 0
            : this.scrollOffset - linksToSkip;
        break;

      case LinkListScrollDirection.Right:
        const maxOffset = this.getMaxOffset();
        this.scrollOffset =
          this.scrollOffset + linksToSkip >= maxOffset
            ? maxOffset
            : this.scrollOffset + linksToSkip;
        break;
    }
  }

  scrollLinksByMouseDown(direction: LinkListScrollDirection) {
    this.interval = setInterval(() => this.scrollLinks(direction), 300);
  }

  stopScrollingFromMouseDown() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  mounted() {
    this.currentPage = this.initialCurrentPage ? this.initialCurrentPage : 1;
    this.linksAmount = this.getamountOfElementsInBox();
    const maxOffset = this.getMaxOffset();
    this.scrollOffset =
      this.currentPage - 1 >= maxOffset ? maxOffset : this.currentPage - 1;
    this.controlInterface();
    window.addEventListener("resize", () => this.controlInterface());
    this.controlFixedShortcuts();
    window.addEventListener("scroll", this.controlFixedShortcuts);

  }

  controlFixedShortcuts(): void {
    this.fixedShortcutsAreVisible = (window.scrollY > 400);
  }

  recomputeOffset() {
    const pagesDelta = this.currentPage - this.getamountOfVisibleLinksInBox();
    this.scrollOffset = pagesDelta > 0 ? pagesDelta : 0;
  }

  controlInterface(): void {
    this.chechIfArrowsShouldBeDisplayed();
    if (!this.arrowsShouldBeDisplayed) {
      this.resetScrollOffset();
    } else {
      this.recomputeOffset();
    }
  }

  resetScrollOffset(): void {
    this.scrollOffset = 0;
  }

  get pageIsNotFirst(): boolean {
    return this.initialCurrentPage !== 1;
  }

  get pageIsNotLast(): boolean {
    return this.initialCurrentPage !== this.getamountOfElementsInBox();
  }

  get nextPage(): string {
    return this.links[this.initialCurrentPage];
  }

  get previousPage(): string {
    return this.links[this.initialCurrentPage - 2];
  }

  get displayAditionalLinks() : boolean
  {
    return this.getamountOfElementsInBox() > 1;
  }
}
</script>

<style lang="scss">
@import "~sass/fonts";

@mixin shortcut-link {
  text-decoration: none;
  margin: 5px;
  display: inline-flex;
  align-items: center;
  padding: 3px;
  border-radius: 0;
  color: white;
  height: 1.5em;
}

.fixed-shortcuts {
  position: fixed;
  top: calc(0.8vw + 35px);
  left: 50%;
  transform: translateX(-50%);
  background: black;
  border-radius: 6px;
  z-index: 1;
  border: 1px solid #61595c;
  @include responsive-font();

  &__up-button {
    @include shortcut-link();
    @include responsive-font();
    border: none;
    background: #1d42d2;
    cursor: pointer;
  }

  &__description {
    line-height: 1em;
    margin: 0 5px;
  }

  &__list {
    display: flex;
    list-style-type: none;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
  }

  &__link {
    &--back {
      @include shortcut-link();
      background: linear-gradient(to right, #b31f45, #da1047);
    }

    &--further {
      @include shortcut-link();
      background: linear-gradient(#17f117, #09501b);
    }
  }
}

.content-in-center {
  justify-content: center;
}

.aditional-link-list-element {
  margin: 0 4px;
  background: linear-gradient(to bottom, #1d1c1c, #0e0e0e);
  border-radius: 3px;
  border: 1px solid black;
  padding: 4px;
  text-align: center;
  font-size: 0;
  &:hover {
    box-shadow: 1px 1px 3px 1px black;
  }
  display: inline-flex;
}

.aditional-link-description{
  margin:0 4px;
}

.links-button-description {
  position: absolute;
  left: 0;
  top: -9999px;
  display: inline-block;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.links-box {
  display: block;
  margin: 25px auto;
}

.links-container-outer {
  overflow: hidden;
  margin: 0 5px;
}

.content-container-slider {
  position: relative;
  left: 0;
  top: 0;
  transition: left 0.8s;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  width: 50vw;
  @media (max-width: 830px) {
    width: 240px;
  }
}

.aditional-links {
  margin: 5px 0;
  padding: 0;
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  @include responsive-font();
  color: white;
  justify-content: center;
}

.aditional-link {
  color: white;
  text-decoration: none;
  padding: 4px;
  display: flex;
  align-items: center;
  @include responsive-font(1.3vw, 13px);
   @media (max-width: 380px){
     flex-direction: column;
   }
}

.scrollable-controls {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  @include responsive-font(1.5vw, 20px);
  color: white;
}

.pagination-link {
  color: white;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  line-height: 3.5vw;
  padding: 0;
  background: linear-gradient(to bottom, #e60f0f, #540505);
  &:hover {
    background: linear-gradient(#17f117, #09501b);
  }
  border-radius: 5px;
  @media (max-width: 830px) {
    line-height: 40px;
  }
}

.current-page-link {
  background: linear-gradient(#17f117, #09501b);
}

.pagination-link-list-element {
  flex-basis: 3.5vw;
  height: 3.5vw;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  flex-grow: 0;
  flex-shrink: 0;
  margin: 0.75vw;
  @media (max-width: 830px) {
    flex-basis: 40px;
    margin: 0 4px;
    height: 40px;
  }
}

.scroll-links-button {
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  border-radius: 5px;
  flex-basis: 4%;
  min-width: 35px;
  &:active {
    transform: scale(1.2);
  }
}

.aditional-link-icon {
  fill: white;
  min-width: 15px;
  height: auto;
  width: 1.5vw;
}

.big-arrow-icon {
  fill: rgb(39, 168, 39);
}
</style>
