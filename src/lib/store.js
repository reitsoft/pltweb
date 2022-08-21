import { writable } from 'svelte/store';

export const currentTheme = writable("white");  // "white" | "g10" | "g80" | "g90" | "g100"

export const anlagenStore = writable([])

export const tableData = writable([])