import VueConstructor from '@jsmodules/basic.js';
import SimpleLabeledSelect from '@jscomponents-form-controls/simple_labeled_select.vue';
import LabeledCheckBox from '@jscomponents-form-controls/labeled_checkbox.vue';
import UserNotification from '@jscomponents/user_notification.vue';

const Vue = VueConstructor.build();
import MultiSelect from '@jscomponents-form-controls/multiselect.vue';
import SearchEngineAvailableOptions from '@jsmodules/translations/search_engine_available_options.js';
import { createTextChangeRange } from 'typescript';
import { createDecorator } from 'vue-class-component';
Vue.component('simple-labeled-select',SimpleLabeledSelect);
Vue.component('labeled-checkbox', LabeledCheckBox);
Vue.component('user-notification', UserNotification);
Vue.component('multiselect', MultiSelect);

  new Vue({
 el: '#app',

 data : {
  
   searchEngineOptions : SearchEngineAvailableOptions,
   csrfToken : undefined,
   multiselectValues : []
  
 },

    methods : {

    },

    created(){
      this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
    }

});