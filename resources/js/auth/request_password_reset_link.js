
import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import IconStop from '@jscomponents/decoration/icon_stop.vue';
import IconConfirm from '@jscomponents/decoration/icon_confirm.vue';
import ExpectBar from '@jscomponents/decoration/expect_bar.vue';

const settings = {

   data() {

      return {
         verificationInProgress: false
      };

   },

   methods: {
      validateEmail(sender) {

         async function checkIfEmailExists(email) {
            try {
               const response = await fetch(`/verify-email/${email}`);
               email = encodeURI(email);

               switch (response.status) {
                  case 200:
                     throw "this_email_address_does_not_exist";
                     break;

                  case 400:
                     sender.showValueIsOK();
                     break;

                  case 429:
                     throw "to_many_attemts_during_one_minute";
                     break;

                  default:
                     throw "undefined_error";
                     break;
               }
            }
            catch (error) {
               sender.showError(error);
            }
         }

         const email = sender.inputValue;
         const root = this.$root;

         if (!email) {
            sender.resetValidation();
         }
         else {
            root.verificationInProgress = true;
            checkIfEmailExists(email);
            root.verificationInProgress = false;
         }
      }

   }

};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.component('icon-stop', IconStop);
app.component('icon-confirm', IconConfirm);
app.component('expect-bar', ExpectBar);
app.mount("#app");