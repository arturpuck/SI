
import VueConstructor from '@jsmodules/basic.js';
import FixedShadowContainer from '@jscomponents/decoration/fixed_shadow_container.vue';
import MovieBox from '@jscomponents/movies/movie_box.vue';
import MoviePreview from '@jscomponents/movies/movie_preview.vue';
import StarRating from '@jscomponents/star_rating.vue';
import {PornstarProfileTab}  from '@js/enum/pornstar_profile_tab';
import DescribedSelect from '@jscomponents/form_controls/described_select.vue';

const Vue = VueConstructor.build();
Vue.component('fixed-shadow-container', FixedShadowContainer);
Vue.component('movie-box', MovieBox);
Vue.component('movie-preview', MoviePreview);
Vue.component('star-rating', StarRating);
Vue.component('described-select', DescribedSelect);

new Vue({
    el: '#app',

    data(){
        return {
            showsPreview:false,
            activeTab : PornstarProfileTab.Movies
        }
    },
   
   
    methods : {
        changeTab(event){
           this.activeTab = event.target.id || event.target.parentElement.id;
        } 
    },

   computed : {
      pornstarMoviesTabIsActive(){
          return this.activeTab == PornstarProfileTab.Movies;
      },

      pornstarCommentsTabIsActive(){
        return this.activeTab == PornstarProfileTab.Comments;
      },

      pornstarRankingTabIsActive(){
        return this.activeTab == PornstarProfileTab.Rank;
      }
   },

    mounted(){
        this.$root.$on('showPreview', ()=> this.showsPreview = true);
        this.$root.$on('closePreview', ()=> this.showsPreview = false);
      }
   
   });