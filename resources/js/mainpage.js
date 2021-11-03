
import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import SmileInGlassesIcon from '@svgicon/smile_in_glasses_icon.vue';
import RocketLaunchIcon from '@svgicon/rocket_launch_icon.vue';
import StarFullIcon from '@svgicon/star_full_icon.vue';
import VideoPlaylistIcon from '@svgicon/video_playlist_icon.vue';
import MagnifierIcon from '@svgicon/magnifier_icon.vue';
import AddFileIcon from '@svgicon/add_file_icon.vue';
import MovieMediaPlayerIcon from "@svgicon/movie_media_player_icon";
import HorizontalScrollList from "@jscomponents/movies/horizontal_scroll_list"
import MovieBox from "@jscomponents/movies/movie_box.vue";
import MoviePreviewComplete from "@jscomponents/movies/movie_preview_complete.vue";

const settings = {

  components : {
    SmileInGlassesIcon,
    RocketLaunchIcon,
    StarFullIcon,
    VideoPlaylistIcon,
    MagnifierIcon,
    AddFileIcon,
    MovieMediaPlayerIcon,
    HorizontalScrollList,
    MovieBox,
    MoviePreviewComplete
  },

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
app.mount("#app");

