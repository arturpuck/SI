<template>
<div v-show="visible" class="full-screen-image-container">
    <div class="control-bar">
      <span>
        <button-scroll-left v-on:click="scrollLeft" class="scroll-button"></button-scroll-left>
        <button-scroll-right v-on:click="scrollRight" class="scroll-button"></button-scroll-right>
      </span>
      <button-close v-on:click="closeFullScreenImage"></button-close>
    </div>
    <img v-bind:src="currentPhotoURL" class="current-image">
</div>
</template>

<script lang="ts">
import PhantomButton from "@jscomponents-form-controls/phantom_button.vue";
import ButtonClose from "@jscomponents-form-controls/button_close.vue";
import ButtonScrollLeft from "@jscomponents/image_gallery/button_scroll_left.vue";
import ButtonScrollRight from "@jscomponents/image_gallery/button_scroll_right.vue";
import Translator from "@jsmodules/translator.js";

export default {
  name: "full-screen-image",

    components: {
      PhantomButton,
      ButtonClose,
      ButtonScrollLeft,
      ButtonScrollRight
    },

  data() {
    return {
        urls : [],
        currentPhotoArrayIndex: 0,
        visible: false
    }
  },

  methods : {
    initiate(data) : void {
        this.urls = data.urls;
        this.currentPhotoArrayIndex = data.currentPhotoArrayIndex;
        this.visible = true;
    },

    closeFullScreenImage() : void {
      this.visible = false;
    },

    scrollLeft() : void {
      this.currentPhotoArrayIndex = this.currentPhotoArrayIndex > 0 ? this.currentPhotoArrayIndex - 1 : 0; 
    },

    scrollRight() : void {
      this.currentPhotoArrayIndex = this.currentPhotoArrayIndex >= this.urls.length - 1 ? this.currentPhotoArrayIndex : this.currentPhotoArrayIndex + 1;
    }
  },

  computed: {
    currentPhotoURL(): string {
        return this.urls?.length > 0 ? this.urls[this.currentPhotoArrayIndex] : null;
    }
  },


  mounted() {
    this.emitter.on('showFullScreenImage', this.initiate);
  }
};
</script>

<style lang="scss" scoped>
.arrow {
  fill: #0de90d;
}

.control-bar {
  border-radius:5px 5px 0 0;
  background:#272525;
  padding: 4px;
  display:flex;
  justify-content: space-between;
  padding: 6px;
}

.current-image {
    width: 100%;
    object-fit: contain;
    border-radius: 0 0 5px 5px;
    padding: 0 10px;
    height: 100%;
    background: #1c1b1b;
}

.scroll-button {
  margin:0 5px;
}

.full-screen-image-container {
    position:fixed;
    background: rgba(0,0,0,0.85);
    width:100%;
    height:100%;
    left: 0;
    top: 0;
    z-index: 90;
}
</style>
