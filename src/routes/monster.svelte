<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts"> 
	import Translater from '$lib/components/Translater.svelte'; 
</script>
<Translater file="dnd5e.monsters.json" dbFile="monsters.db"></Translater>