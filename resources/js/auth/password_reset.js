import VueConstructor from '@jsmodules/basic.js';
import IconStop from '@jscomponents/decoration/icon_stop.vue';
import IconConfirm from '@jscomponents/decoration/icon_confirm.vue';
const Vue = VueConstructor.build();

Vue.component('icon-stop', IconStop);
Vue.component('icon-confirm', IconConfirm);

  new Vue({
 el: '#app',

 methods : {
    
 checkPassword(sender){
    const textInputValue  = sender.inputValue;
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
           return "password_has_less_then_3_characters";
        }

        if(password.length > 20){
           return "password_has_more_then_20_characters";
        }
        
        return true;
},

comparePasswords(sender){
   const password = this.$refs.password;
   const passwordConfirmation = this.$refs.password_confirmation;

   if(password.inputValue && passwordConfirmation.inputValue){

      if(password.inputValue === passwordConfirmation.inputValue){
         password.showValueIsOK();
         passwordConfirmation.showValueIsOK();
      }
      else{
         sender.showError("passwords_do_not_match");
      } 
   }
   else{
      sender.showValueIsOK();
   }

}

 }

});