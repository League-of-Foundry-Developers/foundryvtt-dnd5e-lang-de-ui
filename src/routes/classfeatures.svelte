<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts"> 
	import Translater from '$lib/components/Translater.svelte'; 
</script>
<Translater file="dnd5e.classfeatures.json" dbFile="classfeatures.db"></Translater>