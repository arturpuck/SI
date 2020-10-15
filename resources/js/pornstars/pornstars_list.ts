import VueConstructor from '@jsmodules/basic.js';
import PornstarsList from '@jscomponents/pornstars/pornstars_list.vue';

const Vue = VueConstructor.build();
Vue.component('pornstars-list', PornstarsList);

new Vue({
    el: '#app',

    data(){
        return {
            requestedText: ''
        }
    },
   
   
    methods : {
           
    }
   
   });