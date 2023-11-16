import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import ChatsPage from '../pages/chats/chats-page.vue';
import SignupPage from '../pages/signup/signup-page.vue';
import LoginPage from '../pages/login/login-page.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: ChatsPage,
    },
    {
        path: '/signup',
        component: SignupPage,
    },
    {
        path: '/login',
        component: LoginPage,
    }
];

export const router = createRouter({
    routes,
    history: createWebHashHistory(),
});
