import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ChatsPage from '../pages/chats/chats-page.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: ChatsPage,
    },
];

export const router = createRouter({
    routes,
    history: createWebHashHistory(),
});
