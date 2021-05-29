
import VueConstructor from '@jsmodules/basic.js';
import MovieBox from '@jscomponents/movies/movie_box.vue';
import IconPolishFlag from '@jscomponents/decoration/flags/icon_polish_flag.vue';

const Vue = VueConstructor.build();
Vue.component('movie-box', MovieBox);
Vue.component('icon-polish-flag', IconPolishFlag);

  new Vue({
 el: '#app',

 data : {
    
 },

 methods : {
 	
}

});