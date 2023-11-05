<template>
  <div>
    <full-screen-image></full-screen-image>
    <selected-gallery-image v-on:selected-image="showFullScreenImage" class="selected-gallery-image"></selected-gallery-image>
    <images-list-box v-bind:alt="alt" v-bind:urls="urls"></images-list-box>
  </div>
</template>

<script lang="ts">
import ImagesListBox from "@jscomponents/image_gallery/images_list_box.vue";
import SelectedGalleryImage from "@jscomponents/image_gallery/selected_gallery_image.vue";
import FullScreenImage from "@jscomponents/image_gallery/full_screen_image.vue";

export default {
  name: "image-gallery",

  components: {
    ImagesListBox,
    SelectedGalleryImage,
    FullScreenImage
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

  methods : {
    showFullScreenImage(currentPhotoArrayIndex : number): void {
      this.emitter.emit('showFullScreenImage', {urls : this.urls, currentPhotoArrayIndex});
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.image-tile {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 2px solid silver;
}

.selected-gallery-image {
  width:100%;
  border-radius: 5px;
  border: 1px solid #716a6e;
  min-height: 200px;
  height: 30vh;
}
</style>
