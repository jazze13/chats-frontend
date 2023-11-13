<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import { useChatsStore } from '../../store/chats/chats-store.ts';
import ChatItem from '../../pages/chats/components/chat/chat-item.vue';
import SidebarBurger from '../sidebar-burger/sidebar-burger.vue';
import InputComponent from '../../ui/input/input-component.vue';

const searchQuery = ref<string>('');

const chatsStore = useChatsStore();

onMounted(() => {
    chatsStore.getChats();
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
                <chat-item
                    v-for="chat in chatsStore.chats"
                    :name="chat.name"
                    :unread-count="0"
                    :last-message-text="chat.lastMessage.body"
                    :last-message-time="chat.lastMessage.createdAt"
                />
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
        @include flex(center, stretch, .8rem);
        padding: .8rem 1.6rem .8rem .8rem;
        border-bottom: 1px solid var(--borders);
    }
}
</style>
