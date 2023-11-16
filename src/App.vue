<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from './store/auth/auth-store';

const auth = useAuthStore();

onMounted(() => {
    const htmlNode = document.getElementsByTagName('html')[0];

    const storedTheme = localStorage.getItem('theme');

    htmlNode.dataset.theme = storedTheme ?? 'light';

    const token = localStorage.getItem('token');

    if (token) {
        auth.isAuthenticated = true;
        auth.getProfile();
    }
})

</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss">
@import './style';
</style>
