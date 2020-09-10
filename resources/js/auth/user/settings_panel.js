import Vue from 'vue';
import ClickDetector from '../../components/click_detector.vue';
import Navbar  from '../../components/navbar.vue';
import TextInputCombo  from '../../components/form_controls/text_input_combo.vue';
import DescribedSelect from '../../components/form_controls/described_select.vue';
import DatePicker from '../../components/form_controls/date_picker.vue';
import ExpectCircle  from '../../components/decoration/expect_circle.vue';
import AcceptButton from '../../components/form_controls/accept_button.vue';
import UserNotification from '../../components/user_notification.vue';

Vue.component('navbar', Navbar);
Vue.component('click-detector', ClickDetector);
Vue.component('text-input-combo', TextInputCombo);
Vue.component('described-select', DescribedSelect);
Vue.component('date-picker', DatePicker);
Vue.component('expect-circle', ExpectCircle);
Vue.component('accept-button', AcceptButton);
Vue.component('user-notification', UserNotification);

new Vue({
    el: '#app',
   
    data : {
       selectedTab : 'basicUserDataTab',
       verificationInProgress : false
    },
   
    methods : {
        showNotification(){
           this.$root.$emit('showNotification', {notificationText : "Tych danych nie można zmienić"});
        },

        showApropriateContent(event){
            this.selectedTab = event.target.id;
        },

        validateSelect(sender){
            const userType = sender.inputValue;
       
             if(userType === 'not-selected'){
                sender.showError("Należy wybrać jedną opcję");
             }
             else{
                sender.showValueIsOK();
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
                            throw "Email jest już zajęty";
                         break;
         
                         case 429:
                            throw "Za dużo prób w ciągu 1 minuty";
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
              const email  = sender.inputValue;
         
              if(email === sender.initialValue){
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


        attemptUserDataEdition(){
            const userDataThatShouldBeChanged = [];

            for(const editableUserData in this.$refs){
                let input = this.$refs[editableUserData];

                if(input.initialValue != input.inputValue){
                   userDataThatShouldBeChanged[editableUserData] = input.inputValue;
                }
            }

            if(userDataThatShouldBeChanged.length > 0){

            }
        }
   },

   computed : {
       basicUserDataTabIsActive(){
           return this.selectedTab === 'basicUserDataTab';
       },

       avatarTabIsActive(){
           return this.selectedTab === 'avatarTab';
       }
   },

   mounted(){
    this.$root.$on('awaitingResponse', ()=> this.verificationInProgress = true);
    this.$root.$on('responseReceived', ()=> this.verificationInProgress = false);
 }
   
});