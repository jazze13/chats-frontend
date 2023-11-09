import { defineStore } from 'pinia';
import { Chat } from '../../shared/types/types.ts';
import { ref } from 'vue';

export const useChatsStore = defineStore('chats', () => {
    const chats = ref<Chat[]>([]);

    return { chats };
});
