<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { useChatsStore } from '../../store/chats/chats-store.ts';
import ChatItem from '../../pages/chats/components/chat/chat-item.vue';
import SidebarBurger from '../sidebar-burger/sidebar-burger.vue';
import InputComponent from '../../ui/input/input-component.vue';
import { useAuthStore } from '../../store/auth/auth-store';
import { ChatDto } from '../../shared/types/types';

const searchQuery = ref<string>('');

const chatsStore = useChatsStore();

const authStore = useAuthStore();

const chats = ref<ChatDto[]>([]);

onMounted(async () => {
    if (authStore.isAuthenticated) {
        await chatsStore.getChats();

        chats.value = chatsStore.chats;
        
    } else {
        chatsStore.resetChats();
    }
});

watch(searchQuery, (query) => {
    chats.value = chatsStore.chats.filter(chat => chat.name.toLowerCase().includes(query.toLowerCase()))
})

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
                <chat-item v-for="chat in chats" :name="chat.name" :unread-count="0" />
            </menu>
        </nav>
    </aside>
</template>

<style lang="scss" scoped>
@import '../../shared/scss/mixins';

aside {
    width: 36rem;
    border-right: 1px solid var(--borders);
    height: 100%;
    background: var(--bars-bg);

    header {
        @include flex(center, stretch, 0.8rem);
        padding: 0.8rem 1.6rem 0.8rem 0.8rem;
        border-bottom: 1px solid var(--borders);
    }
}
</style>
