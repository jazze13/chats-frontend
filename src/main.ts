import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { router } from './router/routes.ts';
import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app');
