<script lang="ts" setup="">
import { ChatDto } from '../../shared/types/types';
import ChatItem from '../chat-item/chat-item.vue';

defineProps<{
    chats: ChatDto[];
}>();

</script>

<template>
    <nav>
        <menu>
            <ChatItem
                v-for="chat in chats"
                :chat="chat"
                :selected="chat.id === $route.params.chatId"
            />
        </menu>
    </nav>
</template>

<style lang="scss" scoped></style>
