import BasicElements from '@jsmodules/basic.js';
import { createApp } from 'vue';
import DictionaryIcon from "@svgicon/dictionary_icon";
import InfoCircleIcon from '@svgicon/info_circle_icon.vue'


const settings = {

    components : {
      DictionaryIcon,
      InfoCircleIcon
    },

    data(){
        return {
            
        }
    },
   
   
};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");