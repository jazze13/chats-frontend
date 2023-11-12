<script setup lang="ts">
import { ref, watch } from 'vue';
import SwitchComponent from '../../../../ui/switch/switch-component.vue';

const htmlNode = document.getElementsByTagName('html')[0];

const darkTheme = ref<boolean>(htmlNode.dataset.theme === 'dark');

watch(darkTheme, (darkTheme: boolean) => {
    htmlNode.dataset.theme = darkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', darkTheme ? 'dark' : 'light');
})

</script>

<template>
    <switch-component v-model="darkTheme" />
</template>

<style scoped lang="scss"></style>