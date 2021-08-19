
import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import SmileInGlassesIcon from '@svgicon/smile_in_glasses_icon.vue';
import RocketLaunchIcon from '@svgicon/rocket_launch_icon.vue';
import StarFullIcon from '@svgicon/star_full_icon.vue';
import VideoPlaylistIcon from '@svgicon/video_playlist_icon.vue';
import MagnifierIcon from '@svgicon/magnifier_icon.vue';
import AddFileIcon from '@svgicon/add_file_icon.vue';

const settings = {

  data() {
     return {

     };
  },

  methods: {

    showCategories(){
      this.emitter.emit('showMoviesCategories');
    }

  }

};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.component('smile-in-glasses-icon', SmileInGlassesIcon);
app.component('rocket-launch-icon', RocketLaunchIcon);
app.component('star-full-icon', StarFullIcon);
app.component('video-playlist-icon', VideoPlaylistIcon);
app.component('magnifier-icon', MagnifierIcon);
app.component('add-file-icon', AddFileIcon);
app.mount("#app");

