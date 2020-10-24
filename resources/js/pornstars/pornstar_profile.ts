
import VueConstructor from '@jsmodules/basic.js';
import MoviesList from '@jscomponents/movies/movies_list.vue';

const Vue = VueConstructor.build();
Vue.component('movies-list', MoviesList)

new Vue({
    el: '#app',

    data(){
        return {
            
        }
    },
   
   
    methods : {
           
    }
   
   });