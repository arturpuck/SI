import VueConstructor from '@jsmodules/basic.js';
import MovieBox from '@jscomponents/movies/movie_box.vue';
import IconPolishFlag from '@jscomponents/decoration/flags/icon_polish_flag.vue';
import MoviePreview from '@jscomponents/movies/movie_preview.vue';
import FixedShadowContainer from '@jscomponents/decoration/fixed_shadow_container.vue';
import LinksBox from '@jscomponents/links_box.vue'

const Vue = VueConstructor.build();
Vue.component('movie-box', MovieBox);
Vue.component('icon-polish-flag', IconPolishFlag);
Vue.component('movie-preview', MoviePreview);
Vue.component('fixed-shadow-container', FixedShadowContainer);
Vue.component('links-box', LinksBox);

  new Vue({
 el: '#app',

 data() {
    return {
       showsPreview : false,
    }
 },

 methods : {
 	   
 },

 mounted(){
   this.$root.$on('showPreview', ()=> this.showsPreview = true);
   this.$root.$on('closePreview', ()=> this.showsPreview = false);
 }

});