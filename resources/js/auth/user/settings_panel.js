import BasicElements from '@jsmodules/basic.js';
import { createApp } from 'vue';
import TextareaCombo from '@jscomponents/form_controls/textarea_combo.vue';
import DescribedSelect from '@jscomponents/form_controls/described_select.vue';
import DatePicker from '@jscomponents/form_controls/date_picker.vue';
import ExpectCircle from '@jscomponents/decoration/expect_circle.vue';
import AcceptButton from '@jscomponents/form_controls/accept_button.vue';
import UserNotification from '@jscomponents/user_notification.vue';
import EmailValidator from '@jsmodules/validators/email_validator.js';
import EditPenIcon from "@svgicon/edit_pen_icon.vue";
import ImagePhotographyIcon from "@svgicon/image_photography_icon.vue";
import KeyIcon from "@svgicon/key_icon.vue";
import InfoCircleIcon from "@svgicon/info_circle_icon.vue";
import AvatarIcon from "@svgicon/avatar_icon.vue";
import ServerStorageIcon from "@svgicon/server_storage_icon.vue";
import BackspaceEraseIcon from "@svgicon/backspace_erase_icon.vue";
import AvatarConfig from "@config/paths/avatar";
import LeftArrowIcon from "@svgicon/left_arrow_icon.vue";
import RightArrowIcon from "@svgicon/right_arrow_icon.vue";
import SettingsIcon from "@svgicon/settings_icon.vue";
import { defineAsyncComponent } from 'vue';
const AccountDeletion = defineAsyncComponent(() => import("@jscomponents/user/account_deletion.vue"));

const settings = {

   components : {
      TextareaCombo,
      DescribedSelect,
      DatePicker,
      ExpectCircle,
      AcceptButton,
      UserNotification,
      EditPenIcon,
      ImagePhotographyIcon,
      KeyIcon,
      InfoCircleIcon,
      AvatarIcon,
      ServerStorageIcon,
      BackspaceEraseIcon,
      LeftArrowIcon,
      RightArrowIcon,
      SettingsIcon,
      AccountDeletion
   },

   data() {
      return {
         tabIndex: 0,
         verificationInProgress: false,
         showMyBirthday: false,
         csrfToken: undefined,
         basicUserDataEditableFields: {
            email: {
               initialValue: undefined
            },

            sexual_orientation_id: {
               initialValue: undefined
            },

            user_type_id: {
               initialValue: undefined
            }
         },
         newAvatarFileName: "",
         approvedAvatarFileName: "",
         allowedExtensions: ['jpg', 'jpeg', 'bmp', 'gif', 'png', 'svg', 'webp'],
         availableTabs: ['basicUserDataTab', 'avatarTab', 'passwordTab', 'otherTab'],
         currentExpectDecorationLabel: undefined,
         hiddenIcon: false,
         userHasApprovedAvatar: undefined,
         avatarFileSource: undefined,
         deleteAccountDialogBoxIsVisible : false
      }

   },

   methods: {

      emailExists: EmailValidator.emailExists,
      emailhasCorrectFormat: EmailValidator.emailhasCorrectFormat,

      toggleDeleteAccountDialogBox() { 
         this.deleteAccountDialogBoxIsVisible = !this.deleteAccountDialogBoxIsVisible;
      },

      nextTab() {
         const lastTabIndex = this.availableTabs.length - 1;
         this.tabIndex = (this.tabIndex >= lastTabIndex) ? lastTabIndex : (this.tabIndex + 1);
      },

      previousTab() {
         this.tabIndex = (this.tabIndex <= 0) ? 0 : (this.tabIndex - 1)
      },

      notifyUserAboutLockedInput() {
         this.showNotification('this_input_must_not_be_changed');
      },

      showExpectationDecoration(label) {
         this.currentExpectDecorationLabel = this.translator.translate(label);
         this.verificationInProgress = true;
      },

      hideExpectationDecoration() {
         this.verificationInProgress = false;
      },

      fileHasForbiddenExtension(fileName) {
         const fileExtension = fileName.split('.').pop().toLowerCase();
         return !this.allowedExtensions.includes(fileExtension);
      },

      showAvatarPreview(fileDescription, image) {
         this.newAvatarFileName = fileDescription;
         this.avatarFileSource = image;
      },

      fileIsToBig(file) {
         return (file.size / 1000) > 2048;
      },

      readFile(file) {

         const reader = new FileReader();
         reader.onloadend = () => {

            let image = new Image();
            image.onload = () => this.showAvatarPreview(file.name, reader.result);
            image.src = reader.result;
         }

         reader.readAsDataURL(file);
      },

      processImageFromHardDrive(event) {
         const file = event.target.files[0];

         if (file) {

            try {

               if (this.fileHasForbiddenExtension(file.name)) {
                  throw new Error("invalid_file_extension");
               }

               if (this.fileIsToBig(file)) {
                  throw new Error('file_size_exceeds_limit');
               }

               this.readFile(file);

            } catch (exception) {
               this.showNotification(this.translator.translate(exception.message), 'error');
            }
         }

      },

      showApropriateContent(selectedTab) {
         this.selectedTab = selectedTab;

      },

      validateSelect(sender) {
         const userType = sender.inputValue;

         if (userType === 'not-selected') {
            sender.showError('you_have_to_choose_one_option');
         }
         else {
            sender.showValueIsOK();
         }
      },

      validatePassword(sender) {

         try {
            const password = sender.inputValue;

            if (!password) {
               sender.resetValidation();
               return false;
            }

            if (password.length < 3) {
               throw new Error("password_must_contain_at_least_3_characters");
            }

            if (password.length > 20) {
               throw new Error("password_must_not_exceed_20_characters");
            }

            sender.resetValidation();
         }
         catch (error) {
            sender.showError(error.message);
            return false;
         }
         return true;
      },

      async validateEmail(sender) {

         const email = sender.inputValue;

         if (email === sender.initialValue) {
            sender.resetValidation();
            return;
         }
         const root = this.$root;

         try {
            if (!this.emailhasCorrectFormat(email)) {
               throw new Error("email_is_invalid");
            }
            root.showExpectationDecoration('checking_the_email');
            const emailStatus = await this.emailExists(email);

            if (emailStatus) {
               sender.showError(emailStatus)
            }
            else {
               sender.showValueIsOK();
            }

         }
         catch (error) {
            sender.showError(error.message);
         }
         finally {
            root.hideExpectationDecoration();
         }
      },


      tryToEditUserData() {
         const passwordInput = this.$refs['password'];

         if (this.validatePassword(passwordInput)) {
            const userDataThatShouldBeChanged = {};

            Object.entries(this.basicUserDataEditableFields).forEach(([key, value]) => {
               let input = this.$refs[key];

               if (this.basicUserDataEditableFields[key].initialValue != input.inputValue) {
                  userDataThatShouldBeChanged[key] = input.inputValue;
               }

            });

            if (Object.keys(userDataThatShouldBeChanged).length > 0) {
               userDataThatShouldBeChanged['password'] = passwordInput.inputValue;
               this.editUserData(userDataThatShouldBeChanged);
            }
            else {
               this.showNotification('no_data_has_been_changed', 'error');
            }
         }
         else {
            this.showNotification('please_type_in_a_valid_password', 'error');
         }

      },

      editUserData: async function (userDataThatShouldBeChanged) {

         const root = this.$root;
         try {

            const requestData = {
               method: 'PATCH',
               body: JSON.stringify(userDataThatShouldBeChanged),
               headers: {
                  'X-CSRF-TOKEN': this.csrfToken,
                  'Content-type': 'application/json; charset=UTF-8'
               }
            };
            root.showExpectationDecoration('changing_user_data')
            const response = await fetch('/user/profile/settings/basic', requestData);

            switch (response.status) {
               case 200:
                  this.showNotification('data_has_been_changed_successfully');
                  this.resetInputs();
                  break;

               case 400:
                  let errors = await response.json();
                  throw new Error(this.translator.translate('the_following_errors_occured') + this.translator.translate(errors));
                  break;

               case 429:
                  throw new Error("to_many_user_settings_change_attempts");
                  break;

               case 500:
                  throw new Error("the_requested_data_is_ok_but_a_server_error_occured");
                  break;

               default:
                  throw new Error("undefined_error");
                  break;
            }
         }
         catch (error) {
            this.showNotification(error.message, 'error');
         }
         finally {
            root.hideExpectationDecoration();
         }

      },

      cleanUpAfterDeletingAvatar(){
         this.newAvatarFile = null;
         this.userHasApprovedAvatar = false;
         this.avatarFileSource = AvatarConfig.getDefaultAvatarPath();
         this.newAvatarFileName = '';
         this.approvedAvatarFileName = '';
         this.emitter.emit('resetAvatar');
      },

      async deleteAvatar() {
         const root = this.$root;

         try {
            const requestData = {
               method: 'DELETE',
               headers: {
                  'X-CSRF-TOKEN': this.csrfToken
               }

            };
            root.showExpectationDecoration('deleting_the_avatar')
            const response = await fetch('/user/profile/settings/avatar/delete', requestData);

            switch (response.status) {
               case 200:
                  this.cleanUpAfterDeletingAvatar();
                  break;

               case 400:
                  let errors = await response.json();
                  throw new Error(this.translator.translate('the_following_errors_occured') + this.translator.translate(errors));
                  break;

               case 429:
                  throw new Error("to_many_user_settings_change_attempts");
                  break;

               case 500:
                  throw new Error("the_requested_data_is_probably_ok_but_a_server_error_occured");
                  break;

               default:
                  throw new Error("undefined_error");
                  break;
            }
         }
         catch (error) {
            this.showNotification(error.message, 'error');
         }
         finally {
            root.hideExpectationDecoration();
         }

      },

      resetPasswordFields() {
         this.$refs.current_password.inputValue = "";
         this.$refs.new_password.inputValue = "";
         this.$refs.new_password_confirmation.inputValue = "";
         this.$refs.current_password_other_settings.inputValue = "";
      },

      async tryToChangeUserPassword() {
         const root = this.$root;
         const currentPasswordInput = this.$refs.current_password;
         const newPasswordInput = this.$refs.new_password;
         const newPasswordConfirmationInput = this.$refs.new_password_confirmation;
         try {

            if (!this.validatePassword(currentPasswordInput)) {
               throw new Error('please_type_in_a_valid_password', 'error');
            }

            if (!this.validatePassword(newPasswordInput) || !this.validatePassword(newPasswordConfirmationInput)) {
               throw new Error('please_type_in_new_valid_password_as_described');
            }

            if (newPasswordInput.inputValue != newPasswordConfirmationInput.inputValue) {
               throw new Error('new_password_does_not_match');
            }

            const passwords = {
               password: currentPasswordInput.inputValue,
               new_password: newPasswordInput.inputValue,
               new_password_confirmation: newPasswordConfirmationInput.inputValue
            };

            const requestData = {
               method: 'PATCH',
               headers: {
                  'X-CSRF-TOKEN': this.csrfToken,
                  'Content-type': 'application/json; charset=UTF-8'
               },
               body: JSON.stringify(passwords)

            };
            root.showExpectationDecoration('password_change_attempt');
            const response = await fetch('/user/profile/settings/password/change', requestData);

            switch (response.status) {
               case 200:
                  this.showNotification('password_changed_successfully');
                  this.resetPasswordFields();
                  break;

               case 400:
                  let errors = await response.json();
                  const errorMessage = this.translator.translate('the_following_errors_occured') + this.translator.translate(errors);
                  throw new Error(errorMessage);
                  break;

               case 429:
                  throw new Error("to_many_user_settings_change_attempts");
                  break;

               case 500:
                  throw new Error("the_requested_data_is_ok_but_a_server_error_occured")
                  break;

               default:
                  throw new Error("undefined_error");
                  break;
            }
         }
         catch (error) {
            this.showNotification(error.message, 'error');
         }
         finally {
            root.hideExpectationDecoration();
         }
      },

      async tryToChangeOtherSettings() {
         const passwordInput = this.$refs.current_password_other_settings;

         try {
            if (!this.validatePassword(passwordInput)) {
               throw new Error('please_type_in_current_password_as_described');
            }
            const otherSettings = {
               shows_birthday: this.showMyBirthday,
               password: passwordInput.inputValue
            };
            const requestData = {
               method: 'PATCH',
               headers: {
                  'X-CSRF-TOKEN': this.csrfToken,
                  'Content-type': 'application/json; charset=UTF-8'
               },
               body: JSON.stringify(otherSettings)

            };

            this.showExpectationDecoration('settings_change_attempt');
            const response = await fetch('/user/profile/settings/other/change', requestData);

            switch (response.status) {
               case 200:
                  this.showNotification('settings_changed_successfully');
                  this.resetPasswordFields();
                  break;

               case 400:
                  let errors = await response.json();
                  const errorMessage = this.translator.translate('the_following_errors_occured') + this.translator.translate(errors);
                  throw new Error(errorMessage);
                  break;

               case 429:
                  throw new Error("to_many_user_settings_change_attempts");
                  break;

               case 500:
                  throw new Error("the_requested_data_is_ok_but_a_server_error_occured")
                  break;

               default:
                  throw new Error("undefined_error");
                  break;
            }
         }
         catch (error) {
            this.showNotification(error.message, 'error');
         }
         finally {
            this.hideExpectationDecoration();
         }

      },

      resetInputs() {
         Object.entries(this.basicUserDataEditableFields).forEach(([key, value]) => this.basicUserDataEditableFields[key].initialValue = this.$refs[key].inputValue);
         this.$refs.password.inputValue = "";
         Object.entries(this.basicUserDataEditableFields).forEach(([key, value]) => this.$refs[key].resetValidation());
      },

      showNotification(text, type = "no-error") {
         const header = type === "no-error" ? "information" : "error";
         this.emitter.emit('showNotification', { notificationText: text, notificationType: type, headerText: header });
      }
   },

   computed: {


      basicUserDataTabIsActive() {
         return this.selectedTab === 'basicUserDataTab';
      },

      avatarTabIsActive() {
         return this.selectedTab === 'avatarTab';
      },

      passwordTabIsActive() {
         return this.selectedTab === 'passwordTab';
      },

      otherTabIsActive() {
         return this.selectedTab === 'otherTab'
      },

      selectedTab: {
         get() {
            return this.availableTabs[this.tabIndex];
         },

         set(selectedTab) {

            const tabIndexes = {
               basicUserDataTab: 0,
               avatarTab: 1,
               passwordTab: 2,
               otherTab: 3
            };

            this.tabIndex = tabIndexes[selectedTab];
         }

      },

      userAvatarNotification() {
         if (this.newAvatarFileName) {
            return this.translator.translate('selected_avatar');
         } else {
            return this.userHasApprovedAvatar ? this.translator.translate('current_avatar') : this.translator.translate('no_avatar_has_been_choosen');

         }
      }
   },

   mounted() {
      this.csrfToken = document.getElementById("csrf-token").content;
      Object.entries(this.basicUserDataEditableFields).forEach(([key, value]) => this.basicUserDataEditableFields[key].initialValue = this.$refs[key].initialValue);
      this.userHasApprovedAvatar = Boolean(this.$refs.avatarPanel.getAttribute('data-user-has-avatar'));
      this.approvedAvatarFileName = this.$refs.avatarPanel.getAttribute('data-avatar-file-name');
      this.avatarFileSource = this.userHasApprovedAvatar ? `${AvatarConfig.avatarRootDirectory}${this.approvedAvatarFileName}` : AvatarConfig.getDefaultAvatarPath();
   }

};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");