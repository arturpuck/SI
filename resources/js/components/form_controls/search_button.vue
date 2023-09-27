<template>
  <button class="button-search" type="button">
    <span v-text="translator.translate('search')"></span>
    <magnifier-icon class="button-save-icon"></magnifier-icon>
  </button>
</template>

<script lang="ts">
import MagnifierIcon from "@svgicon/magnifier_icon.vue";
import Translator from "@jsmodules/translator.js";

export default {
  name: "save-button",

  data() {
    return {
      translator: Translator,
    };
  },

  components: {
    MagnifierIcon,
  },

  props: {
    caption: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.button-search {
  background: linear-gradient(#0fe00b, #054004);
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  font-weight: bold;
  &:hover {
    filter: drop-shadow(0 0 3px #34ef0c);
  }
  &:active {
    transform: scale(1.1);
  }
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.button-save-icon {
  fill: azure;
  margin-left: 7px;
  width: 1.4em;
  height: auto;
}
</style>
