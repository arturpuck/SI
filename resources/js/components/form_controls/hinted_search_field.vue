<template>
<div class="search-field-container" v-bind:class="{'focused-input-container' : focus}">
   <label v-text="description" for="hinted-search-text" class="search-field-description"></label>
   <div class="icon-container">
      <span class="fas fa-search magnifier-icon"></span>
   </div>
   <input v-bind:placeholder="placeholderText" v-model="value" v-on:input="emitValue" v-on:focusout="toggleFocus" v-on:focus="toggleFocus" id="hinted-search-text" type="search" class="search-value"/>
   <button v-text="translations['search']" class="search-button"></button>
   <ul class="hints-list">

   </ul>
</div>
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
            type: Array,
            required: false,
            default: [],
    }) readonly hints: Array<string>;

    @Prop({
            type: String,
            required: true,
    }) readonly description: string;

    private translations = Translator.getPackage('hinted_search_field');
    private focus = false;

    toggleFocus(){
       this.focus = !this.focus;
    }

    emitValue(event){
        this.$emit('input', event.target.value);
    }
 
  }
</script>

<style lang="scss">
   @import '~sass/fonts';

   .magnifier-icon{
        color:white;
        margin: 0 5px;
   }

   .icon-container{
       background:linear-gradient(#f1165d, #7b0e1d);
       display:inline-flex;
       align-items: center;
   }

   .search-button{
       cursor:pointer;
       background:linear-gradient(#f1165d, #7b0e1d);
       border: none;
       outline: none;
       color: #f1d6d6;
       padding:5px;
       @include responsive-font(1.5vw, 18px, Aldrich);
   }

   .search-field-container{
       position: relative;
       @include responsive-font(1.5vw, 18px);
       background:#312d3c;
       border:2px solid #670815;
       background: #201c29;
       border-radius: 10px;
       border: 2px solid #312d3c;
       overflow:hidden;
       display: inline-flex;
       align-items: stretch;
   }

   .focused-input-container{
       border:2px solid white;
   }

   .search-value{
       background:transparent;
       min-width:150px;
       width:20vw;
       outline:none;
       border:none;
       @include responsive-font(1.4vw,17px);
       color:white;
       padding-left: 5px;
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