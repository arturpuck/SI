
import Vue from 'vue';
import Navbar  from './components/navbar.vue';
import SubmitButton from "./components/form_controls/submit_button.vue";
import TextInputCombo  from './components/form_controls/text_input_combo.vue';
import TextareaCombo from './components/form_controls/textarea_combo.vue';
import ClickDetector from './components/click_detector.vue';

Vue.component('navbar', Navbar);
Vue.component('submit-button', SubmitButton);
Vue.component('text-input-combo', TextInputCombo);
Vue.component('textarea-combo', TextareaCombo);
Vue.component('click-detector', ClickDetector);

  new Vue({
 el: '#app',

 data : {
    
 },

 methods : {
   validateEmail(sender){

    function emailhasCorrectFormat (email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const email  = sender.textInputValue;

    if(!email || emailhasCorrectFormat(email)){
      sender.resetValidation();
    }
    else{
      sender.showError("Email wygląda na nieprawidłowy");
    }

   },

   validateSubject(sender){

    const subject  = sender.textInputValue;

    if(subject.length > 40){
      sender.showError("Temat przekracza 40 znaków");
    }
    else{
      sender.resetValidation();
    }
    
   },

   validateMessage(sender){

      const message  = sender.textInputValue;

      if(!message){
        sender.resetValidation();
      }
      else if(message.length > 1000){
        sender.showError("Wiadomość przekracza 1000 znaków");
      }
      else if(message.length < 3){
          sender.showError("Wiadomość ma mniej niż 3 znaki");
      }
      else{
        sender.resetValidation();
      }
      
   }
 	
}
});