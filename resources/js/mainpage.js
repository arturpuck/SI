
import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import AchievementMedalAwardIcon from '@svgicon/achievement_medal_award_icon.vue';
import StarFullIcon from '@svgicon/star_full_icon.vue';
import NewBoardIcon from '@svgicon/new_board_icon.vue';
import VideoPlaylistIcon from '@svgicon/video_playlist_icon.vue';
import MagnifierIcon from '@svgicon/magnifier_icon.vue';
import AddFileIcon from '@svgicon/add_file_icon.vue';
import MovieMediaPlayerIcon from "@svgicon/movie_media_player_icon";
import MovieBox from "@jscomponents/movies/movie_box.vue";
import MoviePreviewComplete from "@jscomponents/movies/movie_preview_complete.vue";
import LinksBox from '@jscomponents/links_box.vue';

const settings = {

  components : {
    AchievementMedalAwardIcon,
    StarFullIcon,
    VideoPlaylistIcon,
    MagnifierIcon,
    AddFileIcon,
    MovieMediaPlayerIcon,
    MovieBox,
    MoviePreviewComplete,
    NewBoardIcon,
    LinksBox
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

