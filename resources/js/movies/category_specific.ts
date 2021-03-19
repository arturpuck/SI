import VueConstructor from '@jsmodules/basic.js';
import MoviePreviewComplete from '@jscomponents/movies/movie_preview_complete.vue';
import MovieBox from '@jscomponents/movies/movie_box.vue';
import IconPolishFlag from '@jscomponents/decoration/flags/icon_polish_flag.vue';
import LinksBox from '@jscomponents/links_box.vue';
import OhIcon from '@svgicon/oh_icon.vue';

const Vue = VueConstructor.build();
Vue.component('movie-box', MovieBox);
Vue.component('icon-polish-flag', IconPolishFlag);
Vue.component('movie-preview-complete', MoviePreviewComplete);
Vue.component('links-box', LinksBox);
Vue.component('oh-icon', OhIcon);

new Vue({
  el: '#app',

  data: {

  },

  methods: {

  }

});