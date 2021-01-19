import VueConstructor from '@jsmodules/basic.js';
import SimpleLabeledSelect from '@jscomponents-form-controls/simple_labeled_select.vue';
import LabeledCheckBox from '@jscomponents-form-controls/labeled_checkbox.vue';
import UserNotification from '@jscomponents/user_notification.vue';
import NotificationFunction from '@jsmodules/notification_function.ts';
const Vue = VueConstructor.build();
import MultiSelect from '@jscomponents-form-controls/multiselect.vue';
import Translator from '@jsmodules/translator.js';
import SearchEngineAvailableOptions from '@jsmodules/translations/search_engine_available_options.js';
import RelativeShadowContainer from '@jscomponents/decoration/relative_shadow_container.vue';
import ExpectCircle from '@jscomponents/decoration/expect_circle.vue';
import AcceptButton from '@jscomponents-form-controls/accept_button.vue';
import ResetButton from '@jscomponents-form-controls/reset_button.vue';

import { createTextChangeRange } from 'typescript';
import { createDecorator } from 'vue-class-component';
Vue.component('simple-labeled-select',SimpleLabeledSelect);
Vue.component('labeled-checkbox', LabeledCheckBox);
Vue.component('user-notification', UserNotification);
Vue.component('multiselect', MultiSelect);
Vue.component('relative-shadow-container',RelativeShadowContainer);
Vue.component('expect-circle',ExpectCircle);
Vue.component('accept-button',AcceptButton);
Vue.component('reset-button',ResetButton);

  new Vue({
  el: '#app',

  data : {
  
   searchEngineOptions : SearchEngineAvailableOptions,
   csrfToken : undefined,
   multiselectValues : [],
   translator : Translator,
   fetchingPornstarsInProgress : true,
   minimumMovieTime : 0,
   maximumMovieTime : 0,
   minimumMovieViews : 0,
   maximumMovieViews : 0
  },
  
  computed : {

      minimumMovieTimeLabel(): string{
          return (this.minimumMovieTime == 0) ? 
          this.searchEngineOptions['notSelected'] : `${this.minimumMovieTime} ${this.searchEngineOptions['selectedTimeLabel']}`;
      },

      maximumMovieTimeLabel(): string{
        return (this.maximumMovieTime == 0) ? 
        this.searchEngineOptions['notSelected'] : `${this.maximumMovieTime} ${this.searchEngineOptions['selectedTimeLabel']}`;
      },

      minimumMovieViewsLabel(): string{
        return (this.minimumMovieViews == 0) ? 
        this.searchEngineOptions['notSelected'] : `${this.minimumMovieViews} ${this.searchEngineOptions['selectedViewsLabel']}`;
      },

      maximumMovieViewsLabel(): string{
        return (this.maximumMovieViews == 0) ? 
        this.searchEngineOptions['notSelected'] : `${this.maximumMovieViews} ${this.searchEngineOptions['selectedViewsLabel']}`;
      }
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

            try{
                const response = await fetch('/pornstars/advanced-search/list',requestData);

                if(response.status == 200){
                   let pornstars = await response.json();
                   this.$root.$emit('replaceAvailableOptionsForMultiselect',pornstars);
                }
                else{
                  this.showNotification(this.translator.translate('failed_to_fetch_pornstars_list'), 'error');
                }
            }
            finally{
                this.fetchingPornstarsInProgress = false;
            }
            
          }

    },

    mounted(){
      this.csrfToken = (<HTMLMetaElement>document.getElementById("csrf-token")).content;
      this.fetchPornstars();
    }

});