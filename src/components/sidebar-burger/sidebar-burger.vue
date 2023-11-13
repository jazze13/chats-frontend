<script lang="ts" setup>
import { ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, AtSymbolIcon, Bars3Icon, MoonIcon, PencilIcon, UserGroupIcon } from '@heroicons/vue/24/outline';
import { ref } from 'vue';
import ThemeSwitcher from './components/theme-switcher/theme-switcher.vue';
import { useAuthStore } from '../../store/auth/auth-store';
import UserAvatar from '../avatar/user-avatar.vue';

const active = ref<boolean>(false);

const closeDropdown = () => {
    active.value = false;
}

const auth = useAuthStore();

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
                <template v-if="auth.isAuthenticated">
                    <li class="user-info">
                        <div class="avatar">
                            <UserAvatar :fallback="auth.subject?.username.charAt(0) ?? 'P'" />
                        </div>
                        <p>{{ auth.subject?.username }}</p>
                    </li>
                    <li>
                        <div class="icon">
                            <AtSymbolIcon />
                        </div>
                        <p>Mentions</p>
                    </li>
                    <li>
                        <div class="icon">
                            <PencilIcon />
                        </div>
                        <p>New direct message</p>
                    </li>
                    <li>
                        <div class="icon">
                            <UserGroupIcon />
                        </div>
                        <p>New group</p>
                    </li>
                    <li v-if="auth.isAuthenticated">
                        <div class="icon">
                            <ArrowRightOnRectangleIcon />
                        </div>
                        <p>Sign out</p>
                    </li>
                </template>

                <li v-else>
                    <div class="icon">
                        <ArrowLeftOnRectangleIcon />
                    </div>
                    <p>
                        Sign in
                    </p>
                </li>

                <li>
                    <div class="icon">
                        <MoonIcon />
                    </div>
                    <p>Dark mode</p>
                    <div class="right-slot">
                        <ThemeSwitcher />
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

        &:not(.user-info):hover {
            background: var(--borders);
        }

        &.user-info {
            padding: 1rem 1.6rem 1rem 1rem;
            gap: 1rem;
        }

        .icon {
            width: 2.4rem;
            height: 2.4rem;
        }

        .avatar {
            width: 3.6rem;
            height: 3.6rem;
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
