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
	<div class="footer-column">
		<h2>Overview</h2>
		<a href="/impressum" class="footer-link">Impressum</a>
		<a href="/datenschutz" class="footer-link">Datenschutz</a>
	</div>
	<div class="footer-column">
		<h2>Community</h2>
		<a href="https://discord.gg/ckJkgRcNRH" class="footer-link">Deutscher Community Server</a>
	</div>
	<div class="footer-column">
		<h2>Projekt</h2>
		<p class="footer-p">Ein FoundryVtt Community Projekt. Mehr Infos unter <a href="https://github.com/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de-ui">Github</a></p>
		<p class="footer-p">Version 0.8</p>
	</div>
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
