import { onMount } from "svelte";
import auth from "../authService";
import { isAuthenticated, user, user_tasks, tasks } from "../store";

let auth0Client;

onMount(async () => {
  auth0Client = await auth.createClient();

  isAuthenticated.set(await auth0Client.isAuthenticated());
  user.set(await auth0Client.getUser());
});

function login() {
  auth.loginWithPopup(auth0Client);
}

function logout() {
  auth.logout(auth0Client);
}