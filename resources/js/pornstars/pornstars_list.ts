import BasicElements from '@jsmodules/basic.js';
import { createApp } from 'vue';
import PornstarsList from '@jscomponents/pornstars/pornstars_list.vue';
import StarFullIcon from '@jscomponents/decoration/icons/svg/star_full_icon.vue'

const settings = {

    data(){
        return {
            requestedText: ''
        }
    },

    components : {
       PornstarsList,
       StarFullIcon,
    }
   
   
};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");