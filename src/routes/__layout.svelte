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
		<h2>Support</h2>
		<a href='https://ko-fi.com/R5R1AR1MW' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
	</div>
	<div class="footer-column">
		<h2>Community</h2>
		<a href="https://discord.gg/ckJkgRcNRH" class="footer-link">Deutscher Community Server</a>
	</div>
	<div class="footer-column">
		<h2>Projekt</h2>
		<p class="footer-p">Ein FoundryVtt Community Projekt. Mehr Infos unter <a href="https://github.com/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de-ui">Github</a></p>
		<p class="footer-p">Version 1.0.0.0</p>
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
