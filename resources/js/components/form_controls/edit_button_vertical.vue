<template>
<button class="edit-button">
    <edit-box-icon></edit-box-icon>
    <span class="label" v-text="label"></span>
</button>
</template>
  
  <script lang="ts">
  import Translator from "@jsmodules/translator";
  import EditBoxIcon from "@svgicon/edit_box_icon.vue";
  
  export default  {

    name: "edit-button-vertical",

    components : {
        EditBoxIcon
    },

    data() {
        return {
            label : Translator.translate('edit')
        }
    }

  }
  </script>
  
  <style lang="scss" scoped>
  @import "~sass/fonts";

  .label {
    padding-top:4px;
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
  