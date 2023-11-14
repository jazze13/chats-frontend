<script lang="ts" setup>
import { RouteComponent } from 'vue-router';

defineProps<{
    primary?: boolean;
    outline?: boolean;
    danger?: boolean;
    icon?: RouteComponent;
    loading?: boolean;
    disabled?: boolean;
}>()

const emit = defineEmits(['click'])

</script>

<template>
    <button
        @click="event => emit('click', event)"
        :class="{
            primary,
            outline,
            danger,
        }"
        :disabled="disabled"
    >
        <span class="icon" v-if="!!icon">
            <component :is="icon" />
        </span>

        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
@import "../../shared/scss/typography.scss";
@import "../../shared/scss/variables.scss";

button {
    color: var(--text-high-emphasis);
    border: none;
    padding: .8rem 1.6rem;
    background: transparent;
    @include body-2;
    border-radius: .8rem;
    transition: $transition-normal;

    &:hover {
        background: var(--input-bg);
    }
}
</style>