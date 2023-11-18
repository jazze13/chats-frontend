import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import SignupPage from '../pages/signup/signup-page.vue';
import LoginPage from '../pages/login/login-page.vue';
import ChatPage from '../pages/chat/chat-page.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/chats',
        component: ChatPage,
    },
    {
        path: '/signup',
        component: SignupPage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/',
        redirect: '/chats',
    }
];

export const router = createRouter({
    routes,
    history: createWebHashHistory(),
});
