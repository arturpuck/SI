
import Vue from 'vue';
import Navbar  from '../components/navbar.vue';
import TextInputCombo  from '../components/form_controls/text_input_combo.vue';
import ExpectBar  from '../components/decoration/expect_bar.vue';
import SubmitButton from '../components/form_controls/submit_button.vue';
import DescribedSelect from '../components/form_controls/described_select.vue';
import DatePicker from '../components/form_controls/date_picker.vue';

Vue.component('navbar', Navbar);
Vue.component('text-input-combo', TextInputCombo);
Vue.component('expect-bar', ExpectBar);
Vue.component('submit-button',SubmitButton);
Vue.component('described-select', DescribedSelect);
Vue.component('date-picker', DatePicker);

  new Vue({
 el: '#app',

 data : {
    verificationInProgress : false
 },

 methods : {
   validateLogin(sender){

      async function checkIfLoginExists(login){
         try{
            const response = await fetch(`verify-login/${login}`);
            switch(response.status){
               case 200:
                  sender.showValueIsOK();
               break;

               case 400:
                  throw "Login jest już zajęty";
               break;

               default:
                  throw "Bliżej niezidentyfikowany błąd";
               break;
           }
         }
         catch(error){
            sender.showError(error);
         }  
      }
      const login = sender.textInputValue;

      if(!login){
         sender.resetValidation();
         return;
      }
          
      this.$root.$emit('awaitingResponse');
      

      try{
         if(login.length < 3){
            throw "Login ma mniej niż 3 znaki";
         }
   
         if(login.length > 20){
            throw "Login ma więcej niż 20 znaków";
         }
         
         checkIfLoginExists.call(this,login);
      }
      catch(error){
         sender.showError(error);
      }
      finally{
         this.$root.$emit('responseReceived');
      }
      
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
                   throw "Email jest już zajęty";
                break;

                default:
                   throw "Bliżej niezidentyfikowany błąd";
                break;
             }
      }
      catch(error){
         sender.showError(error);
      } 
   }

    function emailhasCorrectFormat (email) {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
     }
     const email  = sender.textInputValue;

     if(!email){
        sender.resetValidation();
        return;
     }
     this.$root.$emit('awaitingResponse');
     
     try{
        if(!emailhasCorrectFormat(email)){
           throw "Email wygląda na nieprawidłowy";
         }
         checkIfEmailExists.call(this,email);
     }
     catch(error){
        sender.showError(error);
     }
     finally{
        this.$root.$emit('responseReceived');
     }
  },

  validatePassword(sender){

     try{
         const password = sender.textInputValue;

         if(!password){
            sender.resetValidation();
            return;
         }

         if(password.length < 3){
            throw "Hasło ma mniej niż 3 znaki";
         }

         if(password.length > 20){
            throw "Hasło ma więcej niż 20 znaków";
         }
         sender.showValueIsOK();
     }
     catch(error){
         sender.showError(error);
     } 
  },
  
  validateSelect(sender){
     const userType = sender.selectedValue;

      if(userType === 'not-selected'){
         sender.showError("Należy wybrać jedną opcję");
      }
      else{
         sender.showValueIsOK();
      }
  },

  checkIfUserIsAdault(sender){
     const dateNow = new Date();
     const date18yearsAgo = dateNow.setFullYear(dateNow.getFullYear() - 18);
     const userSelectedDate = new Date(sender.selectedYear, sender.selectedMonth - 1, sender.selectedDay);
     if(userSelectedDate <= date18yearsAgo){
        sender.showValueIsOK();
     }
     else{
        sender.showError("Nie ukończyłeś 18 lat");
     }
      
  }
},

mounted(){
   this.$root.$on('awaitingResponse', ()=> this.verificationInProgress = true);
   this.$root.$on('responseReceived', ()=> this.verificationInProgress = false);
}

});