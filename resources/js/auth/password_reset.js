
import Vue from 'vue';
import Navbar  from '../components/navbar.vue';
import SubmitButton from "../components/form_controls/submit_button.vue";
import TextInputCombo from "../components/form_controls/text_input_combo.vue";
import LabeledCheckbox from "../components/form_controls/labeled_checkbox.vue";
import ClickDetector from '../components/click_detector.vue';

Vue.component('navbar', Navbar);
Vue.component('submit-button', SubmitButton);
Vue.component('text-input-combo', TextInputCombo);
Vue.component('labeled-checkbox',LabeledCheckbox);
Vue.component('click-detector', ClickDetector);

  new Vue({
 el: '#app',

 methods : {
    
 checkPassword(sender){
    const textInputValue  = sender.textInputValue;
    const validationResult = this.passwordIsValid(textInputValue);

      switch(validationResult){
          case true:
             this.comparePasswords(sender);
          break;

          case undefined:
             sender.resetValidation()
          break;

          default:
             sender.showError(validationResult);
          break;
      }

 },

  passwordIsValid(password){

        if(!password){
           return undefined;
        }

        if(password.length < 3){
           return "Hasło ma mniej niż 3 znaki";
        }

        if(password.length > 20){
           return "Hasło ma więcej niż 20 znaków";
        }
        
        return true;
},

comparePasswords(sender){
   const password = this.$refs.password;
   const passwordConfirmation = this.$refs.password_confirmation;

   if(password.textInputValue && passwordConfirmation.textInputValue){

      if(password.textInputValue === passwordConfirmation.textInputValue){
         password.showValueIsOK();
         passwordConfirmation.showValueIsOK();
      }
      else{
         sender.showError("Hasła nie pokrywają się");
      } 
   }
   else{
      sender.showValueIsOK();
   }

}

 }

});