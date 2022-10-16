
import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import TextInputCombo from '@jscomponents/form_controls/text_input_combo.vue';
import SecureDocumentsIcon from "@svgicon/secure_documents_icon.vue";
import InfoCircleIcon from '@svgicon/info_circle_icon.vue';
import DatePicker from '@jscomponents/form_controls/date_picker.vue';
import SimpleLabeledSelect from '@jscomponents-form-controls/simple_labeled_select.vue';
import DescribedSelect from '@jscomponents/form_controls/described_select.vue';

const settings = {

    components : {
        TextInputCombo,
        SecureDocumentsIcon,
        InfoCircleIcon,
        DatePicker,
        SimpleLabeledSelect,
        DescribedSelect
    }


};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");