<template>
<div class="pornstars-list-container">
  <hinted-search-field
    v-model="requestedText"
    v-bind:description="translations['search_field_description']"
    v-bind:placeholder-text="translations['search_field_placeholder']"/>
    <ul class="pornstars-list">
      <li v-for="pornstarNickname in pornstarsNickNames" class="pornstar-preview">
         <a class="pornstar-profile-link">
           <img v-bind:src="getPornstarImageFilePath(pornstarNickname)"/>
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
      const pornstarFileName = pornstarNickname.replace(' ', '_');
      return `/images/decoration/pornstars/profile-small/${pornstarFileName}.jpg`;
    }
 
  }
</script>

<style lang="scss">
   @import '~sass/fonts';
   .pornstar-profile-link{
     text-decoration: none;
   }

   .pornstars-list{
     list-style-type: none;
     display:flex;
     flex-wrap: wrap;
     justify-content: space-evenly;
   }
</style>