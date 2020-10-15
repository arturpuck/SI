<template>
<label class="search-field-container">
   <span class="fas fa-search"></span>
   <input type="search" class="search-value"/>
   <span v-text="description" class="search-field-description"></span>
   <ul class="hints-list">

   </ul>
</label>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import Translator from '@jsmodules/translator.js';

 @Component
  export default class HintedSearchField extends Vue {


    @Prop({
            type: String,
            required: true,
    }) readonly value: string;
    
    @Prop({
            type: String,
            required: false,
            default: '',
    }) readonly placeholderText: string;

    @Prop({
            type: String,
            required: true,
    }) readonly description: string;
 
  }
</script>

<style lang="scss">
   @import '~sass/fonts';

   .search-field-container{
       position: relative;
       @include responsive-font();
       background:black;
       border-radius:10%;
       border:1px solid silver;
       display:flex;
       align-items: baseline;
   }

   .search-value{
       background:transparent;
       border:none;
       outline:none;
       &:focus{
           border-bottom:1px solid white;
       }
   }

   .hints-list{
       position:absolute;
       top:100%;
       width:100%;
       left:0;
   }

   .search-field-description{
       position:absolute;
       left:0;
       top:-9999px;
   }


</style>