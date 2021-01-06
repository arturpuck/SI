import VueConstructor from '@jsmodules/basic.js';
import SimpleLabeledSelect from '@jscomponents-form-controls/simple_labeled_select.vue';
const Vue = VueConstructor.build();

import SearchEngineAvailableOptions from '@jsmodules/search_engine_available_options.js';
Vue.component('simple-labeled-select',SimpleLabeledSelect);

  new Vue({
 el: '#app',

 data : {
  
   searchEngineOptions : SearchEngineAvailableOptions
  
    
 },

 methods : {
 	
}

});