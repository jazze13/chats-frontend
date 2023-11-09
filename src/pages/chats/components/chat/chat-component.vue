<script lang="ts" setup>
defineProps<{
    name: string;
    lastMessageText: string;
    lastMessageTime: string;
    unreadCount: number;
    avatar?: string;
}>();
</script>

<template>
    <li class="chat-item">
        <img v-if="avatar" src="" alt="" class="avatar" />
        <div v-else class="avatar-placeholder">{{ name.charAt(0).toUpperCase() }}</div>
        <section>
            <h6 class="name">{{ name }}</h6>
            <div class="last-message">
                <p class="body">{{ lastMessageText }}</p>
                <time class="time">{{ lastMessageTime }}</time>
            </div>
            <span class="unread-count" v-if="!!unreadCount">{{ unreadCount }}</span>
        </section>
    </li>
</template>

<style lang="scss" scoped>
@import '../../../../shared/scss/mixins';
@import '../../../../shared/scss/typography';
@import '../../../../shared/scss/variables';

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
        width: 5rem;
        height: 5rem;
        border-radius: 100%;
        flex-shrink: 0;

        &-placeholder {
            @extend .avatar;

            @include headline-5;
            @include flex(center, center);

            background: $blue600;
            color: $grey50;
        }
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
