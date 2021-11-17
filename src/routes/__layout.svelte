<script lang="ts">
	import { page } from '$app/stores';
	import Header from '$lib/Header/index.svelte';
	import '../app.css';
</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<div class="">
		<a href="/impressum">Impressum</a>
		<a href="/datenschutz">Datenschutz</a>
	</div>
	<p>Ein FoundryVtt Community Projekt. Mehr Infos unter <a href="https://github.com/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de-ui">Github</a></p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1124px;
		margin: 0 auto;
		box-sizing: border-box;
	}

</style>
