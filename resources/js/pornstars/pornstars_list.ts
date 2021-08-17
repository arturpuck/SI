import BasicElements from '@jsmodules/basic.js';
import { createApp } from 'vue';
import PornstarsList from '@jscomponents/pornstars/pornstars_list.vue';

const settings = {

    data(){
        return {
            requestedText: ''
        }
    },
   
   
};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.component('pornstars-list', PornstarsList);
app.mount("#app");