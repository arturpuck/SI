import BasicElements from '@jsmodules/basic.js';
import { createApp } from 'vue';
import MoviePreviewComplete from '@jscomponents/movies/movie_preview_complete.vue';
import MovieBox from '@jscomponents/movies/movie_box.vue';
import IconPolishFlag from '@jscomponents/decoration/flags/icon_polish_flag.vue';
import LinksBox from '@jscomponents/links_box.vue';
import OhIcon from '@svgicon/oh_icon.vue';


const app = createApp({});
BasicElements.registerBasicComponents(app);
app.component('movie-box', MovieBox);
app.component('icon-polish-flag', IconPolishFlag);
app.component('movie-preview-complete', MoviePreviewComplete);
app.component('links-box', LinksBox);
app.component('oh-icon', OhIcon);
app.mount("#app");