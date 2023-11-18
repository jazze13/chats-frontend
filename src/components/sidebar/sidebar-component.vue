<script setup lang="ts">
import { ref, watch } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { useChatsStore } from '../../store/chats/chats-store.ts';
import SidebarBurger from '../sidebar-burger/sidebar-burger.vue';
import InputComponent from '../../ui/input/input-component.vue';
import { useAuthStore } from '../../store/auth/auth-store';
import { ChatDto } from '../../shared/types/types';
import ChatItem from '../chat-item/chat-item.vue';

const searchQuery = ref<string>('');

const chatsStore = useChatsStore();

const authStore = useAuthStore();

const chats = ref<ChatDto[]>([]);

watch(authStore, async () => {
    if (authStore.isAuthenticated) {
        chats.value = await chatsStore.getChats();
    } else {
        chatsStore.resetChats();
    }
});

watch(searchQuery, () => {
    chats.value = chatsStore.searchName(searchQuery.value);
});
</script>

<template>
    <aside>
        <header>
            <sidebar-burger />

            <input-component
                v-model="searchQuery"
                type="text"
                placeholder="Search"
                :icon="MagnifyingGlassIcon"
            />
        </header>

        <nav>
            <menu>
                <ChatItem v-for="chat in chats" :name="chat.name" :unread-count="0" />
            </menu>
        </nav>
    </aside>
</template>

<style lang="scss" scoped>
@import '../../shared/scss/mixins';

aside {
    width: 36rem;
    border-right: 1px solid var(--borders);
    height: 100vh;
    background: var(--bars-bg);
    flex-shrink: 0;

    header {
        @include flex(center, stretch, 0.8rem);
        padding: 0.8rem 1.6rem 0.8rem 0.8rem;
        border-bottom: 1px solid var(--borders);
    }
}
</style>
