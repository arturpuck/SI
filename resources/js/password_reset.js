require('./bootstrap');
import Vue from 'vue';
import Navbar  from './components/navbar.vue';
import SubmitButton from "./components/submit_button.vue";

Vue.component('navbar', Navbar);
Vue.component('submit-button', SubmitButton);

  new Vue({
 el: '#app',

 data : {
    
 },

 methods : {
 	
}

});