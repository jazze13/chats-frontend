<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../../store/auth/auth-store';
import InputComponent from '../../ui/input/input-component.vue';

const auth = useAuthStore();

const username = ref<string>('')

const password = ref<string>('')

const passwordRepeat = ref<string>('')

</script>

<template>
    <div class="wrapper">

        <div class="form-wrapper">
            <h3>Sign up to Phobos</h3>
            <form>
                <InputComponent v-model="username" placeholder="Username" />
                <InputComponent v-model="password" placeholder="Password" type="password" />
                <InputComponent v-model="passwordRepeat" placeholder="Repeat password" type="password" />
            </form>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "../../shared/scss/mixins.scss";
@import "../../shared/scss/typography.scss";
@import "../../shared/scss/variables.scss";

.wrapper {
    @include flex(center, center);
    height: 100svh;
}

.form-wrapper {
    max-width: 40rem;

    @include flex(flex-start, center, 1rem, column);

    h3 {
        @include headline-5;
    }

    form {
        @include flex(flex-start, center, 1rem, column);
    }
}
</style>