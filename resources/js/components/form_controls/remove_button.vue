<template>
    <button class="remove-button">
      <slot></slot>
      <trash-can-icon class="icon"></trash-can-icon>
   </button>
</template>
  
  <script lang="ts">
  import TrashCanIcon from "@svgicon/trash_can_icon.vue";
  
      export default {
          name: 'remove-button',

          components : {
            TrashCanIcon
          }
   
      }
  </script>
  
  <style lang="scss" scoped>
  @import "~sass/fonts";

  .remove-button {
    cursor : pointer;
    padding:4px;
    @include responsive-font(1vw, 16px);
    background:linear-gradient(#ed1308, #760505);
    color:white;
    border:none;
    border-radius:5px;
    display:inline-flex;
    justify-content: space-between;
    align-items: center;
    &:active {
    transform: scale(1.05);
   }
   &:hover {
    filter: saturate(1.7)
   }
  }

  .icon {
    fill:white;
    margin-left:4px;
    height: 1.2em;
  }
  
  </style>