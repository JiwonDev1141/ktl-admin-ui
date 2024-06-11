import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '/cesium.config';
import { InstallCodemirro } from 'codemirror-editor-vue3';
import './index.css';

const app = createApp(App).use(router);
app.use(InstallCodemirro);

app.mount('#app');
