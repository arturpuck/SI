<template>
  <nav v-if="pagesListShoulBeDisplayed" class="pages-list">
    <div class="pages-list__scrollable-controls">
      <button
        v-if="arrowsShouldBeDisplayed"
        v-on:click="scrollLinks(leftScrollDirection)"
        v-on:mousedown="scrollLinksByMouseDown(leftScrollDirection)"
        v-on:mouseup="stopScrollingFromMouseDown"
        v-bind:title="descriptions['previousLinksDescription']"
        class="pages-list__scroll-pages-button"
      >
        <span
          v-text="descriptions['previousLinksDescription']"
          class="pages-list__button-description"
        ></span>
        <left-arrow-icon class="pages-list__scroll-pages-icon" />
      </button>
      <div class="pages-list__outer-container">
        <ul
          v-bind:style="{ left: leftOffsetStyle }"
          v-bind:class="{
            'pages-list__content-container-slider--content-in-center':
              !arrowsShouldBeDisplayed,
          }"
          class="pages-list__content-container-slider"
        >
          <li
            v-for="pageNumber in pagesNumber"
            v-bind:key="pageNumber"
            class="pages-list__page"
          >
            <button
              v-text="pageNumber"
              v-on:click="pageHasBeenSelected(pageNumber)"
              v-bind:class="{
                'pages-list__pagination-button--green':
                  checkCurrentPage(pageNumber),
              }"
              class="pages-list__pagination-button"
            ></button>
          </li>
        </ul>
      </div>
      <button
        v-if="arrowsShouldBeDisplayed"
        v-on:click="scrollLinks(rightScrollDirection)"
        v-on:mousedown="scrollLinksByMouseDown(rightScrollDirection)"
        v-on:mouseup="stopScrollingFromMouseDown"
        v-bind:title="descriptions['nextLinksDescription']"
        class="pages-list__scroll-pages-button"
      >
        <span
          v-text="descriptions['nextLinksDescription']"
          class="pages-list__button-description"
        ></span>
        <right-arrow-icon class="pages-list__scroll-pages-icon" />
      </button>
    </div>
    <ul class="pages-list__aditional-controls">
      <li v-show="pageIsNotFirst" class="pages-list__aditional-control">
        <button
          v-on:click="navigatePageByDirection(pageDirection.previous)"
          class="pages-list__aditional-control-button"
        >
          <left-arrow-icon
            class="pages-list__aditional-control-icon--left-align"
          />
          <span v-text="descriptions.previous_page"></span>
        </button>
      </li>
      <li v-show="pageIsNotFirst" class="pages-list__aditional-control">
        <button
          v-on:click="navigatePageByDirection(pageDirection.first)"
          class="pages-list__aditional-control-button"
        >
          <fast-backward-icon
            class="pages-list__aditional-control-icon--left-align"
          />
          <span v-text="descriptions.first_page"></span>
        </button>
      </li>
      <li v-show="pageIsNotLast" class="pages-list__aditional-control">
        <button
          v-on:click="navigatePageByDirection(pageDirection.last)"
          class="pages-list__aditional-control-button"
        >
          <span v-text="descriptions.last_page"></span>
          <fast-forward-icon
            class="pages-list__aditional-control-icon--right-align"
          />
        </button>
      </li>
      <li v-show="pageIsNotLast" class="pages-list__aditional-control">
        <button
          v-on:click="navigatePageByDirection(pageDirection.next)"
          class="pages-list__aditional-control-button"
        >
          <span v-text="descriptions.next_page"></span>
          <right-arrow-icon
            class="pages-list__aditional-control-icon--right-align"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { LinkListScrollDirection } from "@js/enum/movies/scroll_types";
import { PageDirection } from "@js/enum/page_direction";
import Descriptions from "@jsmodules/translations/components/pages_list";
import LeftArrowIcon from "@jscomponents/decoration/icons/svg/left_arrow_icon.vue";
import RightArrowIcon from "@jscomponents/decoration/icons/svg/right_arrow_icon.vue";
import PagesListBasicData from "@interfaces/pages_list_basic_data";
import FastBackwardIcon from "@svgicon/fast_backward_icon.vue";
import FastForwardIcon from "@svgicon/fast_forward_icon.vue";

export default {
  name: "pages-list",

  components: {
    LeftArrowIcon,
    RightArrowIcon,
    FastForwardIcon,
    FastBackwardIcon,
  },

  props: {
    initialCurrentPage: {
      type: Number,
      required: false,
      default: 1,
    },

    initialPages: {
      type: Number,
      required: false,
      default: null,
    },

    uniqueIdentifier: {
      type: String,
      required: false,
      default: "",
    },
  },

  data() {
    return {
      scrollOffset: 0,
      leftScrollDirection: LinkListScrollDirection.Left,
      rightScrollDirection: LinkListScrollDirection.Right,
      mouseDown: false,
      interval: null,
      arrowsShouldBeDisplayed: false,
      currentPage: 0,
      pagesNumber: 0,
      descriptions: Descriptions,
      pageDirection: {
        first: PageDirection.First,
        next: PageDirection.Next,
        previous: PageDirection.Previous,
        last: PageDirection.Last,
      },
    };
  },

  methods : {
    pageHasBeenSelected(pageNumber: number): void {
    this.currentPage = pageNumber;
    //@ts-ignore
    this.emitter.emit(
      `pageHasBeenSelected${this.uniqueIdentifier}`,
      pageNumber
    );
  },

  navigatePageByDirection(pageDirection: PageDirection): void {
    switch (pageDirection) {
      case PageDirection.First:
        this.pageHasBeenSelected(1);
        break;

      case PageDirection.Previous:
        this.pageHasBeenSelected(this.currentPage - 1);
        break;

      case PageDirection.Next:
        this.pageHasBeenSelected(this.currentPage + 1);
        break;

      case PageDirection.Last:
        this.pageHasBeenSelected(this.pagesNumber);
        break;
    }
  },

  chechIfArrowsShouldBeDisplayed() {
    this.arrowsShouldBeDisplayed =
      this.pagesNumber > this.getamountOfVisibleLinksInBox();
  },

  resetScrollOffset(): void {
    this.scrollOffset = 0;
  },

    checkCurrentPage(pageNumber: number): boolean {
    return pageNumber == this.currentPage;
  },

  getamountOfVisibleLinksInBox(): number {
    return window.innerWidth <= 830 ? 5 : 10;
  },

  getMaxOffset(): number {
    return this.pagesNumber > this.getamountOfVisibleLinksInBox()
      ? this.pagesNumber - this.getamountOfVisibleLinksInBox()
      : 0;
  },

  scrollLinks(direction: LinkListScrollDirection): void {
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
  },

  scrollLinksByMouseDown(direction: LinkListScrollDirection): void {
    this.interval = setInterval(() => this.scrollLinks(direction), 300);
  },

  stopScrollingFromMouseDown() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  },

  updatePagesList(data: PagesListBasicData): void {
    this.pagesNumber = data.pagesNumber;
    this.currentPage = data.currentPage;
    this.controlInterface();
  },

  controlInterface(): void {
    this.chechIfArrowsShouldBeDisplayed();
    if (!this.arrowsShouldBeDisplayed) {
      this.resetScrollOffset();
    } else {
      this.recomputeOffset();
    }
  },

  recomputeOffset() {
    const pagesDelta = this.currentPage - this.getamountOfVisibleLinksInBox();
    this.scrollOffset = pagesDelta > 0 ? pagesDelta : 0;
  },

  clearPagesList() {
    this.pagesNumber = 0;
  }
  },

  computed : {
    leftOffsetStyle(): string {
    const linksInBox = this.getamountOfVisibleLinksInBox();
    const unit = linksInBox === 5 ? "px" : "vw";
    const offsetBase = linksInBox === 5 ? 48 : 5;
    return `calc(${-1 * this.scrollOffset * offsetBase}${unit})`;
  },

  pageIsNotFirst(): boolean {
    return this.currentPage !== 1;
  },

  pageIsNotLast(): boolean {
    return this.currentPage !== this.pagesNumber;
  },

  pagesListShoulBeDisplayed(): boolean {
    return this.pagesNumber > 1;
  }
  },

  mounted() {
    this.currentPage = this.initialCurrentPage;
    this.pagesNumber = Number(this.initialPages);
    const maxOffset = this.getMaxOffset();
    this.scrollOffset =
      this.currentPage - 1 >= maxOffset ? maxOffset : this.currentPage - 1;
    this.controlInterface();
    window.addEventListener("resize", () => this.controlInterface());
    //@ts-ignore
    this.emitter.on(
      `updatePagesList${this.uniqueIdentifier}`,
      this.updatePagesList
    );
    //@ts-ignore
    this.emitter.on("clearPagesList", this.clearPagesList);
  }
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

@mixin aditional-control-icon {
  vertical-align: middle;
  width: 1.3vw;
  height: 1.3vw;
  min-width: 12px;
  min-height: 12px;
  fill: white;
}

.pages-list {
  display: block;
  margin: 10px auto;

  &__scrollable-controls {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    @include responsive-font(1.5vw, 20px);
    color: white;
  }

  &__scroll-pages-icon {
    fill: #23af23;
  }

  &__scroll-pages-button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    border-radius: 5px;
    flex-basis: 6%;
    min-width: 35px;
    &:active {
      transform: scale(1.2);
    }
  }

  &__outer-container {
    overflow: hidden;
    margin: 0 5px;
  }

  &__content-container-slider {
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

    &--content-in-center {
      justify-content: center;
    }
  }

  &__button-description {
    position: absolute;
    left: 0;
    top: -9999px;
    display: inline-block;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  &__aditional-controls {
    margin: 5px 0;
    padding: 0;
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;
    @include responsive-font();
    color: white;
    justify-content: center;
  }

  &__aditional-control {
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
  }

  &__aditional-control-button {
    background: linear-gradient(to bottom, #1d1c1c, #0e0e0e);
    border: none;
    outline: none;
    color: white;
    @include responsive-font(1.3vw, 12px);
    padding: 0;
    cursor: pointer;
  }

  &__page {
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

  &__pagination-button {
    color: white;
    text-decoration: none;
    display: inline-block;
    width: 100%;
    line-height: 3.5vw;
    border: none;
    outline: none;
    @include responsive-font();
    cursor: pointer;
    padding: 0;
    background: linear-gradient(to bottom, #e60f0f, #540505);
    &:hover {
      background: linear-gradient(#17f117, #09501b);
    }
    border-radius: 5px;
    @media (max-width: 830px) {
      line-height: 40px;
    }

    &--green {
      background: linear-gradient(#17f117, #09501b);
    }
  }

  &__aditional-control-icon {
    &--left-align {
      @include aditional-control-icon();
      margin-right: 5px;
    }

    &--right-align {
      @include aditional-control-icon();
      margin-left: 5px;
    }
  }
}
</style>
