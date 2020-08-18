require('./bootstrap');
import Vue from 'vue';
import Navbar  from './components/navbar.vue';
import TextInputCombo  from './components/text_input_combo.vue';
import ExpectBar  from './components/expect_bar.vue';
import SubmitButton from './components/submit_button.vue';

Vue.component('navbar', Navbar);
Vue.component('text-input-combo', TextInputCombo);
Vue.component('expect-bar', ExpectBar);
Vue.component('submit-button',SubmitButton);

  new Vue({
 el: '#app',

 data : {
    verificationInProgress : false
 },

 methods : {
   validateLogin(sender)
   {
      async function checkIfLoginExists(login){
         try{
            const response = await fetch(`verify-login/${login}`);
                switch(response.status){
                   case 200:
                     sender.showValueIsOK();
                   break;

                   case 400:
                      sender.showError("Login jest już zajęty");
                   break;

                   default:
                      sender.showError("Bliżej niezidentyfikowany błąd");
                   break;
                }
         }
         catch(error){
            sender.showError("Bliżej niezidentyfikowany błąd");
         }
         finally{
            this.$root.$emit('responseReceived');
         }
          
      }
      
      this.$root.$emit('awaitingResponse');
      const login = sender.textInputValue;
      
      if(login.length < 3){
         sender.showError("Login ma mniej niż 3 znaki");
         this.$root.$emit('responseReceived');
         return;
      }

      if(login.length > 20){
         sender.showError("Login ma więcej niż 20 znaków");
         this.$root.$emit('responseReceived');
         return;
      }
      
      checkIfLoginExists.call(this,login);
  },

  validateEmail(sender){

   async function checkIfEmailExists(email){
      try{
         const response = await fetch(`verify-email/${email}`);
             switch(response.status){
                case 200:
                  sender.showValueIsOK();
                break;

                case 400:
                   sender.showError("Email jest już zajęty");
                break;

                default:
                   sender.showError("Bliżej niezidentyfikowany błąd");
                break;
             }
      }
      catch(error){
         sender.showError("Bliżej niezidentyfikowany błąd");
      }
      finally{
         this.$root.$emit('responseReceived');
      }
       
   }

    function emailhasCorrectFormat (email) {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
     }
     this.$root.$emit('awaitingResponse');
     const email  = sender.textInputValue;
     
     if(!emailhasCorrectFormat(email)){
        sender.showError("Email wygląda na nieprawidłowy");
        this.$root.$emit('responseReceived');
        return;
     }
     
     checkIfEmailExists.call(this,email);
  },

  validatePassword(sender){
   const password = sender.textInputValue;

    if(password.length < 3){
       sender.showError("Hasło ma mniej niż 3 znaki");
       return;
    }

    if(password.length > 20){
       sender.showError("Hasło ma więcej niż 20 znaków");
       return;
    }

    sender.showValueIsOK();
  }
 	 
},

mounted(){
   this.$root.$on('awaitingResponse', ()=> this.verificationInProgress = true);
   this.$root.$on('responseReceived', ()=> this.verificationInProgress = false);
}

});