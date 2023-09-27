<template>
 <button v-on:click="send" class="add-button">
    <slot></slot>
    <add-plus-icon class="add-button-decoration"></add-plus-icon>
</button> 
</template>

<script lang="ts">
import AddPlusIcon from "@svgicon/add_plus_icon.vue";
import Translator from "@jsmodules/translator.js";

export default {
    name : "add-button",

    data() {
        return { 
          Translator
        }
    },
    

    components : {
        AddPlusIcon
    }

}
</script>

<style lang="scss">
@import "~sass/fonts";
@import "~sass/responsive_icon";

.add-button {
  background: linear-gradient(#11ea11, #205a07);
  border-radius:5px;
  border: none;
  display: inline-flex;
  align-items: center;
  flex-wrap: nowrap;
  margin: 0 5px;
  padding: 4px;
  color: white;
  outline: none;
  @include responsive-font(1vw, 16px);
  cursor: pointer;
  &:active {
    transform: scale(1.05);
  }
  &:hover {
    filter: saturate(1.7);
  }
}

.add-button-decoration {
  margin: 0 4px;
  width: 1em;
  height: auto;
  fill: white;
}

</style>