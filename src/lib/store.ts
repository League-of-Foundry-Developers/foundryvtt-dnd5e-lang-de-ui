import { writable } from "svelte/store";

export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();

// loading spinner
function loadingSpinner() {
    const { subscribe, set, update } = writable(false);
    
    return {
		subscribe,
		increment: () => update(n => true),
		decrement: () => update(n => false),
		reset: () => set(false)
    };
}

export const visibleSpinner = loadingSpinner();