<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
    const htmlNode = document.getElementsByTagName('html')[0];

    const storedTheme = localStorage.getItem('theme');

    htmlNode.dataset.theme = storedTheme ?? 'light';
})

</script>

<template>
    <router-view></router-view>
</template>

<style lang="scss">
@import './style';
</style>
