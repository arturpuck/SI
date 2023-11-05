<template>
  <div id="outer-container" class="outer-container">
    <button-scroll-left
      id="button-scroll-left"
      v-on:click="scrollLeft"
      class="button-scroll-image-tile"
      v-bind:class="{disabledScrollButton : !canScrollLeft}"
      v-bind:disabled="!canScrollLeft"
      v-show="anyArrowShouldBeDisplayed"
    ></button-scroll-left>
      <div id="image-tiles-outer-container" class="images-list-box-container">
        <div
          id="image-tiles-inner-container"
          v-bind:style="{ left: offsetStyle }"
          class="inner-container"
        >
          <image-tile
            class="image-tile-gallery-element"
            v-bind:key="index"
            v-bind:alt="alt"
            v-bind:url="url"
            v-for="(url, index) in urls"
            v-on:click="notifyAboutSelectedPhoto(index, url)"
          ></image-tile>
        </div>
      </div>
    <button-scroll-right
      v-bind:disabled="!canScrollRight"
      v-show="anyArrowShouldBeDisplayed"
      id="button-scroll-right"
      v-on:click="scrollRight"
      class="button-scroll-image-tile"
      v-bind:class="{disabledScrollButton : !canScrollRight}"
    ></button-scroll-right>
    </div>
</template>

<script lang="ts">
import ImageTile from "@jscomponents/image_gallery/image_tile.vue";
import ButtonScrollLeft from "@jscomponents/image_gallery/button_scroll_left.vue";
import ButtonScrollRight from "@jscomponents/image_gallery/button_scroll_right.vue";

export default {
  name: "images-list-box",

  methods: {

    notifyAboutSelectedPhoto(index : number, url : string): void {
      this.emitter.emit('galeryPhotoSelected', {url, currentPhotoArrayIndex: index});
    },

    scrollRight(): void {
      let newNumberOfSkippedElements = this.numberOfSkippedElements + this.getNumberOfImageTilesThatFitInsideContainer();
      let maximumNumberOfSkippedElements = this.getTotalNumberOfImageTiles() - this.getNumberOfImageTilesThatFitInsideContainer();
      this.numberOfSkippedElements = newNumberOfSkippedElements > maximumNumberOfSkippedElements ? maximumNumberOfSkippedElements : newNumberOfSkippedElements;
    },

    setArrowsVisibleOrNot() : void {
      this.anyArrowShouldBeDisplayed = this.getTotalNumberOfImageTiles() > this.getNumberOfImageTilesThatFitInsideContainer();
    },

    scrollLeft(): void {
      let newNumberOfSkippedElements = this.getSkippedElements - this.getNumberOfImageTilesThatFitInsideContainer();
      this.numberOfSkippedElements = newNumberOfSkippedElements > 0 ? newNumberOfSkippedElements : 0;
    },

    getOuterContainerWidth() : number {
      return document.getElementById('outer-container').offsetWidth;
    },

    getArrowsWidth() : number {
      return document.getElementById('button-scroll-left').offsetWidth + document.getElementById('button-scroll-right').offsetWidth;
    },

    getNumberOfImageTilesThatFitInsideContainer() : number {
        let availableSpace = this.getOuterContainerWidth() - this.getArrowsWidth();
        return Math.floor(availableSpace / this.getImageTileWidth());
    },

    getTotalNumberOfImageTiles() : number {
      return document.querySelectorAll('.image-tile-gallery-element').length;
    },

    adjustGalleryToNewDimension(): void {
      let availableSpace = this.getOuterContainerWidth() - this.getArrowsWidth();
      let uselessSpaceWidth = availableSpace % this.getImageTileWidth();
      let styleWidth;
      let totalSizeOfElements = this.getTotalNumberOfImageTiles() * this.getImageTileWidth();
      if(totalSizeOfElements > availableSpace) {
        styleWidth = `${
          availableSpace - uselessSpaceWidth
        }px`;
      } else {
        styleWidth = `${totalSizeOfElements}px`;
      }
      console.log(this.getArrowsWidth());
      document.getElementById("image-tiles-outer-container").style.width = styleWidth;
      this.numberOfSkippedElements = 0;
      this.setArrowsVisibleOrNot();
    },

    getImageTileWidth(): number {
      let imageTile = document.querySelector(".image-tile-gallery-element");
      //@ts-ignore
      return imageTile.offsetWidth +
        parseInt(window.getComputedStyle(imageTile).marginLeft) +
        parseInt(window.getComputedStyle(imageTile).marginRight)
    },

    getSliderWidth(): number {
      return document.getElementById("image-tiles-inner-container").offsetWidth;
    },

    getContainerWidth(): number {
      return document.getElementById("image-tiles-outer-container").offsetWidth;
    }
  },

  computed: {
    offsetStyle(): string {
      let numberOfPixels = this.numberOfSkippedElements === 0 ? 0 : this.numberOfSkippedElements * this.getImageTileWidth();
      return  `-${numberOfPixels}px`;
    },

    canScrollRight() : boolean {
      if(this.numberOfSkippedElements === 0) {
        return true;
      }
      let newNumberOfSkippedElements = this.numberOfSkippedElements + this.getNumberOfImageTilesThatFitInsideContainer();
      let maximumNumberOfSkippedElements = this.getTotalNumberOfImageTiles() - this.getNumberOfImageTilesThatFitInsideContainer();
      return newNumberOfSkippedElements <= maximumNumberOfSkippedElements;
    },

    canScrollLeft() : boolean {
      return this.numberOfSkippedElements > 0;
    },

  },

  props: {
    urls: {
      required: true,
      type: Array,
    },

    alt: {
      required: true,
      type: String,
    },
  },

  components: {
    ImageTile,
    ButtonScrollLeft,
    ButtonScrollRight,
  },

  data() {
    return {
      numberOfSkippedElements: 0,
      anyArrowShouldBeDisplayed: false
    };
  },

  mounted() {
    setTimeout(this.adjustGalleryToNewDimension,0);
    this.setArrowsVisibleOrNot();
    window.addEventListener("resize",this.adjustGalleryToNewDimension);
    this.notifyAboutSelectedPhoto(0, this.urls[0]);
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.disabledScrollButton {
  opacity : 0.5;
}

.outer-container {
  white-space: nowrap;
}

.image-tile-gallery-element {
  margin: 0 5px;
}

.resize-detector {
  display: inline-block;
  
}

.images-list-box-container {
  overflow: hidden;
}

.outer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.inner-container {
  position: relative;
  white-space: nowrap;
  transition: left 1s;
}
</style>
