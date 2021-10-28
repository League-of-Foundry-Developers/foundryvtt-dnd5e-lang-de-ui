import { browser } from "$app/env";
import { writable } from "svelte/store";
import auth from "$lib/authService";
import { user } from "$lib/store";
import { setCookie } from "./cookie";

let auth0Client;

export const isAuthenticated = writable(false);


const zeroInit = async () => {
  auth0Client = await auth.createClient();
  
  isAuthenticated.set(await auth0Client.isAuthenticated());
  user.set(await auth0Client.getUser());
};


if (browser) zeroInit();

export function login():void {
  auth.loginWithPopup(auth0Client, {});
}

export function logout():void {
  auth.logout(auth0Client);
}