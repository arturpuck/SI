<template>
    <img v-bind:src="url" v-on:click="notifyAboutSelectedImage" class="selected-gallery-image"/>
</template>

<script lang="ts">

export default {
  name: "selected-gallery-image",

  emits : ['selectedImage'],

  data() {
    return {
      url : null,
      currentPhotoArrayIndex :0,
    }
  },

  methods : {
    notifyAboutSelectedImage(): void {
      this.$emit('selectedImage', this.currentPhotoArrayIndex);
    }
  },

  mounted() {
    this.emitter.on('galeryPhotoSelected', data => {
      this.url = data.url;
      this.currentPhotoArrayIndex = data.currentPhotoArrayIndex;
      });
  }

};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.selected-gallery-image {
  object-fit: contain;
  border: 2px solid silver;
  border-radius: 2px;
  cursor:pointer;
}


</style>
