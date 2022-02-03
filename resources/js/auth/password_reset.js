import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';
import IconStop from '@jscomponents/decoration/icon_stop.vue';
import IconConfirm from '@jscomponents/decoration/icon_confirm.vue';


const settings = {};

const app = createApp(settings);
BasicElements.registerBasicComponents(app);
app.component('icon-stop', IconStop);
app.component('icon-confirm', IconConfirm);
app.mount("#app");