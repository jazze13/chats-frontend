<script setup lang="ts">
import InputUi from '../../ui/input/input-ui.vue';
import { ref } from 'vue';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const searchQuery = ref<string>('');
</script>

<template>
    <aside>
        <header>
            <button class="menu-button">
                <bars3-icon />
            </button>

            <input-ui v-model="searchQuery" type="text" placeholder="Search">
                <template #icon>
                    <magnifying-glass-icon />
                </template>
            </input-ui>
        </header>
    </aside>
</template>

<style lang="scss" scoped>
@import '../../shared/scss/mixins';
@import '../../shared/scss/variables';

aside {
    width: 36rem;
    border-right: 1px solid var(--borders);
    height: 100%;

    header {
        @include flex(center, stretch, 1.6rem);
        padding: 0.8rem 1.6rem;
        border-bottom: 1px solid var(--borders);
    }

    .menu-button {
        background: none;
        border: none;
        border-radius: 100%;
        width: 4.2rem;
        height: 4.2rem;
        color: var(--text-high-emphasis);
        transition:
            $transition-normal background,
            $transition-fast color;

        svg {
            height: 2.4rem;
            width: 2.4rem;
        }

        &:hover {
            background: var(--reaction-bg-user);
        }

        &:active {
            color: $accent-primary;
        }
    }
}
</style>
