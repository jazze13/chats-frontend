<script setup lang="ts">

defineProps<{
    fallback: string;
    source?: string;
}>()
</script>

<template>
    <!-- <img v-if="source" src="" alt="" class="avatar" /> -->
    <div class="avatar-placeholder">{{ fallback }}</div>
</template>

<style scoped lang="scss">
@import "../../shared/scss/mixins.scss";
@import "../../shared/scss/typography.scss";
@import "../../shared/scss/variables.scss";

.avatar {
        height: 100%;
        width: 100%;
        border-radius: 100%;
        flex-shrink: 0;

        &-placeholder {
            @extend .avatar;

            @include headline-5;
            @include flex(center, center);

            background: $blue600;
            color: $grey50;
            text-transform: uppercase;
        }
    }
</style>