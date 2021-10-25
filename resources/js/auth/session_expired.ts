import { createApp } from 'vue';
import BasicElements from '@jsmodules/basic.js';

const app = createApp({});
BasicElements.registerBasicComponents(app);
app.mount("#app");


