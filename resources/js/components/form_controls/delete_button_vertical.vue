<template>
  <button class="edit-button">
    <trash-can-icon></trash-can-icon>
    <span class="label" v-text="label"></span>
  </button>
</template>
      
      <script lang="ts">
import Translator from "@jsmodules/translator";
import TrashCanIcon from "@svgicon/trash_can_icon.vue";

export default {
  name : "delete-button-vertical",

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

.label {
  padding-top: 4px;
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
      