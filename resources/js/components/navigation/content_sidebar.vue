<template>
  <nav class="fixed-sidebar content-side-bar">
    <ul class="user-sidebar-list">
      <li v-on:click="hideSideBar" v-bind:title="hideSideBarTitle" class="side-bar-list-element">
			   <phantom-button>
                 <span class="fas fa-angle-up sidebar-icon"></span>
			     <span v-text="hideCaption" class="sidebar-item-description"></span>
			   </phantom-button>
		</li>
        <li class="side-bar-list-element">
            <span v-text="pornDescription" class="sidebar-item-description"></span>
			<span class="fas fa-angle-down sidebar-icon"></span>
		</li>
        <li v-bind:title="movieCategoriesTitle" class="side-bar-list-element">
			<span class="fas fa-images sidebar-icon"></span>
			<span v-text="movieCategoriesLabel" class="sidebar-item-description"></span>
		</li>
        <li v-bind:title="latestPornMoviesTitle" class="side-bar-list-element">
			  <a v-bind:href="newMoviesRoute" class="sub-menu-link">
				<span class="fas fa-folder-plus sidebar-icon"></span>
				<span v-text="latestPornMoviesCaption" class="sidebar-item-description"></span>
			  </a>
		</li>
    </ul>
  </nav>
</template>

<script lang="ts">
	import {Vue, Component, Prop} from 'vue-property-decorator';
    import Translator from '@jsmodules/translator.js';

 @Component 
  export default class ContentSideBar extends Vue {

     @Prop({
            type: String,
            required: false,
            default: '/filmy/najnowsze/strona/1'
		}) readonly newMoviesRoute: String;

    hideSideBar(){
		this.$root.$emit('hide-content-bar');
     }
     
    get hideSideBarTitle():string{
		return Translator.translate('hide_side_bar');
	}

	get hideCaption():string{
		return Translator.translate('hide'); 
    }
    
    get pornDescription():string{
        return Translator.translate('porn');
    }

    get movieCategoriesTitle():string {
        return Translator.translate('movie_categories_title');
    }

    get movieCategoriesLabel():string{
        return Translator.translate('movie_categories_label');
    }

    get latestPornMoviesTitle():string{
       return Translator.translate('latest_porn_movies_title');
    }

    get latestPornMoviesCaption():string{
        return Translator.translate('latest_porn_movies_caption')
    }

  }
</script>

<style lang="scss">
   @import '~sass/fonts';
   @import '~sass/components/side_bar';

   .content-side-bar{
       left:0;
       display:none;
       box-shadow: 1px 1px 2px 2px black;
   }

   @media(max-width: 540px){
       .content-side-bar{
          display: block;
       }
   }

</style>