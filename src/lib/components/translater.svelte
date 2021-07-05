<script context="module" lang="ts">
	export const prerender = true;
</script>
<script lang="ts">		

import { onMount } from "svelte";
import Datastore from "nedb";

export let file;
let items = [];
let filename = [];
let editorTiny;
let inputHTML;

// safe input
const handelClick = async(index, name) => {
	if (shown[name][index]) safeAtJson(items[index]);	
	shown[name][index] = !shown[name][index];
	if (name !== 'desc') return;
	if (editorTiny) {
		tinymce.activeEditor.remove();
		editorTiny = null;
		inputHTML = null;
   }
	if (shown[name][index]) {
	   editorTiny = 'div.description' + index;
	   tinymce.init({
		 selector: editorTiny,
		 plugins: 'a11ychecker advcode casechange formatpainter linkchecker autolink lists checklist powerpaste table advtable tinymcespellchecker',
		 entity_encoding : "raw",
		 height: '350',
		 removed_menuitems: 'newdocument',
		});
	}
}

async function safeAtJson(entry) {
	
	if (editorTiny) {
		inputHTML = tinymce.activeEditor.getContent();
		entry.description = inputHTML;
	}
	
	entry.file = file;
	
	var data = JSON.stringify(entry);
	// ToDo Try Catcher
	const result = await fetch(`/api.json`, {method:'POST', body: data});
	
}

// on click set
const shown = {
	desc : [],
	name: [],
	material: [],
	source: [],
};
// const section

onMount(async () => {
	const response = await fetch('/api.json?file=' + file);
	const json = await response.json();
	filename = json.label
	items = Object.entries(json.entries)
	.map(([key, value]) => {
		return Object.assign(value, {id: key})
	});
});

// database
db = new Datastore({ filename: 'src/lib/packs/tradegoods.db' });
db.loadDatabase(function (error) {   
  if (error) {
      console.log('FATAL: local database could not be loaded. Caused by: ' + error);
      throw error;
    }
    console.log('INFO: local database loaded successfully.');
});


</script>

<svelte:head>
	<title>Home</title>
	<script src="https://cdn.tiny.cloud/1/jcfc13nqyrjanwpgd08llef4luoku40aislurpyrwhsltgc2/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
</svelte:head>

<section>
	
	
	<div class="main">
		<h1>
			Foundry VTT DnD5e übersetzung
		</h1>
		<h2 class="w-100 f-20 text-center">{filename}</h2>
		<div class="wrapper">
			
			<div class="en-translation">
				<h2>Englisch</h2>
			
			</div>
			<div class="de-translation">
				<h2>Deutsch</h2>
				{#each items as item, i}

				<div class="container">

					<div class="flex">
						<div class="en-div">
							<h3>
								Englisches Original
							</h3>
							<p>
							{item.id}
							</p>
						</div>
						<div class="de-div">
							<h3>
								Deutsche übersetzung
							</h3>
								<input type="text" id="{item.id}" name="dtname" bind:value="{item.name}" disabled={!shown.name[i]}>
								<button on:click={() => handelClick(i, 'name')} class="btn">
									{shown.name[i] ?'safe' : 'Edit'}
								</button>
						</div>
					</div>
						<div class="de-description">
							<h3>Beschreibung</h3>
							<div type="text" id="{file + '.description.' + [i]} description-feel"  class="description{i}">{@html item.description}</div>
							<button on:click={() => handelClick(i, 'desc')} class="btn" id="{file + '.description.' + [i]}">
								{shown.desc[i] ? 'safe' : 'Edit'}
							</button>
						</div>
						{#if filename === 'Zauber (SRD)'}
							<div class="de-material">
								<h3>Verbrauchs Material</h3>
								<input type="text" id="{file + '.material.' + [i]}" bind:value="{item.material}" disabled={!shown.material[i]}>
								<button on:click={() => handelClick(i, 'material')} class="btn" id="{file + '.material.' + [i]}">
									{shown.material[i] ? 'safe' : 'Edit'}
								</button>
							</div>
						{/if}
						<div class="de-source">
							<h3>Seite im Buch</h3>
							<input type="text" id="{'source ' + [i]}" name="dtsource" bind:value="{item.source}" disabled={!shown.source[i]}>
							<button on:click={() => handelClick(i, 'source')} class="btn">
								{shown.source[i] ?'safe' : 'Edit'}
							</button>					
						</div>
				</div>

				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.main {
		margin: 0 auto;
		width: 960px;
	}

	h1 {
		width: 100%;
	}

	.w-100 {
		width: 100%
	}

	.f-20 {
		font-size: 20px;
	}

	.text-center {
		text-align: center;
	}
	.wrapper {
		display: flex;
	}
	.container {
		border: 1px solid #000;
		border-radius: 5px;
		padding: 10px;
		margin-bottom: 10px;
	}

	.en-translation {
		width: 480px;
	}

	.de-translation {
		width: 480px;
	}

	.de-div {
		flex: 0 260px;
	}

	.de-word {
		display: flex;
		justify-content: space-between;
	}
	.flex {
		display: flex;
		width: 100%;
		justify-content: space-between;
	}

</style>
