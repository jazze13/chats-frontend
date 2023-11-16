<script setup lang="ts">
import InputComponent from '../../ui/input/input-component.vue';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import ButtonComponent from '../../ui/button/button-component.vue';
import { useAuthStore } from '../../store/auth/auth-store';
import { router } from '../../router/routes';
import { ref } from 'vue';

const auth = useAuthStore();

const schema = yup.object({
    username: yup
        .string()
        .required('This field is required')
        .trim(),

    password: yup
        .string()
        .required('This field is required')
});

const serverError = ref<string | null>(null);

const handleSubmit = ({ username, password }: Record<string, string>) => {
    serverError.value = null
    
    auth.login({ username, password }).then(
        () => {
            router.push('/');
        },
        (error: any) => {
            serverError.value = error.message;
        }
    )
};
</script>

<template>
    <div class="wrapper">
        <section class="form-wrapper">
            <h3>Login to Phobos</h3>

            <RouterLink to="/signup" class="login-link">
                Don't have an account?
            </RouterLink>

            <Form @submit="handleSubmit" :validation-schema="schema">
                <Field name="username" v-slot="{ value, handleChange, errorMessage }">
                    <InputComponent
                        :modelValue="value"
                        @update:modelValue="handleChange"
                        placeholder="Username"
                        class="field"
                    />
                    <span class="field-error" v-if="!!errorMessage">{{ errorMessage }}</span>
                </Field>

                <Field name="password" v-slot="{ value, handleChange, errorMessage }">
                    <InputComponent
                        :modelValue="value"
                        @update:modelValue="handleChange"
                        placeholder="Password"
                        type="password"
                        class="field"
                    />
                    <span class="field-error" v-if="!!errorMessage">{{ errorMessage }}</span>
                </Field>

                <span class="field-error" v-if="!!serverError">{{ serverError }}</span>

                <ButtonComponent> Login </ButtonComponent>
            </Form>

        </section>
    </div>
</template>

<style scoped lang="scss">
@import '../../shared/scss/mixins.scss';
@import '../../shared/scss/typography.scss';
@import '../../shared/scss/variables.scss';

.wrapper {
    @include flex(center, center);
    height: 100svh;
}

.login-link {
    color: var(--text-high-emphasis);
    @include body-2;
    text-decoration: underline;
    transition: $transition-fast;
    margin-bottom: 1rem;

    &:hover {
        color: $accent-primary;
    }
}

.form-wrapper {
    display: block;
    width: 30rem;

    @include flex(flex-start, center, 1rem, column);

    h3 {
        @include headline-5;
    }

    form {
        @include flex(flex-start, center, 1rem, column);
        width: 100%;
    }

    .field {
        width: 100%;
    }

    .field-error {
        @include subtitle-1;
        color: $accent-error;
        margin-left: 1rem;
    }
}
</style>
