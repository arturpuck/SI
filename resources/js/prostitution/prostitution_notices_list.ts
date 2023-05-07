import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import ProstitutionOfferCreator from "@js/components/prostitution/notice_editor/prostitution_offer_creator.vue";
import ProstitutionAnnouncementsList from "@jscomponents/prostitution/notice_editor/prostitution_announcements_list.vue";
import { createPinia } from 'pinia'

const settings = {
    components : {
        ProstitutionOfferCreator,
        ProstitutionAnnouncementsList
    },

    methods : {
        loadAnnouncementEditor(announcementID : number) : void {
            this.emitter.emit('loadProstitutionAnnouncement', announcementID);
        }
    }
};

const pinia = createPinia();
const app = createApp(settings);
app.use(pinia);
BasicElements.registerBasicComponents(app);
app.mount("#app");