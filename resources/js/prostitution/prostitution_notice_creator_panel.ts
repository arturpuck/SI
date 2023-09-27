
import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import ProstitutionOfferCreator from "@js/components/prostitution/notice_editor/prostitution_offer_creator.vue";
import { createPinia } from 'pinia'

const settings = {
    components : {
        ProstitutionOfferCreator
    }
};

const pinia = createPinia();
const app = createApp(settings);
app.use(pinia);
BasicElements.registerBasicComponents(app);
app.mount("#app");