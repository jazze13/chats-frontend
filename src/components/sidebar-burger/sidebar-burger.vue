<script lang="ts" setup>
import { ArrowLeftOnRectangleIcon, AtSymbolIcon, Bars3Icon, MoonIcon, PencilIcon, UserGroupIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import ThemeSwitcher from './components/theme-switcher/theme-switcher.vue';
import { RouteComponent } from 'vue-router';

interface DropdownItem {
    icon: RouteComponent;
    caption: string;
    rightSlot?: RouteComponent;
    onClick?: () => void;
}

const active = ref<boolean>(false);

const closeDropdown = () => {
    active.value = false;
}

const dropdownItems: DropdownItem[] = [
    {
        icon: AtSymbolIcon,
        caption: 'Mentions',
    },
    {
        icon: PencilIcon,
        caption: 'New direct message',
    },
    {
        icon: UserGroupIcon,
        caption: 'New group',
    },
    {
        icon: MoonIcon,
        caption: 'Dark mode',
        rightSlot: ThemeSwitcher,
        onClick: () => ThemeSwitcher.$refs.checkbox?.click(),
    },
    {
        icon: ArrowLeftOnRectangleIcon,
        caption: 'Sign out',
    }
]

</script>

<template>
    <div class="dropdown-wrapper">
        <button class="menu-button" @click="active = !active">
            <bars3-icon />
        </button>

        <div
            :class="{
                'content': true,
                'active': active,
            }"
            v-outside-click="closeDropdown"
        >
            <menu>
                <li v-for="item in dropdownItems">
                    <div class="icon">
                        <component :is="item.icon" />
                    </div>
                    <p>{{ item.caption }}</p>
                    <div class="right-slot" v-if="item.rightSlot">
                        <component :is="item.rightSlot" />
                    </div>
                </li>
            </menu>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../../shared/scss/variables.scss";
@import "../../shared/scss/mixins.scss";
@import "../../shared/scss/typography.scss";

.menu-button {
        background: transparent;
        border: none;
        border-radius: 100%;
        width: 4.2rem;
        height: 4.2rem;
        color: var(--text-high-emphasis);
        transition:
            $transition-normal background,
            $transition-fast color;

        position: relative;

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

.content {
    @include flex(initial, flex-start, 0, column);
    background: var(--bars-bg);
    box-shadow: 0px 0px 40px 0px var(--modal-shadow);
    min-width: 30rem;
    border-radius: .8rem;
    user-select: none;
    margin-top: 1.6rem;
    overflow: hidden;

    opacity: 1;
    transform: scale(1);
    transform-origin: top left;
    position: absolute;
    transition: $transition-normal ease-out;
    
    &:not(.active) {
        opacity: 0;
        transform: scale(.8);
    }

    li {
        @include flex(center, flex-start, 1.6rem);
        @include subtitle-1;
        font-weight: 500;
        padding: 1.6rem;
        transition: $transition-normal;

        &:hover {
            background: var(--borders);
        }

        .icon {
            width: 2.4rem;
            height: 2.4rem;
        }

        .right-slot {
            margin-left: auto;
        }
    }
}

menu {
    list-style: none;
}

</style>
