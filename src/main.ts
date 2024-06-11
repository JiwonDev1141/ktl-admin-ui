import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '/cesium.config';

import './index.css';

const app = createApp(App).use(router);

app.mount('#app');
