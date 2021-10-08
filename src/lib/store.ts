import { writable, derived } from "svelte/store";

export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();
