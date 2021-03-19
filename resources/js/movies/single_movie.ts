import VueConstructor from '@jsmodules/basic.js';
import Plyr from 'plyr';

const Vue = VueConstructor.build();

new Vue({
    el: '#app',

    data: {

    },

    methods: {

    },

    mounted() {
        const player = new Plyr('#player');
    }

});