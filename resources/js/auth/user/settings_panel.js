import Vue from 'vue';
import ClickDetector from '../../components/click_detector.vue';
import Navbar  from '../../components/navbar.vue';
import TextInputCombo  from '../../components/form_controls/text_input_combo.vue';
import DescribedSelect from '../../components/form_controls/described_select.vue';
import DatePicker from '../../components/form_controls/date_picker.vue';
import ExpectCircle  from '../../components/decoration/expect_circle.vue';
import AcceptButton from '../../components/form_controls/accept_button.vue';
import UserNotification from '../../components/user_notification.vue';
import Translator from '../../modules/helpers/translator.js'

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
       verificationInProgress : false,
       csrfToken : undefined,
       basicUserDataEditableFields : {
          email : {
             initialValue : undefined
          },

          sexual_orientation_id : {
             initialValue : undefined
          },

          user_type_id : {
             initialValue : undefined
          }
       }
    },
   
    methods : {
        notifyUserAboutLockedInput(){
           this.showNotification('this_input_must_not_be_changed');
        },

        showApropriateContent(event){
            this.selectedTab = event.target.id;
        },

        validateSelect(sender){
            const userType = sender.inputValue;
       
             if(userType === 'not-selected'){
                sender.showError(Translator.translate('you_have_to_choose_one_option'));
             }
             else{
                sender.showValueIsOK();
             }
         },

         validatePassword(sender){

            try{
                const password = sender.inputValue;
       
                if(!password){
                   sender.resetValidation();
                   return false;
                }
       
                if(password.length < 3){
                   throw "password_must_contain_at_least_3_characters";
                }
       
                if(password.length > 20){
                   throw "password_must_not_exceed_20_characters";
                }

                sender.resetValidation();
            }
            catch(error){
                sender.showError(Translator.translate(error));
                return false;
            } 
            return true;
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
                            throw "to_many_attempts";
                         break;
         
                         default:
                            throw "undefined_error";
                         break;
                      }
               }
               catch(error){
                  sender.showError(Translator.translate(error));
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
              
              try{
                 if(!emailhasCorrectFormat(email)){
                    throw "email_is_invalid";
                  }
                  this.$root.$emit('awaitingResponse');
                  checkIfEmailExists.call(this,email);
              }
              catch(error){
                 sender.showError(Translator.translate(error));
              }
              finally{
                 this.$root.$emit('responseReceived');
              }
           },


         tryToEditUserData(){
            const passwordInput = this.$refs['password'];

            if(this.validatePassword(passwordInput)){
               const userDataThatShouldBeChanged = {};

               Object.entries(this.basicUserDataEditableFields).forEach(([key, value]) => {
                  let input = this.$refs[key];

                  if(this.basicUserDataEditableFields[key].initialValue != input.inputValue){
                     userDataThatShouldBeChanged[key] = input.inputValue;
                  }

               });
               
               if(Object.keys(userDataThatShouldBeChanged).length > 0){
                   userDataThatShouldBeChanged['password'] = passwordInput.inputValue;
                   this.editUserData(userDataThatShouldBeChanged);
               }
               else{
                  this.showNotification('no_data_has_been_changed','error');
               }
            }
            else{
               this.showNotification('please_type_in_a_valid_password','error');
            }
            
        },

        editUserData : async function(userDataThatShouldBeChanged){
          
         try{
               const requestData = {
                  method : 'PATCH',
                  body : JSON.stringify(userDataThatShouldBeChanged),
                  headers : {
                     'X-CSRF-TOKEN' : this.csrfToken,
                     'Content-type': 'application/json; charset=UTF-8'
                  }
               };

               this.$root.$emit('awaitingResponse');
               const response = await fetch('/user/profile',requestData);
                
               switch(response.status){
                  case 200:
                     this.showNotification('data_has_been_changed_successfully');
                     this.resetInputs();
                  break;

                  case 400:
                     let errors = await response.json();
                     throw Translator.translate('the_following_errors_occured') + Translator.translate(errors);
                  break;

                  case 429:
                     throw "to_many_user_settings_change_attempts";
                  break;

                  case 500:
                    throw "the_requested_data_is_ok_but_a_server_error_occured"
                  break;

                  default:
                     throw "undefined_error";
                  break;
               }
          }
          catch(error){
             this.showNotification(error, 'error');
          }
          finally{
            this.$root.$emit('responseReceived');
          }
            
        },

        resetInputs(){
         Object.entries(this.basicUserDataEditableFields).forEach(([key, value]) => this.basicUserDataEditableFields[key].initialValue = this.$refs[key].inputValue);
         this.$refs.password.inputValue = "";
         Object.entries(this.basicUserDataEditableFields).forEach(([key, value]) => this.$refs[key].resetValidation());
        },

        showNotification(text, type="no-error"){
           const header = type === "no-error" ? Translator.translate("information") : Translator.translate("error");
           this.$root.$emit('showNotification', {notificationText : Translator.translate(text), notificationType : type, headerText : header});
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
    Translator.initiate();
    this.csrfToken = document.getElementById("csrf-token").content;
    Object.entries(this.basicUserDataEditableFields).forEach(([key, value]) => this.basicUserDataEditableFields[key].initialValue = this.$refs[key].initialValue);
 }
   
});