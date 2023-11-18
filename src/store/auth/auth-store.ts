import { defineStore } from 'pinia';
import { UserDto } from '../../shared/types/types';
import { apiInstance } from '../../api/instance';
import { SignupReqDto, SignupResDto } from './types';

interface State {
    isAuthenticated: boolean;
    subject: UserDto | null;
}

export const useAuthStore = defineStore('auth', {
    state: (): State => ({
        isAuthenticated: false,
        subject: null,
    }),
    actions: {
        async signup(payload: SignupReqDto) {
            return apiInstance.post<SignupResDto>('auth/signup', payload).then(
                (response) => {
                    localStorage.setItem('token', response.data.token);
                    this.$state.isAuthenticated = true;
                    this.$state.subject = response.data.subject;

                    return Promise.resolve(response.data);
                },
                (error) => {
                    return Promise.reject(error.response.data);
                },
            );
        },

        async login(payload: SignupReqDto) {
            return apiInstance.post<SignupResDto>('auth/login', payload).then(
                (response) => {
                    localStorage.setItem('token', response.data.token);
                    this.$state.isAuthenticated = true;
                    this.$state.subject = response.data.subject;

                    return Promise.resolve(response.data);
                },
                (error) => {
                    return Promise.reject(error.response.data);
                },
            );
        },

        async getProfile() {
            return apiInstance.get('auth/profile').then(
                (response) => {
                    this.$state.subject = response.data;

                    return Promise.resolve(response.data);
                },
                (error) => {
                    return Promise.reject(error.reponse.data);
                }
            )
        },

        async logout() {
            // TODO запрос логаут на бэк
            localStorage.removeItem('token');
            this.$state.isAuthenticated = false;
            this.$state.subject = null;
        }
    },
});
