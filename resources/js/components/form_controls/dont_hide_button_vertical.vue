<template>
  <button class="show-button">
    <show-eye-icon class="icon"></show-eye-icon>
    <span class="label" v-text="label"></span>
  </button>
</template>

<script lang="ts">
import Translator from "@jsmodules/translator";
import ShowEyeIcon from "@svgicon/show_eye_icon.vue";

export default {
  name: "dont-hide-button-vertical",

  components: {
    ShowEyeIcon,
  },

  data() {
    return {
      label: Translator.translate("dont_hide"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~sass/fonts";

.icon {
  height: 2.5em;
  display: block;
  margin: 0 auto;
}

.label {
  padding-top: 4px;
  font-size: inherit;
}

.show-button {
  &:active {
    transform: scale(1.1);
  }
  display: inline-flex;
  flex-direction: column;
  align-content: center;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
