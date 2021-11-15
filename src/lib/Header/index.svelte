<script lang="ts">
	import { page, navigating } from '$app/stores';
	import { isAuthenticated, login, logout } from '$lib/auth';
	import { user, visibleSpinner } from '$lib/store';

</script>

<header>
	<nav class="nav">
		<div class="nav-burger-menu-wp">
			<div class="nav-burger-menu-inner">
				<div class="nav-burger-svg">
					<svg viewBox="0 0 100 80" width="30" height="40">
						<rect y="10" width="100" height="15"></rect>
						<rect y="35" width="100" height="15"></rect>
						<rect y="60" width="100" height="15"></rect>
					</svg>
				</div>
				<div class="nav-burger-menu-list">
					<div class="nav-burger-menu-link" class:active={$page.path === '/'}><a class="nav-menu-link" sveltekit:prefetch href="/">Home</a></div>
					<div class="nav-burger-menu-link" class:active={$page.path === '/items'}><a class="nav-menu-link" sveltekit:prefetch href="/items">Gegenstände</a></div>
					<div class="nav-burger-menu-link" class:active={$page.path === '/tradegoods'}><a class="nav-menu-link" sveltekit:prefetch href="/tradegoods">Handelsgüter</a></div>
					<div class="nav-burger-menu-link" class:active={$page.path === '/heroes'}><a class="nav-menu-link" sveltekit:prefetch href="/heroes">Helden</a></div>
					<div class="nav-burger-menu-link" class:active={$page.path === '/classes'}><a class="nav-menu-link" sveltekit:prefetch href="/classes">Klassen</a></div>
					<div class="nav-burger-menu-link" class:active={$page.path === '/classfeatures'}><a class="nav-menu-link" sveltekit:prefetch href="/classfeatures">Klassenfähigkeiten</a></div>
					<div class="nav-burger-menu-link" class:active={$page.path === '/monster'}><a class="nav-menu-link" sveltekit:prefetch href="/monster">Monster</a></div>
					<div class="nav-burger-menu-link" class:active={$page.path === '/monsterfeatures'}><a class="nav-menu-link" sveltekit:prefetch href="/monsterfeatures">Monsterfähigkeiten</a></div>
					<div class="nav-burger-menu-link" class:active={$page.path === '/rules'}><a class="nav-menu-link" sveltekit:prefetch href="/rules">Regeln</a></div>
					<div class="nav-burger-menu-link" class:active={$page.path === '/races'}><a class="nav-menu-link" sveltekit:prefetch href="/races">Völker</a></div>
					<div class="nav-burger-menu-link" class:active={$page.path === '/spells'}><a class="nav-menu-link" sveltekit:prefetch href="/spells">Zauber</a></div>
				</div>
			</div>
		</div>
		<div class="nav-menu-wp">
			<div class="nav-menu-inner" class:active={$page.path === '/'}><a class="nav-menu-link" sveltekit:prefetch href="/">Home</a></div>
			<div class="nav-menu-inner" class:active={$page.path === '/items'}><a class="nav-menu-link" sveltekit:prefetch href="/items">Gegenstände</a></div>
			<div class="nav-menu-inner" class:active={$page.path === '/tradegoods'}><a class="nav-menu-link" sveltekit:prefetch href="/tradegoods">Handelsgüter</a></div>
			<div class="nav-menu-inner" class:active={$page.path === '/heroes'}><a class="nav-menu-link" sveltekit:prefetch href="/heroes">Helden</a></div>
			<div class="nav-menu-inner" class:active={$page.path === '/classes'}><a class="nav-menu-link" sveltekit:prefetch href="/classes">Klassen</a></div>
			<div class="nav-menu-inner" class:active={$page.path === '/classfeatures'}><a class="nav-menu-link" sveltekit:prefetch href="/classfeatures">Klassenfähigkeiten</a></div>
			<div class="nav-menu-inner" class:active={$page.path === '/monster'}><a class="nav-menu-link" sveltekit:prefetch href="/monster">Monster</a></div>
			<div class="nav-menu-inner" class:active={$page.path === '/monsterfeatures'}><a class="nav-menu-link" sveltekit:prefetch href="/monsterfeatures">Monsterfähigkeiten</a></div>
			<div class="nav-menu-inner" class:active={$page.path === '/rules'}><a class="nav-menu-link" sveltekit:prefetch href="/rules">Regeln</a></div>
			<div class="nav-menu-inner" class:active={$page.path === '/races'}><a class="nav-menu-link" sveltekit:prefetch href="/races">Völker</a></div>
			<div class="nav-menu-inner" class:active={$page.path === '/spells'}><a class="nav-menu-link" sveltekit:prefetch href="/spells">Zauber</a></div>
		</div>
		<div class="nav-menu-user-wp">
			{#if $isAuthenticated}
			<div class="user-menu-login">
				<img class="user-image" alt="user picture" src={$user.picture}>
				<button class="btn btn--nav btn--nav-logout" on:click="{logout}">Log Out</button>
			</div>
			{:else}
			<div class="user-menu-logout">
				<button class="btn btn--nav" on:click="{login}">Log In</button>
			</div>
			{/if}
		</div>
	</nav>
</header>
