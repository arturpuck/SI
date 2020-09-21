import VueConstructor from '@jsmodules/basic.js';
import TextareaCombo from '@jscomponents/form_controls/textarea_combo.vue';
import IconStop from '@jscomponents/decoration/icon_stop.vue';
import IconConfirm from '@jscomponents/decoration/icon_confirm.vue';
import ExpectCircle  from '@jscomponents/decoration/expect_circle.vue';
import DescribedSelect from '@jscomponents/form_controls/described_select.vue';
import DatePicker from '@jscomponents/form_controls/date_picker.vue';
const Vue = VueConstructor.build();

Vue.component('textarea-combo', TextareaCombo);
Vue.component('icon-stop', IconStop);
Vue.component('icon-confirm', IconConfirm);
Vue.component('expect-circle', ExpectCircle);
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
      
         login = encodeURI(login);

         try{
            const response = await fetch(`verify-login/${login}`);

            switch(response.status){
               case 200:
                  sender.showValueIsOK();
               break;

               case 400:
                  throw "login_has_already_been_taken";
               break;

               case 429:
                   throw "to_many_attemts_during_one_minute";
                break;

               default:
                  throw "undefined_error";
               break;
           }
         }
         catch(error){
            sender.showError(error);
         }  
      }
      const login = sender.inputValue;

      if(!login){
         sender.resetValidation();
         return;
      }
          
      this.$root.$emit('awaitingResponse');
      

      try{
         if(login.length < 3){
            throw "login_contains_less_then_3_characters";
         }
   
         if(login.length > 20){
            throw "login_contains_more_then_20_characters";
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

      email = encodeURI(email);

      try{
         const response = await fetch(`/verify-email/${email}`);
             switch(response.status){
                case 200:
                  sender.showValueIsOK();
                break;

                case 400:
                   throw "email_has_already_been_taken";
                break;

                case 429:
                   throw "to_many_attemts_during_one_minute";
                break;

                default:
                   throw "undefined_error";
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
     const email  = sender.inputValue;

     if(!email){
        sender.resetValidation();
        return;
     }
     
     
     try{
        if(!emailhasCorrectFormat(email)){
           throw "email_seems_to_be_incorrect";
         }
         this.$root.$emit('awaitingResponse');
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
         const password = sender.inputValue;

         if(!password){
            sender.resetValidation();
            return;
         }

         if(password.length < 3){
            throw "password_has_less_then_3_characters";
         }

         if(password.length > 20){
            throw "password_has_more_then_20_characters";
         }
         sender.showValueIsOK();
     }
     catch(error){
         sender.showError(error);
     } 
  },
  
  validateSelect(sender){
     const userType = sender.inputValue;

      if(userType === 'not-selected'){
         sender.showError("you_have_to_choose_one_option");
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
        sender.showError("you_are_under_18");
     }
      
  }
},

mounted(){
   this.$root.$on('awaitingResponse', ()=> this.verificationInProgress = true);
   this.$root.$on('responseReceived', ()=> this.verificationInProgress = false);
}

});