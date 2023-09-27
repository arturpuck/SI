<template>
  <button class="delete-button">
    <trash-can-icon class="icon"></trash-can-icon>
    <span class="label" v-text="label"></span>
  </button>
</template>

<script lang="ts">
import Translator from "@jsmodules/translator";
import TrashCanIcon from "@svgicon/trash_can_icon.vue";

export default {
  name: "delete-button-vertical",

  components: {
    TrashCanIcon,
  },

  data() {
    return {
      label: Translator.translate("delete"),
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

.delete-button {
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
