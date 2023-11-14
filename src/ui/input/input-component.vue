<script lang="ts" setup>
import { computed, ref } from 'vue';
import { RouteComponent } from 'vue-router';

interface Props {
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    modelValue?: string;
    icon?: RouteComponent;
    customClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
    type: 'text',
});

const emit = defineEmits(['update:modelValue'])

const value = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const inputField = ref<HTMLInputElement | null>(null);

const isFocused = ref(false);
</script>

<template>
    <span
        :class="{
            'input-visual-area': true,
            'focused': isFocused,
            [customClass ?? '']: true,
        }"
    >
        <span class="icon" v-if="!!icon">
            <component :is="icon" />
        </span>

        <input
            @focus="isFocused = true"
            @blur="isFocused = false"
            v-model="value"
            :placeholder="placeholder"
            ref="inputField"
            class="input-field"
            :type="type"
        />
    </span>
</template>

<style lang="scss" scoped>
@import '../../shared/scss/mixins';
@import '../../shared/scss/variables';

.input-visual-area {
    @include border(1px solid var(--borders), 2rem);
    @include indent(0.8rem 1.6rem);
    @include flex(center, flex-start, 0.8rem);

    transition: $transition-normal;

    input {
        @include font(1.6rem, var(--text-high-emphasis));

        border: none;
        background: none;
        outline: none;
        color: var(--text-high-emphasis);

        &::placeholder {
            color: var(--text-low-emphasis);
            opacity: 1;
        }
    }

    .icon {
        color: var(--text-low-emphasis);
        height: 2.4rem;
        width: 2.4rem;
        transition:
            $transition-normal background,
            $transition-fast color;
        @include flex(center, center);
    }

    &[disabled] {
        input,
        input::placeholder,
        .icon {
            color: var(--disabled);
        }
    }

    &.focused {
        border-color: $accent-primary;

        .icon {
            color: $accent-primary;
        }
    }
}

.input-field {
    width: 100%;
}
</style>
