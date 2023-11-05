<template>
  <phantom-button class="scroll-right-button" v-bind:title="title" v-bind:label="caption">
    <right-arrow-icon class="arrow"></right-arrow-icon>
  </phantom-button>
</template>

<script lang="ts">
import RightArrowIcon from "@svgicon/right_arrow_icon.vue";
import PhantomButton from "@jscomponents-form-controls/phantom_button.vue";
import Translator from "@jsmodules/translator.js";

export default {
  name: "button-scroll-right",

  computed: {
    caption(): string {
      return Translator.translate("scroll_right");
    },
  },

  components: {
    RightArrowIcon,
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

.scroll-right-button {
  width: 30px;
  height: 30px;
  min-width:30px;
  cursor: pointer;
  &:active {
    transform: scale(1.2);
  }
}
</style>
