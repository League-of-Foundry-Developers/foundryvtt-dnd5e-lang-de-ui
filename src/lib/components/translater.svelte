<script context="module" lang="ts">
	export const prerender = true;
</script>
<script lang="ts">
import { onMount } from "svelte";
import { browser } from "$app/env";
import { isAuthenticated } from "$lib/auth";
import { user } from "$lib/store";
import { setCookie, translatorUser } from "$lib/cookie";

// import type {  } from  "tinymce";
export let file;
export let dbFile;

let items = [];
let filename = [];
let editorTiny;
let inputHTML;
let dbjson = [];
let safeIndex;
let safeName;
let safeInput;
let safeEntry;
let oldValue;
let loaded = false;
let minTimeLoadDone = false;

$:showLoadingSpinner = !(loaded && minTimeLoadDone);

// safe input
const handelClick = async(index, name) => {

	if (shown[name][index]) {
		showMessage = !showMessage;
		safeIndex = index;
		safeName = name;
		safeInput = items[index];
		return
	}
	if (!shown[name][index]) {
		oldValue = items[index][name];
		safeJson(index, name);
		return
	}
}


function safeJson(index, name) {
	shown[name][index] = !shown[name][index];
	if (name !== 'description') return;
	if (editorTiny) {
		tinymce.activeEditor.remove();
		editorTiny = null;
		inputHTML = null;
	 }
	if (shown[name][index]) {
		 editorTiny = 'div.description' + index;
		 tinymce.init({
		 selector: editorTiny,
		 plugins: 'autolink lists advlist table',
		 toolbar: 'undo redo styleselect bold italic alignleft aligncenter alignright alignjustify | bullist numlist outdent indent',
		 entity_encoding : "raw",
		 height: '350',
		 removed_menuitems: 'newdocument',
		});
	}
	
}

// when use dont want safe
function dontSafe(entry, index, name) {
	// ToDo: Include copy to clipboard

	showMessage = !showMessage;
	safeJson(index, name);
}

function dontShowSafe(entry, index, name) {
	// ToDo: Include copy to clipboard

	showSaveMessage = !showSaveMessage;
	safeJson(index, name);
}



// when user cancel the change
function cancelIt() {
	showMessage = !showMessage;
}

function cancelShowIt() {
	showSaveMessage = !showSaveMessage;
}

async function safeAtJson(entry, index, name) {
	
	if (editorTiny) {
		inputHTML = tinymce.activeEditor.getContent();	
		entry.description = inputHTML;
	}

	entry.file = file;
	// todo auslagern
	const response = await fetch('/api.json?file=' + file);
	const json = await response.json();
	filename = json.label

	
	//ende todo 
	var indexOfEntry = [];

	// build the index
	for (var x in json.entries) {
		indexOfEntry.push(x);
	}
	
	const newValue = json.entries[indexOfEntry[index]][name]
 

	 if (entry[name] !== newValue) {
		safeEntry = entry;
		showMessage = !showMessage;
		showSaveMessage = !showSaveMessage;
		return 
	 }

	showMessage = !showMessage;
	finallySafeToJson(entry, index, name)
}

// final safe function
async function finallySafeToJson(entry, index, name) {
	var data = JSON.stringify(entry);
	// ToDo Try Catcher
	const result = await fetch(`/api.json`, {method:'POST', body: data});
	
	if (showSaveMessage) showSaveMessage = !showSaveMessage;
	safeJson(index, name);	
}

// showMessage
let showMessage;
let showSaveMessage;

// on click set
const shown = {
	description : [],
	name: [],
	material: [],
	source: [],
};
// const section

onMount(async () => {
	setTimeout(() => {
		minTimeLoadDone = true;
	}, 1500)
	const response = await fetch('/api.json?file=' + file);
	const json = await response.json();
	filename = json.label
	
	const dbRespronce = await fetch('/api/db.json?file=' + dbFile);
	dbjson = await dbRespronce.json();
	

	items = Object.entries(json.entries)
		.map(([key, value]) => {
			const item =  Object.assign(value, {id: key})
			item.original = dbjson.find(dbitem => dbitem.name === item.id) || {};
			return item;
		});	
		loaded = true;
});

if ($isAuthenticated) {
  if ($user) {
    setCookie(translatorUser, $user.email, 10);
  }
}

</script>

<svelte:head>
	<title>Home</title>
	<script src="https://cdn.tiny.cloud/1/jcfc13nqyrjanwpgd08llef4luoku40aislurpyrwhsltgc2/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
</svelte:head>

<section>
	
	
	{#if showLoadingSpinner}		
		<div class="overlay">
			<div class="loading-spinner">
				<div class="loading-spinner-inner">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgb(255, 255, 255, 0); display: block; shape-rendering: auto;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
					<g>
					<circle cx="60" cy="50" r="4" fill="#e15b64">
						<animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.67s"></animate>
						<animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.67s"></animate>
					</circle>
					<circle cx="60" cy="50" r="4" fill="#e15b64">
						<animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="-0.33s"></animate>
						<animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="-0.33s"></animate>
					</circle>
					<circle cx="60" cy="50" r="4" fill="#e15b64">
						<animate attributeName="cx" repeatCount="indefinite" dur="1s" values="95;35" keyTimes="0;1" begin="0s"></animate>
						<animate attributeName="fill-opacity" repeatCount="indefinite" dur="1s" values="0;1;1" keyTimes="0;0.2;1" begin="0s"></animate>
					</circle>
					</g><g transform="translate(-15 0)">
					<path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a" transform="rotate(90 50 50)"></path>
					<path d="M50 50L20 50A30 30 0 0 0 80 50Z" fill="#f8b26a">
						<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
					</path>
					<path d="M50 50L20 50A30 30 0 0 1 80 50Z" fill="#f8b26a">
						<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1"></animateTransform>
					</path>
					</g>
					<!-- [ldio] generated by https://loading.io/ --></svg>
				</div>
			</div>
		</div>
	{/if}
	<div class="main" class:active = {!showLoadingSpinner}>
		{#if showMessage}
			<div class="overlay">
				<div class="dialog-wp">
					Wollen Sie den Text speichern?
					<div class="dialog-btn-wp">
						<button on:click={() => safeAtJson(safeInput, safeIndex, safeName)} class="btn btn--spacing">ja</button>
						<button on:click={() => dontSafe(safeInput, safeIndex, safeName)} class="btn btn--spacing btn--color-switch">nein</button>
						<button on:click={() => cancelIt()} class="btn btn--spacing btn--color-cancel">Abbrechen</button>
					</div>
				</div>
			</div>
		{/if}
		{#if showSaveMessage}
			<div class="overlay">
				<div class="dialog-wp">
					Es ist schon Text vorhanden, wollen Sie diesen ändern?
					<div class="dialog-btn-wp">
						<button on:click={() => finallySafeToJson(safeEntry, safeIndex, safeName)} class="btn btn--spacing">ja</button>
						<button on:click={() => dontShowSafe(safeEntry, safeIndex, safeName)} class="btn btn--spacing btn--color-switch">nein</button>
						<button on:click={() => cancelShowIt()} class="btn btn--spacing btn--color-cancel">Abbrechen</button>
					</div>
				</div>
			</div>
		{/if}
		<h1 class="w-100">
			Foundry VTT DnD5e übersetzung
		</h1>
		<h2 class="w-100 f-20 text-center">{filename}</h2>
		<div class="wrapper space-around">
			
			<div class="en">
				<h2>Englisch</h2>
			</div>
			<div class="de">
				<h2>Deutsch</h2>
			</div>
		</div>
		<div>
			{#each items as item, i}
				<div class="flex">
					<div class="en-translation">
						<div class="container">
							<div class="en-div">
								<h3>Orignal Name</h3>
								{item.original.name}
							</div>
							<div class="description">
								<h3>Orignal Text</h3>								
									{@html item?.original?.data?.details?.biography?.value ?? ''}	
								{#if filename === 'Regeln (SRD)'}
									{@html item?.original?.content}
								{/if}
								{#if filename !== 'Regeln (SRD)'}
									{@html item?.original?.data?.description?.value ?? ''}
								{/if}
							</div>
							<div class="de-source">
								<h3>Original Page</h3>
									{item?.original?.data?.source ?? ''}
									{item?.original?.data?.details?.source ?? ''}
							</div>
						</div>
					</div>
					<div class="de-translation">			
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
										{#if $isAuthenticated}
										<button on:click={() => handelClick(i, 'name')} class="btn">
											{shown.name[i] ?'safe' : 'Edit'}
										</button>
										{:else}
											<button disabled>Edit</button>
										{/if}
								</div>
							</div>
							<div class="description">
								<h3>Beschreibung</h3>
									<div type="text" id="{file + '.description.' + [i]} description-feel"  class="description{i}">{@html item?.description ?? ''}</div>
									{#if $isAuthenticated}
									<button on:click={() => handelClick(i, 'description')} class="btn" id="{file + '.description.' + [i]}">
										{shown.description[i] ? 'safe' : 'Edit'}
									</button>
									{:else}
										<button disabled>Edit</button>
									{/if}
							</div>
							{#if filename === 'Zauber (SRD)'}
								<div class="de-material">
									<h3>Verbrauchs Material</h3>
									<textarea type="text" rows="3" cols="50" id="{file + '.material.' + [i]}" bind:value="{item.material}" disabled={!shown.material[i]}></textarea>
									{#if $isAuthenticated}
									<button on:click={() => handelClick(i, 'material')} class="btn" id="{file + '.material.' + [i]}">
										{shown.material[i] ? 'safe' : 'Edit'}
									</button>
									{:else}
									<button disabled>Edit</button>
									{/if}
								</div>
							{/if}
							<div class="de-source">
								<h3>Seite im Buch</h3>
								<input type="text" id="{'source ' + [i]}" name="dtsource" bind:value="{item.source}" disabled={!shown.source[i]}>
								{#if $isAuthenticated}
								<button on:click={() => handelClick(i, 'source')} class="btn">
									{shown.source[i] ?'safe' : 'Edit'}
								</button>
								{:else}
									<button disabled>Edit</button>
								{/if}				
							</div>
						</div>
					</div>
		
				</div>
			{/each}

		</div>
	</div>
</section>

<style>
.main {
	visibility: hidden;
}
.main.active {
	visibility: visible;
}
</style>
