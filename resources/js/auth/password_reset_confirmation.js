import BasicElements from '@jsmodules/basic.js';
import { createApp } from 'vue';

const app = createApp({});
BasicElements.registerBasicComponents(app);
app.mount("#app");