import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import MovieBox from "@jscomponents/movies/movie_box.vue";
import MoviePreviewComplete from "@jscomponents/movies/movie_preview_complete.vue";
import LinksBox from '@jscomponents/links_box.vue';
import AddFileIcon from '@svgicon/add_file_icon';

const settings = {

  components : {
    MovieBox,
    MoviePreviewComplete,
    LinksBox,
    AddFileIcon
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
