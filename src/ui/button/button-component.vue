<script lang="ts" setup>
import { RouteComponent } from 'vue-router';

defineProps<{
    primary?: boolean;
    outline?: boolean;
    danger?: boolean;
    icon?: RouteComponent;
    loading?: boolean;
}>()

const emit = defineEmits(['click'])

</script>

<template>
    <button @click="event => emit('click', event)">
        <span class="icon" v-if="!!icon">
            <component :is="icon" />
        </span>

        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>

</style>