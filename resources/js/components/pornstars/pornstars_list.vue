<template>
<div class="pornstars-list-container">
  <div class="input-search-container">
     <hinted-search-field
    v-model="requestedText"
    v-bind:description="translations['search_field_description']"
    v-bind:hints="hintsList"
    v-on:valueInHintedSearchFieldHasBeenChosen="findPornstar"
    v-bind:placeholder-text="translations['search_field_placeholder']"/>
  </div>
    <ul class="pornstars-list">
      <li v-for="pornstarNickname in displayedPornstars" class="pornstar-preview">
         <a v-bind:href="getPornstarProfileRoute(pornstarNickname)" class="pornstar-profile-link">
           <img class="pornstar-preview-image" v-bind:src="getPornstarImageFilePath(pornstarNickname)"/>
           <span v-text="pornstarNickname" class="pornstar-nick-name"></span>
         </a>
      </li>
    </ul>
    <div v-show="showNoResultsInfo" class="no-results-message">
        <span class="fas fa-frown no-results-info-icon"></span>
        <span v-text="translations['no_results_has_been_found']" class="no-results-text"></span> 
        <button v-text="translations['reset_search_button_caption']" v-on:click="resetSearchInput" class="reset-search-button" type="button"></button>
    </div>
</div>
</template>

<script lang="ts">
  import {Vue, Component, Prop, Watch} from 'vue-property-decorator';
  import Translator from '@jsmodules/translator.js';
  import HintedSearchField from '@jscomponents/form_controls/hinted_search_field.vue'

 @Component({ components : {
     HintedSearchField
 }})
  export default class PornstarsList extends Vue {

    @Prop({
            type: Array,
            required: true,
        }) readonly allPornstarsNickNames: Array<string>;

    @Prop({
            type: String,
            required: true,
        }) readonly pornstarProfileRoute: string;

    @Watch('requestedText')
    resetListIfValueIsEmpty(requestedText:string){
      if(!requestedText){

        this.displayedPornstars = this.allPornstarsNickNames;
      }
    }

    private translations: Object = Translator.getPackage('pornstars_list');
    private requestedText: string = '';
    private displayedPornstars: Array<string> = [];

    created(){
       this.displayedPornstars = this.allPornstarsNickNames;
    }

    findPornstar(nicknameSelectedByUser:string){
       nicknameSelectedByUser = nicknameSelectedByUser.toLowerCase();

        const results = this.allPornstarsNickNames.filter(function filterPornstarList(nickname){
             nickname = nickname.toLowerCase();
             return nickname.includes(nicknameSelectedByUser);
        });

        this.displayedPornstars = results;
    }

    getPornstarImageFilePath(pornstarNickname:string) : string{
      const pornstarFileName = pornstarNickname.replace(/ /g, '_');
      return `/images/decoration/pornstars/profile-small/${pornstarFileName}.jpg`;
    }

    getPornstarProfileRoute(pornstarNickname:string) : string {
        return `${this.pornstarProfileRoute}/${pornstarNickname.replace(/ /g, '_')}`;
    }

    resetSearchInput(){
      this.requestedText = '';
    }

    get showNoResultsInfo(): boolean{
      return (this.displayedPornstars.length === 0);
    }

    get hintsList() : Array<string> {
      
         if(!this.requestedText){
            return [];
         }
         const keyword = this.requestedText.toLowerCase();
         let numberOfAcceptedResults = 0;
         let hints = [];

         for(const nickname of this.allPornstarsNickNames){

             if(nickname.toLowerCase().includes(keyword)){
                  ++numberOfAcceptedResults;
                  hints.push(nickname);
                  if(numberOfAcceptedResults === 10){
                    break;
                  }
              }
         }
      
         return hints;
    }
 
  }
</script>

<style lang="scss">
   @import '~sass/fonts';

   .reset-search-button{
     border:none;
     outline:none;
     display:block;
     min-width:200px;
     width:20%;
     margin:8px auto;
     border-radius:5px;
     @include responsive-font();
     padding:6px;
     background:crimson;
     &:hover{
      background: linear-gradient(#15ec1c, #0a4806);
     }
     color:white;
     cursor:pointer;
   }

   .no-results-info-icon{
     display:block;
     @include responsive-font(2.7vw,35px,"");
     color:crimson;
   }

   .no-results-message{
    width: 30vw;
    min-width: 300px;
    padding: 5px;
    text-align: center;
    background: rgba(0,0,0,0.9);
    color: white;
    margin: 0 auto;
    border-radius: 8px;
    border: 2px solid #171515;
    box-shadow: 2px 2px 2px 2px black;
    @include responsive-font(1.3, 18px);
   }

   .pornstar-nick-name{
     position:absolute;
     bottom:0;
     left:0;
     width:100%;
     padding:6px 0;
     text-align: center;
     color:white;
     background:#000000e3;
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
     display: grid;
     grid-template-columns: repeat(auto-fit, 240px);
     justify-content: space-evenly;
     grid-column-gap: 8px;
     grid-row-gap: 10px;
     padding:5px 0;
   }

   .pornstar-preview{
     overflow: hidden;
     border-radius: 7px;
     margin:6px;
     box-shadow: 2px 2px 2px 2px black;
     border: 2px solid #232121;
   }

   .pornstar-preview-image{
     width:240px;
     height:360px;
     &:hover{
        filter: contrast(130%)
     }
   }

   .input-search-container{
     text-align: center;
   }
</style>