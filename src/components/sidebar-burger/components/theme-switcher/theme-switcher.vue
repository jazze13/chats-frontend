<script setup lang="ts">
import { watch } from 'vue';
import SwitchComponent from '../../../../ui/switch/switch-component.vue';
import { useSettingsStore } from '../../../../store/settings/settings-store';

const htmlNode = document.getElementsByTagName('html')[0];

const settings = useSettingsStore();

watch(settings, () => {
    htmlNode.dataset.theme = settings.darkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', settings.darkTheme ? 'dark' : 'light');
})

</script>

<template>
    <switch-component v-model="settings.darkTheme" />
</template>

<style scoped lang="scss"></style>