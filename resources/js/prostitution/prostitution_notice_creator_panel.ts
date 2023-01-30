
import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import ProstitutionOfferEditor from "@jscomponents/prostitution/notice_editor/prostitution_offer_editor";

const settings = {
    components : {
        ProstitutionOfferEditor
    }
};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.mount("#app");