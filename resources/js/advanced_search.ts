import VueConstructor from '@jsmodules/basic.js';
import SimpleLabeledSelect from '@jscomponents-form-controls/simple_labeled_select.vue';
import LabeledCheckBox from '@jscomponents-form-controls/labeled_checkbox.vue';
import UserNotification from '@jscomponents/user_notification.vue';
import NotificationFunction from '@jsmodules/notification_function.ts';
const Vue = VueConstructor.build();
import MultiSelect from '@jscomponents-form-controls/multiselect.vue';
import Translator from '@jsmodules/translator.js';
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
   multiselectValues : [],
   translator : Translator
  
 },

    methods : {

    showNotification : NotificationFunction,

     async fetchPornstars(){

        const requestData = {

            method : 'GET',
            headers : {
              'X-CSRF-TOKEN' : this.csrfToken
            } 
         };
         
         const response = await fetch('/pornstars/advanced-search/list',requestData);

         if(response.status == 200){
            let pornstars = await response.json();
            this.$root.$emit('replaceAvailableOptionsForMultiselect',pornstars);
         }
         else{
            this.showNotification(this.translator.translate('failed_to_fetch_pornstars_list'), 'error');
         }
      }

    },

    created(){
      this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
      this.fetchPornstars();
      this.showNotification(this.translator.translate('failed_to_fetch_pornstars_list'), 'error');
    }

});