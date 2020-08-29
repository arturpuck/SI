
import Vue from 'vue';
import Navbar  from '../components/navbar.vue';
import SubmitButton from "../components/form_controls/submit_button.vue";
import TextInputCombo from "../components/form_controls/text_input_combo.vue";
import ExpectBar from "../components/decoration/expect_bar.vue";

Vue.component('navbar', Navbar);
Vue.component('submit-button', SubmitButton);
Vue.component('text-input-combo', TextInputCombo);
Vue.component('expect-bar', ExpectBar);

  new Vue({
 el: '#app',

 data() {

   return {
      verificationInProgress : false
   }; 

 },

 methods : {
  validateEmail(sender){

    async function checkIfEmailExists(email){
       try{
          const response = await fetch(`/verify-email/${email}`);
              switch(response.status){
                 case 200:
                  throw "Taki adres email nie istnieje";
                 break;
 
                 case 400:
                  sender.showValueIsOK();
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
 
      const email  = sender.textInputValue;
 
      if(!email){
         sender.resetValidation();
      }
      else{
        this.$root.$emit('awaitingResponse');
        checkIfEmailExists(email);
        this.$root.$emit('responseReceived');
      }
   }
 	
},

mounted(){
  this.$root.$on('awaitingResponse', ()=> this.verificationInProgress = true);
  this.$root.$on('responseReceived', ()=> this.verificationInProgress = false);
}

});