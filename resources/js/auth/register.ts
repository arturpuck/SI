import BasicElements from '@jsmodules/basic.js';
import { createApp } from 'vue';
import TextareaCombo from '@jscomponents/form_controls/textarea_combo.vue';
import IconStop from '@jscomponents/decoration/icon_stop.vue';
import IconConfirm from '@jscomponents/decoration/icon_confirm.vue';
import ExpectCircle from '@jscomponents/decoration/expect_circle.vue';
import DescribedSelect from '@jscomponents/form_controls/described_select.vue';
import DatePicker from '@jscomponents/form_controls/date_picker.vue';
import ContactingComboInputs from '@mixins/components/comboInputs/contactingComboInputs';

const settings = {

   data() {
      return {
         verificationInProgress: false
      }

   },

   components : {
      TextareaCombo,
      IconStop,
      IconConfirm,
      ExpectCircle,
      DescribedSelect,
      DatePicker
   },

   mixins : [ContactingComboInputs],

   methods: {

      processCorrectLoginResponse(response: string): void {

         if (response === 'exists') {
            this.notifyComboInputAboutState('Login', "login_has_already_been_taken");
         }
         else {
            this.notifyComboInputAboutState('Login');
         }
      },

      processCorrectEmailResponse(response: string): void {
         if (response === 'exists') {
            this.notifyComboInputAboutState('Email', "email_has_already_been_taken");
         }
         else {
            this.notifyComboInputAboutState('Email');
         }
      },

      setVerificationDecorationVisibility(visible : boolean): void {
         this.verificationInProgress = visible;
      },

      async checkIfLoginExists(login: string) {

         login = encodeURI(login);

         try {
            const response = await fetch(`verify-login/${login}`);

            switch (response.status) {
               case 200:
                  const responseData = await response.json();
                  this.processCorrectLoginResponse(responseData);
                  break;

               case 400:
                  throw new Error("login_is_required") ;
                  break;

               case 429:
                  throw Error("to_many_attemts_during_one_minute");
                  break;

               default:
                  throw Error("undefined_error");
                  break;
            }
         }
         catch (error) {
            this.notifyComboInputAboutState('Login', error.message);
         }
         finally{
            this.setVerificationDecorationVisibility(false);
         }
      },
      
      validateLogin(login: string) {
         
         if (login === '') {
            this.resetComboInput('Login');
            this.setVerificationDecorationVisibility(false);
            return;
         }
         this.setVerificationDecorationVisibility(true);
         
         try {
            if (login.length < 3) {
               throw new Error("login_contains_less_then_3_characters");
            }
            
            if (login.length > 20) {
               throw new Error("login_contains_more_then_20_characters");
            }
            this.checkIfLoginExists(login);
         }
         catch (error) {
            this.notifyComboInputAboutState('Login', error.message);
         }
         finally{
            this.setVerificationDecorationVisibility(false);
         }

      },

      async checkIfEmailExists(email: string)  {

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
            this.setVerificationDecorationVisibility(false);
         }
      },

      emailhasCorrectFormat(email) {
         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      },

      validateEmail(email: string) {
         
         if (email === '') {
            this.setVerificationDecorationVisibility(false);
            this.resetComboInput('Email');
            return;
         }
         
         if (!this.emailhasCorrectFormat(email)) {
               this.setVerificationDecorationVisibility(false);
               this.notifyComboInputAboutState('Email', "email_seems_to_be_incorrect");
            }
            else{
               this.checkIfEmailExists(email);
            }
      },

      validatePassword(password : string) {

         try {

            if (password === '') {
               this.resetComboInput('Password');
               return;
            }

            if (password.length < 3) {
               throw new Error("password_has_less_then_3_characters");
            }

            if (password.length > 20) {
               throw new Error("password_has_more_then_20_characters");
            }
            this.notifyComboInputAboutState('Password');
         }
         catch (error) {
            this.notifyComboInputAboutState('Password', error.message);
         }
      },

      validateSelect(labeledValue : {value : string, uniqueId : string}) {

         if (labeledValue.value === 'not-selected') {
            this.notifyComboInputAboutState(labeledValue.uniqueId, 'you_have_to_choose_one_option');
         }
         else {
            this.notifyComboInputAboutState(labeledValue.uniqueId);
         }
      },

      checkIfUserIsAdault(dateString : string) {
         const dateNow = new Date();
         const date18yearsAgo = dateNow.setFullYear(dateNow.getFullYear() - 18);
         const dateShards  = dateString.split('-');
         const userSelectedDate = {
            year : Number(dateShards[0]),
            month : Number(dateShards[1]),
            day : Number(dateShards[2])
         };
         const chosenDate = new Date(userSelectedDate.year, userSelectedDate.month - 1, userSelectedDate.day).getTime();
         if (chosenDate <= date18yearsAgo) {
             this.notifyComboInputAboutState('UserBirthDate');
         }
         else {
            this.notifyComboInputAboutState('UserBirthDate',"you_are_under_18");
         }
      }
   }

};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");
