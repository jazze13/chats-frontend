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
        .min(3, 'Username must be at least 3 characters long')
        .trim(),

    password: yup
        .string()
        .required('This field is required')
        .min(8, 'Password must be at least 8 characters long'),

    passwordRepeat: yup.string().oneOf([yup.ref('password')], "Password doesn't match"),
});

const serverError = ref<string | null>(null);

const handleSubmit = ({ username, password }: Record<string, string>) => {
    serverError.value = null
    
    auth.signup({ username, password }).then(
        () => {
            router.push('/');
        },
        (error: any) => {
            console.log(1);

            serverError.value = error.message;
        }
    )
};
</script>

<template>
    <div class="wrapper">
        <section class="form-wrapper">
            <h3>Sign up to Phobos</h3>

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

                <Field name="passwordRepeat" v-slot="{ value, handleChange, errorMessage }">
                    <InputComponent
                        :modelValue="value"
                        @update:modelValue="handleChange"
                        placeholder="Repeat password"
                        type="password"
                        class="field"
                    />
                    <span class="field-error" v-if="!!errorMessage">{{ errorMessage }}</span>
                </Field>

                <span class="field-error" v-if="!!serverError">{{ serverError }}</span>

                <ButtonComponent> Sign up </ButtonComponent>
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

.form-wrapper {
    display: block;
    width: 30rem;

    @include flex(flex-start, center, 1rem, column);

    h3 {
        @include headline-5;
    }

    form {
        @include flex(flex-start, center, 1rem, column);
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
