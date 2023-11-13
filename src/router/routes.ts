import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ChatsPage from '../pages/chats/chats-page.vue';
import SignupPage from '../pages/signup/signup-page.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: ChatsPage,
    },
    {
        path: '/signup',
        component: SignupPage,
    },
];

export const router = createRouter({
    routes,
    history: createWebHashHistory(),
});
