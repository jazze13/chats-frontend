import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import { router } from './router/routes.ts';

const app = createApp(App);

app.use(PrimeVue, { unstyled: true });

app.use(router);

app.mount('#app');