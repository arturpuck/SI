import Vue from 'vue';
import Navbar  from '../components/navbar.vue';
import ClickDetector from '../components/click_detector.vue';

Vue.component('navbar', Navbar);
Vue.component('click-detector', ClickDetector);

  new Vue({
 el: '#app'

});