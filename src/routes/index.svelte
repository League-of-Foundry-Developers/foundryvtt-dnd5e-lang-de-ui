<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import { isAuthenticated, login } from '$lib/auth';
import { user } from '$lib/store';
 
	import Translater from '$lib/components/Translater.svelte'; 
</script>
<!-- <Translater file="dnd5e.tradegoods.json" dbFile="tradegoods.db"></Translater> -->
<div>
	<h1 class="w-100">Willkommen im Übersetzungstool für Foundry Virtual Tabletop - DnD5e Game System</h1>
	{#if !$isAuthenticated}
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <div class="jumbotron">
          <h2 class="display-4">Task Management made Easy!</h2>
          <p class="lead">Instructions</p>
      
          <button class="btn btn--login" on:click="{login}">Log In</button>
        </div>
      </div>
    </div>
  </div>
  {:else}
    <div class="text-white">Willkommen {$user.name} ({$user.email})</div>
  {/if}
</div>