<script setup lang="ts">
import InputComponent from '../../ui/input/input-component.vue';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import ButtonComponent from '../../ui/button/button-component.vue';

const submit = () => {};

const schema = yup.object({
    username: yup
        .string()
        .required('This field is required')
        .min(3, 'Username must be at least 3 characters long')
        .trim(),

    password: yup
        .string()
        .required('This field is required')
        .min(8, 'Password must be at least 4 characters long'),

    passwordRepeat: yup.string().oneOf([yup.ref('password')], "Password doesn't match"),
});
</script>

<template>
    <div class="wrapper">
        <section class="form-wrapper">
            <h3>Sign up to Phobos</h3>

            <Form @submit="submit" :validation-schema="schema">
                <Field name="username" v-slot="{ value, handleChange, errorMessage }">
                    <InputComponent
                        :modelValue="value"
                        @update:modelValue="handleChange"
                        placeholder="Username"
                    />
                    <span class="field-error" v-if="!!errorMessage">{{ errorMessage }}</span>
                </Field>

                <Field name="password" v-slot="{ value, handleChange, errorMessage }">
                    <InputComponent
                        :modelValue="value"
                        @update:modelValue="handleChange"
                        placeholder="Password"
                        type="password"
                    />
                    <span class="field-error" v-if="!!errorMessage">{{ errorMessage }}</span>
                </Field>

                <Field name="passwordRepeat" v-slot="{ value, handleChange, errorMessage }">
                    <InputComponent
                        :modelValue="value"
                        @update:modelValue="handleChange"
                        placeholder="Repeat password"
                        type="password"
                    />
                    <span class="field-error" v-if="!!errorMessage">{{ errorMessage }}</span>
                </Field>

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
    max-width: 30rem;

    @include flex(flex-start, center, 1rem, column);

    h3 {
        @include headline-5;
    }

    form {
        @include flex(flex-start, center, 1rem, column);
    }

    .field-error {
        @include subtitle-1;
        color: $accent-error;
        margin-left: 1rem;
    }
}
</style>
