<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts"> 
	import Translater from '$lib/components/Translater.svelte'; 
</script>
<Translater file="dnd5e.races.json" dbFile="races.db"></Translater>