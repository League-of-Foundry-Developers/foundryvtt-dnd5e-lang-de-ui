import { browser } from "$app/env";
import { writable } from "svelte/store";
import auth from "$lib/authService";
import { user } from "$lib/store";

let auth0Client;
let usermail;
export const isAuthenticated = writable(false);


const zeroInit = async () => {
  auth0Client = await auth.createClient();
  
  isAuthenticated.set(await auth0Client.isAuthenticated());
  user.set(await auth0Client.getUser());

  usermail = await auth0Client.getUser().then(user => {
    console.log('mail', user.email);
    return user.email;
  });
  return usermail;
};



if (browser) zeroInit();

export function login():void {
  auth.loginWithPopup(auth0Client, {});
}

export function logout():void {
  auth.logout(auth0Client);
}

const userMailInfo = async () => {
  auth0Client = await auth.createClient();

  const result = await auth0Client.getUser().then(user => {
    console.log('mail', user.email);
    user.mail;
  });
  return result;
}

;(async () => {
  const users = await userMailInfo()
  console.log(users)
})()