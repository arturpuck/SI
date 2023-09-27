<template>
      <ul class="movies-list">
          <slot>

          </slot>
      </ul>
</template>

<script lang="ts">

import Translations from "@jsmodules/translations/components/horizontal_scroll_list";

    export default {

        name: 'horizontal-scroll-list',

        data(){
           return {
               Translations,
               movieBoxSize : 0,
               leftOffset : 0,
               numberOfElemets : 0,
           };
        }

    }
        
</script>

<style lang="scss" scoped>
@import "~sass/nice_scrollbar";


.movies-list{
    display : flex;
    list-style-type: none;
    padding:0;
    margin:0;
    overflow: auto;
    background: #242229;
    padding: 20px 5px 0;
    @media(max-width:470px){
        flex-direction: column;
        align-items: center;
        max-height: 100vh;
    }
}

@include nice-scrollbar(".movies-list");

 
</style>