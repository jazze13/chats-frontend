import { defineStore } from "pinia";

interface State {
    darkTheme: boolean;
}

export const useSettingsStore = defineStore('settings', {
    state: (): State => ({
        darkTheme: false,
    })
})