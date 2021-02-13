import Vue from 'vue';
import Translator from '@js/modules/translator.js';
import Navbar  from '@jscomponents/navigation/navbar.vue';
import TextInputCombo  from '@jscomponents/form_controls/text_input_combo.vue';
import SubmitButton from '@jscomponents/form_controls/submit_button.vue';
import ButtonClose from '@jscomponents/form_controls/button_close.vue';
import PhantomButton from '@jscomponents/form_controls/phantom_button.vue';
import LabeledCheckbox from '@jscomponents/form_controls/labeled_checkbox.vue';
import AuthenticatedUserSidebar from '@jscomponents/navigation/authenticated_user_sidebar.vue';
import EmpireLogo from '@jscomponents/decoration/empire_logo.vue';
import ContentSidebar from '@jscomponents/navigation/content_sidebar.vue';
import CategoriesList from '@jscomponents/categories_list.vue';
import SvgVue from 'svg-vue';

export default {

     build(){
        Vue.prototype.translator = Translator;
        Vue.component('authenticated-user-sidebar', AuthenticatedUserSidebar);
        Vue.component('navbar', Navbar);
        Vue.component('text-input-combo', TextInputCombo);
        Vue.component('submit-button', SubmitButton);
        Vue.component('phantom-button', PhantomButton);
        Vue.component('labeled-checkbox', LabeledCheckbox);
        Vue.component('button-close', ButtonClose);
        Vue.component('empire-logo', EmpireLogo);
        Vue.component('content-sidebar', ContentSidebar);
        Vue.component('categories-list', CategoriesList);
        Vue.component('svg-vue',SvgVue);
       
        return Vue;
     }
};

