
import Vue from 'vue';
import Navbar  from '../components/navbar.vue';
import SubmitButton from "../components/form_controls/submit_button.vue";
import TextInputCombo from "../components/form_controls/text_input_combo.vue";
import LabeledCheckbox from "../components/form_controls/labeled_checkbox.vue";

Vue.component('navbar', Navbar);
Vue.component('submit-button', SubmitButton);
Vue.component('text-input-combo', TextInputCombo);
Vue.component('labeled-checkbox',LabeledCheckbox);

  new Vue({
 el: '#app',

  data(){

      return {
        password : null,
        password_confirmation : null
      };

  },

 methods : {

 checkPassword(sender){
    const textInputValue  = sender.textInputValue;
    this[sender.name] = sender;

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
   const password = this.password.textInputValue;
   const passwordConfirmation = this.password_confirmation.textInputValue;

   if(password && passwordConfirmation){

      if(password === passwordConfirmation){
         this.password.showValueIsOK();
         this.password_confirmation.showValueIsOK();
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