export default {
    mounted(element: HTMLElement, binding: any) {
        // @ts-ignore
        element._onOutsideClick = (event: MouseEvent) => {
            if (event.target === element || (event.target as HTMLElement).contains(element)) {
                binding.value()
            }
        }
        // @ts-ignore
        document.addEventListener('click', element._onOutsideClick);
    },

    unmounted(element: HTMLElement) {
        // @ts-ignore
        document.removeEventListener('click', element._onOutsideClick);
    }
};
