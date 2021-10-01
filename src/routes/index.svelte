<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import { isAuthenticated, login } from '$lib/auth';
 
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
          <h1 class="display-4">Task Management made Easy!</h1>
          <p class="lead">Instructions</p>
          <ul>
            <li>Login to start &#128272;</li>
            <li>Create Tasks &#128221;</li>
            <li>Tick off completed tasks &#9989;</li>
          </ul>
          <a
            class="btn btn-primary btn-lg mr-auto ml-auto"
            href="/#"
            role="button"
            on:click="{login}"
            >Log In</a
          >
        </div>
      </div>
    </div>
  </div>
  {:else}
  <p>dddd</p>
  {/if}
</div>