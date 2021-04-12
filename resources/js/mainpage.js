
import VueConstructor from '@jsmodules/basic.js';
import SmileInGlassesIcon from '@svgicon/smile_in_glasses_icon.vue';
import RocketLaunchIcon from '@svgicon/rocket_launch_icon.vue';
import StarFullIcon from '@svgicon/star_full_icon.vue';
import VideoPlaylistIcon from '@svgicon/video_playlist_icon.vue';
import MagnifierIcon from '@svgicon/magnifier_icon.vue';

const Vue = VueConstructor.build();
Vue.component('smile-in-glasses-icon', SmileInGlassesIcon);
Vue.component('rocket-launch-icon', RocketLaunchIcon);
Vue.component('star-full-icon', StarFullIcon);
Vue.component('video-playlist-icon', VideoPlaylistIcon);
Vue.component('magnifier-icon', MagnifierIcon);

new Vue({
  el: '#app',

  data: {

  },

  methods: {

  }

});

