import Vue from 'vue';
import ClickDetector from '@jscomponents/click_detector.vue';
import Navbar  from '@jscomponents/navbar.vue';
import TextInputCombo  from '@jscomponents/form_controls/text_input_combo.vue';
import Translator from '@js/modules/helpers/translator.js';
import SubmitButton from '@jscomponents/form_controls/submit_button.vue';
import IconClose from '@jscomponents/form_controls/icon_close.vue';
import PhantomButton from '@jscomponents/form_controls/phantom_button.vue';
import LabeledCheckbox from '@jscomponents/form_controls/labeled_checkbox.vue';

export default {
     build(){
        Vue.component('navbar', Navbar);
        Vue.component('click-detector', ClickDetector);
        Vue.component('text-input-combo', TextInputCombo);
        Vue.component('submit-button', SubmitButton);
        Vue.component('phantom-button', PhantomButton);
        Vue.component('labeled-checkbox', LabeledCheckbox);
        Vue.component('icon-close', IconClose);
        Vue.prototype.translator = Translator;
        document.addEventListener('DOMContentLoaded', () => Vue.prototype.translator.initiate());
        return Vue;
     }
};

