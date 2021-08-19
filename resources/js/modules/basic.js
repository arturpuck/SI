import Translator from '@js/modules/translator.js';
import Navbar from '@jscomponents/navigation/navbar.vue';
import TextInputCombo from '@jscomponents/form_controls/text_input_combo.vue';
import SubmitButton from '@jscomponents/form_controls/submit_button.vue';
import ButtonClose from '@jscomponents/form_controls/button_close.vue';
import PhantomButton from '@jscomponents/form_controls/phantom_button.vue';
import LabeledCheckbox from '@jscomponents/form_controls/labeled_checkbox.vue';
import AuthenticatedUserSidebar from '@jscomponents/navigation/authenticated_user_sidebar.vue';
import EmpireLogo from '@jscomponents/decoration/empire_logo.vue';
import ContentSidebar from '@jscomponents/navigation/content_sidebar.vue';
import EventEmmiter from 'mitt';
const EventBus = EventEmmiter();

/*async function checkCookiePolicy()
{
   function userHasAlreadyAcceptedCookies()
   {
      return localStorage.getItem('cookiesAccepted') == 'yes';
   }

   if(!userHasAlreadyAcceptedCookies())
   {
     const NotificationComponentModule =  await import("@jscomponents/cookie_notification.vue");
     const CookieNotificationComponentClass = Vue.extend(NotificationComponentModule.default);
     const cookieComponent =  new CookieNotificationComponentClass().mount();
     document.getElementById('app').appendChild(cookieComponent.$el)
   }
}

window.addEventListener('DOMContentLoaded', checkCookiePolicy); */

export default {

   registerBasicComponents(app) {
      app.config.compilerOptions.whitespace = 'preserve';
      app.config.globalProperties.emitter = EventBus;
      app.config.globalProperties.translator = Translator;
      app.component('authenticated-user-sidebar', AuthenticatedUserSidebar);
      app.component('navbar', Navbar);
      app.component('text-input-combo', TextInputCombo);
      app.component('submit-button', SubmitButton);
      app.component('phantom-button', PhantomButton);
      app.component('labeled-checkbox', LabeledCheckbox);
      app.component('button-close', ButtonClose);
      app.component('empire-logo', EmpireLogo);
      app.component('content-sidebar', ContentSidebar);
   }
};

