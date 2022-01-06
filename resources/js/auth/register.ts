import BasicElements from '@jsmodules/basic.js';
import { createApp } from 'vue';
import TextareaCombo from '@jscomponents/form_controls/textarea_combo.vue';
import IconStop from '@jscomponents/decoration/icon_stop.vue';
import IconConfirm from '@jscomponents/decoration/icon_confirm.vue';
import ExpectCircle from '@jscomponents/decoration/expect_circle.vue';
import DescribedSelect from '@jscomponents/form_controls/described_select.vue';
import DatePicker from '@jscomponents/form_controls/date_picker.vue';
import InputComboState from '@interfaces/InputComboState';

const settings = {

   data() {
      return {
         verificationInProgress: false
      }

   },

   methods: {

      notifyComboInputAboutState(receiver: string, errorMessage: string = undefined): void {
         const valueIsCorrect = !Boolean(errorMessage);
         let comboInputStatus: InputComboState = { valueIsCorrect };
         if (!valueIsCorrect) {
            comboInputStatus.errorMessage = errorMessage;
         }
         this.emitter.emit(`showIfValueIsOK${receiver}`, comboInputStatus);
      },

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

      resetComboInput(receiver: string): void {
         this.emmiter.emit(`resetValidation${receiver}`);
      },

      setVerificationDecorationVisibility(visible : boolean): void {
         this.verificationInProgress = visible;
      },

      async  checkIfLoginExists(login: string) {

         login = encodeURI(login);

         try {
            const response = await fetch(`verify-login/${login}`);

            switch (response.status) {
               case 200:
                  const responseData = await response.json();
                  this.processCorrectLoginResponse(responseData);
                  break;

               case 400:
                  throw "login_is_required";
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
            this.notifyComboInputAboutState('Login', error.message);
         }
         finally{
            this.setVerificationDecorationVisibility(false);
         }
      },

      validateLogin(login: string) {

         this.setVerificationDecorationVisibility(true);

         if (login === '') {
            this.resetComboInput('Login');
            return;
         }

         try {
            
            if (login.length < 3) {
               throw "login_contains_less_then_3_characters";
            }

            if (login.length > 20) {
               throw "login_contains_more_then_20_characters";
            }
            this.checkIfLoginExists(login);
         }
         catch (error) {
            this.notifyComboInputAboutState('Login', error.message);
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
                  throw responseData;
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
         
         this.setVerificationDecorationVisibility(true);

         if (email === '') {
            this.resetComboInput('Email');
            return;
         }

            if (!this.emailhasCorrectFormat(email)) {
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
               throw "password_has_less_then_3_characters";
            }

            if (password.length > 20) {
               throw "password_has_more_then_20_characters";
            }
            this.notifyComboInputAboutState('Password');
         }
         catch (error) {
            this.notifyComboInputAboutState('Password', error.message);
         }
      },

      validateUserTypeSelect(selectedValue : string){
          this.validateSelect('UserType', selectedValue);
      },

      validateSexualOrientationSelect(selectedValue : string){
          this.validateSelect('SexualOrientation', selectedValue);
      },

      validateSelect(uniqueID : string, selectedValue : string) {

         if (selectedValue === 'not-selected') {
            this.notifyComboInputAboutState(uniqueID, 'the_user_type_is_incorrect');
         }
         else {
            this.notifyComboInputAboutState(uniqueID)
         }
      },

      checkIfUserIsAdault(dateString : string) {
         const dateNow = new Date();
         const date18yearsAgo = dateNow.setFullYear(dateNow.getFullYear() - 18);
         const dateShards  = dateString.split('-');
         const userSelectedDate = {
            day : Number(dateShards[0]),
            month : Number(dateShards[1]),
            year : Number(dateShards[2])
         };
         const formatedDate = new Date(userSelectedDate.year, userSelectedDate.month - 1, userSelectedDate.year).getTime() / 1000;
         if (formatedDate <= date18yearsAgo) {
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
app.component('textarea-combo', TextareaCombo);
app.component('icon-stop', IconStop);
app.component('icon-confirm', IconConfirm);
app.component('expect-circle', ExpectCircle);
app.component('described-select', DescribedSelect);
app.component('date-picker', DatePicker);
app.mount("#app");
