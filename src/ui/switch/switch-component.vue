<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { ref } from 'vue';

const props = defineProps<{
    modelValue: boolean;
}>()

const emit = defineEmits(['update:modelValue'])

const checkbox = ref<HTMLInputElement | null>(null);

const value = computed({
    get() {
        return props.modelValue;
    },
    set(value) {
        emit('update:modelValue', value);
    }
})

</script>

<template>
    <div class="switch">
        <input type="checkbox" v-model="value" id="darkThemeSwitch" ref="checkbox">
        <div
            :class="{
                'switch-visual': true,
                'active': modelValue,
            }"
            @click="checkbox?.click()"
        >
            <span class="switch-ball"></span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../../shared/scss/variables.scss';
@import '../../shared/scss/mixins.scss';

input {
    display: none;
}

.switch-visual {
    height: 2.8rem;
    width: 5.2rem;
    padding: .4rem;
    border-radius: 3rem;
    background: var(--disabled);
    @include flex(center, flex-start);

    .switch-ball {
        height: 2rem;
        width: 2rem;
        content: '';
        background: var(--input-bg);
        display: inline-block;
        border-radius: 3rem;
        transition: $transition-normal;
    }

    &.active {
        background: $accent-info;

        .switch-ball {
            transform: translateX(24px);
        }
    }
}
</style>