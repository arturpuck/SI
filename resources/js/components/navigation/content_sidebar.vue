<template>
  <nav class="fixed-sidebar content-side-bar">
    <ul class="user-sidebar-list">
      <li v-on:click="hideSideBar" v-bind:title="translations['hide_side_bar_title']" class="content-sidebar-list-element enlighted-list-content">
			   <phantom-button>
            <span class="fas fa-angle-up content-sidebar-icon"></span>
			      <span v-text="translations['hide_side_bar_caption']" class="sidebar-item-description"></span>
			   </phantom-button>
		  </li>
      <li class="content-sidebar-list-element">
          <span class="enlighted-list-content" v-on:click="toggleMoviesMenu">
             <span v-bind:class="{'fa-film' : !moviesSubMenuIsVisible, 'fa-angle-up' : moviesSubMenuIsVisible}" class="fas content-sidebar-icon"></span>
             <span v-text="translations['movies_caption']" class="sidebar-item-description"></span>
          </span>
          <ul v-bind:aria-hidden="!moviesSubMenuIsVisible" class="nested-user-sidebar-list" v-bind:class="{'visible-sidebar-menu' : moviesSubMenuIsVisible, 'hidden-sidebar-menu' : !moviesSubMenuIsVisible}">
             <li v-bind:title="translations['movie_categories_title']" class="content-sidebar-list-element enlighted-list-content">
			         <span class="fas fa-images content-sidebar-icon-nested"></span>
			         <span v-text="translations['movie_categories_label']" class="sidebar-item-description"></span>
		         </li>
             <li v-bind:title="translations['latest_porn_movies_title']" class="content-sidebar-list-element enlighted-list-content">
               <a v-bind:href="newMoviesRoute" class="sub-menu-link">
                  <span class="fas fa-folder-plus content-sidebar-icon-nested"></span>
                  <span v-text="translations['latest_porn_movies_caption']" class="sidebar-item-description"></span>
               </a>
             </li>
             <li v-bind:title="translations['the_most_popular_porn_movies_title']" class="content-sidebar-list-element enlighted-list-content">
                <span class="fas content-sidebar-icon-nested fa-grin"></span>
                <span v-text="translations['the_most_popular_porn_movies_caption']" class="sidebar-item-description"></span>
             </li>
             <li v-bind:title="translations['advanced_search_title']" class="content-sidebar-list-element enlighted-list-content">
                  <span class="fas content-sidebar-icon-nested fa-search"></span>
                  <span v-text="translations['advanced_search_caption']" class="sidebar-item-description"></span>
             </li>
          </ul>
		  </li>
      <li class="content-sidebar-list-element enlighted-list-content">
         <a v-bind:href="pornstarsListRoute" class="sub-menu-link">
           <span class="fas fa-star content-sidebar-icon"></span>
			     <span v-text="translations['pornstars']" class="sidebar-item-description"></span>
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

    @Prop({
            type: String,
            required: true,
    }) readonly pornstarsListRoute: String;
    
    private translations: Object = Translator.getPackage('content_sidebar');
    moviesSubMenuIsVisible: Boolean = false;

    hideSideBar(){
		    this.$root.$emit('hide-content-bar');
     }

     toggleMoviesMenu(){
       this.moviesSubMenuIsVisible = !this.moviesSubMenuIsVisible;
     }

     
  }
</script>

<style lang="scss">
   @import '~sass/fonts';
   @import '~sass/components/side_bar';

   .enlighted-list-content{
     &:hover{
       background:#211e1e;
     }
     display:block;
     padding:3px 0;
   }

   .visible-sidebar-menu{
     max-height:2000px;
   }

   .hidden-sidebar-menu{
     max-height:0;
   }

   .content-side-bar{
       left:0;
       display:none;
       box-shadow: 1px 1px 2px 2px black;
       min-width:85px;
   }

   .nested-user-sidebar-list{
     overflow:hidden;
     transition:max-height 1.5s;
     margin:0;
     padding: 0;
     list-style-type: none;
   }

   .content-sidebar-list-element{
     @include sidebar-list-element();
   }

   .content-sidebar-icon{
    @include responsive-font(1.4vw,20px, initial);
    color:red;
   }

   .content-sidebar-icon-nested{
     @include responsive-font(1.4vw,20px, initial);
     color:#e0c814;
   }

   @media(max-width: 540px){
       .content-side-bar{
          display: block;
       }
   }

</style>