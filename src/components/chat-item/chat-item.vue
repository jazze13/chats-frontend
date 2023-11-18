<script lang="ts" setup>
import UserAvatar from '../avatar/user-avatar.vue';



defineProps<{
    name: string;
    // lastMessageText: string;
    // lastMessageTime: string;
    unreadCount: number;
    avatar?: string;
}>();
</script>

<template>
    <li class="chat-item">
        <div class="avatar">
            <UserAvatar :fallback="name.charAt(0)" />
        </div>
        <section>
            <h6 class="name">{{ name }}</h6>
            <div class="last-message">
                <!-- <p class="body">{{ lastMessageText }}</p>
                <time class="time">{{ lastMessageTime }}</time> -->
            </div>
            <span class="unread-count" v-if="!!unreadCount">{{ unreadCount }}</span>
        </section>
    </li>
</template>

<style lang="scss" scoped>
@import '../../shared/scss/mixins';
@import '../../shared/scss/typography';
@import '../../shared/scss/variables';

.chat-item {
    @include flex(center, flex-start, 0.8rem);

    padding: 0.8rem 1.2rem;
    position: relative;
    user-select: none;
    transition: $transition-fast;

    &:hover {
        background: var(--borders);
    }

    .avatar {
        height: 5rem;
        width: 5rem;
        flex-shrink: 0;
    }

    .name {
        @include subtitle-1;
        color: var(--text-high-emphasis);
    }

    section {
        @include flex(initial, flex-start, 0.4rem, column);
        width: 100%;
        margin-top: auto;
        margin-bottom: auto;
    }

    .last-message {
        @include flex(center, space-between);

        .time {
            @include body-2;
            color: var(--text-low-emphasis);
        }

        .body {
            @extend .time;
        }
    }

    .unread-count {
        @include body-2;
        font-weight: 700;

        @include flex(center, center);

        border-radius: 4rem;
        background: $accent-error;
        color: $grey50;

        height: 2.4rem;
        min-width: 2.4rem;

        position: absolute;
        top: 0.8rem;
        right: 0.8rem;
    }
}
</style>
