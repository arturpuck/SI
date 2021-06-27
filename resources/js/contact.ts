import VueConstructor from '@jsmodules/basic.js';
import TextareaCombo from '@jscomponents-form-controls/textarea_combo.vue';
import IconStop from '@jscomponents-decoration/icon_stop.vue';
import IconConfirm from '@jscomponents-decoration/icon_confirm.vue';

const Vue = VueConstructor.build();

Vue.component('textarea-combo', TextareaCombo);
Vue.component('icon-stop', IconStop);
Vue.component('icon-confirm', IconConfirm);


  new Vue({
 el: '#app',

 data : {
    
 },

 methods : {
   validateEmail(sender){

    function emailhasCorrectFormat (email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const email  = sender.inputValue; 

    if(!email || emailhasCorrectFormat(email)){
      sender.resetValidation();
    }
    else{
      sender.showError("Email wygląda na nieprawidłowy");
    }

   },

   validateSubject(sender){

    const subject  = sender.inputValue;

    if(subject.length > 40){
      sender.showError("Temat przekracza 40 znaków");
    }
    else{
      sender.resetValidation();
    }
    
   },

   validateMessage(sender){

      const message  = sender.inputValue;

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