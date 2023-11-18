<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from './store/auth/auth-store';
import SidebarComponent from './components/sidebar/sidebar-component.vue';
import { useSettingsStore } from './store/settings/settings-store';

const auth = useAuthStore();

const settings = useSettingsStore();

onMounted(() => {
    const htmlNode = document.getElementsByTagName('html')[0];

    const storedTheme = localStorage.getItem('theme');

    htmlNode.dataset.theme = storedTheme ?? 'light';

    settings.darkTheme = storedTheme === 'dark';

    const token = localStorage.getItem('token');

    if (token) {
        auth.isAuthenticated = true;
        auth.getProfile();
    }
})

</script>

<template>
    <div class="wrapper">
        <sidebar-component />

        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<style lang="scss">
@import './style';
@import './shared/scss/mixins.scss';

.wrapper {
    @include flex();
}

main {
    width: 100%;
    min-height: 100vh;
}
</style>
