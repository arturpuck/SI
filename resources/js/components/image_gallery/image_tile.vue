<template>
  <img v-bind:src="url" v-bind:alt="alt" class="image-tile" />
</template>

<script lang="ts">
export default {
  name: "image-tile",

  props: {
    url: {
      required: true,
      type: String,
    },

    alt: {
      required: true,
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.image-tile {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border: 2px solid silver;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    border-color: rgb(10, 190, 10);
  }
}
</style>
