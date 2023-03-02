
import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import ProstitutionOfferEditor from "@jscomponents/prostitution/notice_editor/prostitution_offer_editor.vue";
import { createPinia } from 'pinia'

const settings = {
    components : {
        ProstitutionOfferEditor
    }
};

const pinia = createPinia();
const app = createApp(settings);
app.use(pinia);
BasicElements.registerBasicComponents(app);
app.mount("#app");