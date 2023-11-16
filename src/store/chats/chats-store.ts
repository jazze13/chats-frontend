import { defineStore } from 'pinia';
import { ChatDto } from '../../shared/types/types.ts';
import { apiInstance } from '../../api/instance.ts';
import { AxiosResponse } from 'axios';

interface State {
    chats: ChatDto[];
}

export const useChatsStore = defineStore('chats', {
    state: (): State => ({
        chats: [],
    }),
    actions: {
        async getChats() {
            const response: AxiosResponse<ChatDto[]> = await apiInstance.get('/chats');

            this.chats = response.data;
        },
        
        resetChats() {
            this.chats = [];
        }
    },
});
