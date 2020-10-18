<template>
<div class="pornstars-list-container">
  <div class="input-search-container">
     <hinted-search-field
    v-model="requestedText"
    v-bind:description="translations['search_field_description']"
    v-bind:placeholder-text="translations['search_field_placeholder']"/>
  </div>
    <ul class="pornstars-list">
      <li v-for="pornstarNickname in pornstarsNickNames" class="pornstar-preview">
         <a class="pornstar-profile-link">
           <img class="pornstar-preview-image" v-bind:src="getPornstarImageFilePath(pornstarNickname)"/>
           <span v-text="pornstarNickname" class="pornstar-nick-name"></span>
         </a>
      </li>
    </ul>
</div>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from 'vue-property-decorator';
  import Translator from '@jsmodules/translator.js';
  import HintedSearchField from '@jscomponents/form_controls/hinted_search_field.vue'

 @Component({ components : {
     HintedSearchField
 }})
  export default class PornstarsList extends Vue {

    @Prop({
            type: Array,
            required: true,
        }) readonly pornstarsNickNames: object;

    private translations: Object = Translator.getPackage('pornstars_list');
    private requestedText: string = '';

    getPornstarImageFilePath(pornstarNickname:string) : string{
      const pornstarFileName = pornstarNickname.replace(/ /g, '_');
      return `/images/decoration/pornstars/profile-small/${pornstarFileName}.jpg`;
    }
 
  }
</script>

<style lang="scss">
   @import '~sass/fonts';

   .pornstar-nick-name{
     position:absolute;
     bottom:0;
     left:0;
     width:100%;
     padding:6px 0;
     text-align: center;
     color:white;
     background:#ef0244bf;
     font:{
       size:16px;
       family: Aldrich;
     }
   }

   .pornstar-profile-link{
     text-decoration: none;
     display: block;
     font-size: 0;
     position:relative;
   }

   .pornstars-list{
     list-style-type: none;
     display:flex;
     flex-wrap: wrap;
     justify-content: space-evenly;
     margin:0;
     padding:5px 0;
   }

   .pornstar-preview{
     overflow: hidden;
     border-radius: 7px;
     margin:6px;
     box-shadow: 2px 2px 2px 2px black;
     border: 2px solid #b52913;
     &:hover{
        filter: contrast(130%)
     }
   }

   .pornstar-preview-image{
     width:240px;
     height:360px;
   }

   .input-search-container{
     text-align: center;
   }
</style>