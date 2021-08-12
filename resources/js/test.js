import Vue from 'vue';
import TestButton from '@jscomponents/test';

const settings = {

    components : {
        TestButton
    },

    data() {
       return {
  
       };
    },
  
    methods: {
  
        showAlert(){
        alert("I work yeeeeahh!!"); 
      }
  
    }
  
  };
  
  const app = Vue.createApp(settings);
  app.config.compilerOptions.whitespace = 'preserve';
  app.mount("#app");
  