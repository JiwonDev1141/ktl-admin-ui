import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '/cesium.config';
import { InstallCodemirro } from 'codemirror-editor-vue3';
import './index.css';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const app = createApp(App).use(router);
app.use(InstallCodemirro);
app.use(VCalendar, {})


app.config.globalProperties.window = window

app.mount('#app');
