import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import ProstitutionOfferEditor from "@js/components/prostitution/notice_editor/prostitution_offer_editor.vue";
import ProstitutionAnnouncementsList from "@jscomponents/prostitution/notice_editor/prostitution_announcements_list.vue";
import { createPinia } from 'pinia'

const settings = {
    data() {
        return {
            listIsVisible : true
        };
    },

    components : {
        ProstitutionOfferEditor,
        ProstitutionAnnouncementsList
    },

    methods : {
        loadAnnouncementEditor(announcementID : number) : void {
            this.emitter.emit('loadProstitutionAnnouncement', announcementID);
        },

        toggleEditorAndList() : void {
            this.listIsVisible = !this.listIsVisible;
        }
    },

    computed : {
        offerEditorIsVisible() : boolean {
            return !this.listIsVisible;
        }
    }
};

const pinia = createPinia();
const app = createApp(settings);
app.use(pinia);
BasicElements.registerBasicComponents(app);
app.mount("#app");