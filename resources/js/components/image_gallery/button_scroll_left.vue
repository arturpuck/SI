<template>
  <phantom-button class="scroll-left-button" v-bind:title="title" v-bind:label="caption">
    <left-arrow-icon class="arrow"></left-arrow-icon>
  </phantom-button>
</template>

<script lang="ts">
import LeftArrowIcon from "@svgicon/left_arrow_icon.vue";
import PhantomButton from "@jscomponents-form-controls/phantom_button.vue";
import Translator from "@jsmodules/translator.js";

export default {
  name: "button-scroll-left",

  computed: {
    caption(): string {
      return Translator.translate("scroll_left");
    },
  },

  components: {
    LeftArrowIcon,
    PhantomButton,
  },

  props: {
    label: {
      required: false,
      type: String,
      default: undefined,
    },

    title: {
      required: false,
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.arrow {
  fill: #0de90d;
}

.scroll-left-button {
  width: 30px;
  height: 30px;
  min-width:30px;
  cursor: pointer;
  &:active {
    transform: scale(1.2);
  }
}
</style>
