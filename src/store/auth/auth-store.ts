import { defineStore } from "pinia";
import { UserDto } from "../../shared/types/types";

interface State {
    isAuthenticated: boolean;
    subject: UserDto | null;
}

export const useAuthStore = defineStore('auth', {
    state: (): State => ({
        isAuthenticated: false,
        subject: null,
    })
})