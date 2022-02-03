import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import TextareaCombo from '@jscomponents-form-controls/textarea_combo.vue';
import IconStop from '@jscomponents-decoration/icon_stop.vue';
import IconConfirm from '@jscomponents-decoration/icon_confirm.vue';
import ContactingComboInputs from '@mixins/components/comboInputs/contactingComboInputs';


  const settings = ({

    mixins : [ContactingComboInputs],

    data() {
        return{

        };
    },

 methods : {

  emailhasCorrectFormat(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  },

   validateEmail(email){

    if(!email || this.emailhasCorrectFormat(email)){
      this.resetComboInput('Email');
    }
    else{
      this.notifyComboInputAboutState('Email', 'email_seems_to_be_incorrect');
    }

   },

   validateSubject(subject){

    if(subject.length > 40){
      this.notifyComboInputAboutState('Subject',"subject_exceeds_40_characters");
    }
    else{
      this.resetComboInput('Subject');
    }
    
   },

   validateMessage(message){
  
      if(!message){
        this.resetComboInput('Message');
      }
      else if(message.length > 1000){
        this.notifyComboInputAboutState('Message', 'message_exceeds_1000_characters');
      }
      else if(message.length < 3){
        this.notifyComboInputAboutState('Message', 'message_contains_less_then_3_characters');
      }
      else{
        this.resetComboInput('Message');
      }
      
   }

}
});

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.component('textarea-combo', TextareaCombo);
app.component('icon-stop', IconStop);
app.component('icon-confirm', IconConfirm);
app.mount("#app");