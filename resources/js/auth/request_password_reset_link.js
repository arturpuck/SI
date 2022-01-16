
import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import IconStop from '@jscomponents/decoration/icon_stop.vue';
import IconConfirm from '@jscomponents/decoration/icon_confirm.vue';
import ExpectBar from '@jscomponents/decoration/expect_bar.vue';
import ContactingComboInputs from '@mixins/components/comboInputs/contactingComboInputs';

const settings = {

   mixins : [ContactingComboInputs],

   data() {

      return {
         verificationInProgress: false
      };

   },

   methods: {

      async checkIfEmailExists(email)  {

         email = encodeURI(email);

         try {
            const response = await fetch(`/verify-email/${email}`);

            switch (response.status) {
               case 200:
                  const responseData = await response.json();
                  this.processCorrectEmailResponse(responseData);
                  break;

               case 400:
                  throw new Error(responseData);
                  break;

               case 429:
                  throw new Error("to_many_attemts_during_one_minute");
                  break;

               default:
                  throw new Error("undefined_error");
                  break;
            }
         }
         catch (error) {
            this.notifyComboInputAboutState('Email', error.message);
         }
         finally{
            this.verificationInProgress = false;
         }
      },

      validateEmail(email) {

         if (!email) {
            this.resetComboInput();
         }
         else {
            this.verificationInProgress = true;
            this.checkIfEmailExists(email);
         }
      },

      processCorrectEmailResponse(response) {
         if (response === 'exists') {
            this.notifyComboInputAboutState();
         }
         else {
            this.notifyComboInputAboutState('', "this_email_address_does_not_exist");
         }
      },

   }

};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.component('icon-stop', IconStop);
app.component('icon-confirm', IconConfirm);
app.component('expect-bar', ExpectBar);
app.mount("#app");