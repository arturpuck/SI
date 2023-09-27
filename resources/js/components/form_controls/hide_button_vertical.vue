<template>
  <button class="edit-button">
    <hide-eye-icon class="icon"></hide-eye-icon>
    <span class="label" v-text="label"></span>
  </button>
</template>

<script lang="ts">
import Translator from "@jsmodules/translator";
import HideEyeIcon from "@svgicon/hide_eye_icon.vue";

export default {
  name: "edit-button-vertical",

  components: {
    HideEyeIcon,
  },

  data() {
    return {
      label: Translator.translate("hide"),
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

.edit-button {
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
