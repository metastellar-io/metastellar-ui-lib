import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const connected: Writable<boolean> = writable(false);