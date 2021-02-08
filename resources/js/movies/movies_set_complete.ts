import VueConstructor from '@jsmodules/basic.js';
import MovieBox from '@jscomponents/movies/movie_box.vue';
import IconPolishFlag from '@jscomponents/decoration/flags/icon_polish_flag.vue';
import LinksBox from '@jscomponents/links_box.vue';
import MoviePreviewComplete from '@jscomponents/movies/movie_preview_complete.vue';

const Vue = VueConstructor.build();
Vue.component('movie-box', MovieBox);
Vue.component('icon-polish-flag', IconPolishFlag);
Vue.component('links-box', LinksBox);
Vue.component('movie-preview-complete', MoviePreviewComplete);

  new Vue({
 el: '#app',

});