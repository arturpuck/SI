
import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import AchievementMedalAwardIcon from '@svgicon/achievement_medal_award_icon.vue';
import AddFileIcon from '@svgicon/add_file_icon.vue';
import MovieBox from "@jscomponents/movies/movie_box.vue";
import MoviePreviewComplete from "@jscomponents/movies/movie_preview_complete.vue";
import LinksBox from '@jscomponents/links_box.vue';
import NewBoardIcon from "@svgicon/new_board_icon.vue";

const settings = {

  components : {
    AchievementMedalAwardIcon,
    AddFileIcon,
    MovieBox,
    MoviePreviewComplete,
    LinksBox,
    NewBoardIcon
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

