import VueConstructor from '@jsmodules/basic.js';
import SimpleLabeledSelect from '@jscomponents-form-controls/simple_labeled_select.vue';
import LabeledCheckBox from '@jscomponents-form-controls/labeled_checkbox.vue';
const Vue = VueConstructor.build();

import SearchEngineAvailableOptions from '@jsmodules/search_engine_available_options.js';
Vue.component('simple-labeled-select',SimpleLabeledSelect);
Vue.component('labeled-checkbox', LabeledCheckBox);

  new Vue({
 el: '#app',

 data : {
  
   searchEngineOptions : SearchEngineAvailableOptions
  
    
 },

 methods : {
 	
}

});