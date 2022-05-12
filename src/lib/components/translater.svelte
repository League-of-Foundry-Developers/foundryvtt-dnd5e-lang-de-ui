<script context="module" lang="ts">
	export const prerender = true;
</script>
<script lang="ts">
	import YouWantCancel from '$lib/components/YouWantCancel.svelte';
	import FeeldNotEmpty from '$lib/components/FeeldNotEmpty.svelte';
	import YouWantSave from '$lib/components/YouWantSave.svelte';
	import LoadingSpinner from '$lib/components/LoadingSpinner.svelte';

	import { onMount } from "svelte";
	import { browser } from "$app/env";
	import { isAuthenticated, login } from "$lib/auth";
	import { user } from "$lib/store";
	import { setCookie, translatorUser } from "$lib/cookie";
	import Search from "$lib/components/Search.svelte";
	import { hideTranslated, searchQuerry } from "$lib/stores/filter";
	import { filterDescription } from "$lib/filter";

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
		showMessage = !showMessage;
		safeJson(index, name);
	}

	function dontShowSafe(entry, index, name) {
		showSaveMessage = !showSaveMessage;
		safeJson(index, name);
	}

	const cancelEdit = async(index, name) => {
		cancelMessage = !cancelMessage;
		safeIndex = index;
		safeName = name;
	} 



	// when user cancel the change
	function cancelIt() {
		if (showMessage) {
			showMessage = !showMessage;
			return
		}
		if (cancelMessage) {
			cancelMessage = !cancelMessage;
			return
		}
	}

	function cancelShowIt() {
		showSaveMessage = !showSaveMessage;
	}

	function closeEditor(index, name) {
		cancelMessage = !cancelMessage;
		safeJson(index, name);
	}

	async function safeAtJson(entry, index, name) {
		
		if (editorTiny) {
			inputHTML = tinymce.activeEditor.getContent();	
			entry.description = inputHTML;
		}

		entry.file = file;
		const response = await fetch('/api.json?file=' + file);
		const json = await response.json();
		filename = json.label

		
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
	let cancelMessage;

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

	let _searchQuerry;

	function debounce(func, timeout = 300){
		let timer;
		return (...args) => {
			clearTimeout(timer);
			timer = setTimeout(() => { func.apply(this, args); }, timeout);
		};
	}
	const processChange = debounce(() => {
		_searchQuerry = $searchQuerry
	});

	$: {		
		processChange($searchQuerry);
	}

	let _hideTranslated = $hideTranslated;
	$: {
	
		// if(_searchQuerry === '') console.log('null');
		// console.log('_search', _searchQuerry);
		// console.log('$search', $searchQuerry);
		
		// console.log('##################################');		

		if (loaded && (_hideTranslated !== $hideTranslated || _searchQuerry !== $searchQuerry || _searchQuerry === '')) {
			// console.log('intern', _searchQuerry);
			
			_hideTranslated = $hideTranslated
			items = items.map((item) => {
				item.hidden = filterDescription({
					item,
					hideTranslated: $hideTranslated,
					searchQuerry: _searchQuerry,
				});
		
				return item;
			})
		}
	}

	</script>

	<svelte:head>
		<title>Home</title>
		<script src="https://cdn.tiny.cloud/1/jcfc13nqyrjanwpgd08llef4luoku40aislurpyrwhsltgc2/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
	</svelte:head>

<section>
	
	
	{#if showLoadingSpinner}		
		<LoadingSpinner />
	{/if}
	<div class="main" class:active = {!showLoadingSpinner}>
		{#if showMessage}
			<YouWantSave saveClose = {() => safeAtJson(safeInput, safeIndex, safeName)}	notSave = {() => dontSafe(safeInput, safeIndex, safeName)} closeThis = {() => cancelIt()}></YouWantSave>
		{/if}
		{#if showSaveMessage}
			<FeeldNotEmpty finalSave = {() => finallySafeToJson(safeEntry, safeIndex, safeName)} dontShow = {() => dontShowSafe(safeEntry, safeIndex, safeName)} closeShow = {() => cancelShowIt()}></FeeldNotEmpty>
		{/if}
		{#if cancelMessage}
			<YouWantCancel close = {() => closeEditor(safeIndex, safeName)} cancel = {() => cancelIt()}></YouWantCancel>
		{/if}
		<h1 class="w-100">
			Foundry VTT DnD5e übersetzung
		</h1>
		<h2 class="w-100 f-20 text-center">{filename}</h2>
		<Search></Search>
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
			{#if !item?.hidden}
				<div class="flex">
					<div class="en-translation">
						<div class="container">
							<div class="en-div">
								<h3>Orignal Name</h3>
								{item?.original?.name}
							</div>
							<div class="description-en">
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
										<div>
											<button on:click={() => handelClick(i, 'name')} class="btn">
												{shown.name[i] ?'safe' : 'Edit'}
											</button>
											<button on:click={() => cancelEdit(i, 'name')} hidden={!shown.name[i]} class="btn btn--color-cancel">Cancel</button>
										</div>
										{:else}
											<button class="btn" on:click="{login}">Edit</button>
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
									<button on:click={() => cancelEdit(i, 'description')} hidden={!shown.description[i]} class="btn btn--color-cancel">Cancel</button>
									{:else}
										<button class="btn" on:click="{login}">Edit</button>
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
									<button on:click={() => cancelEdit(i, 'material')} hidden={!shown.material[i]} class="btn btn--color-cancel">Cancel</button>
									{:else}
										<button class="btn" on:click="{login}">Edit</button>
									{/if}
								</div>
							{/if}
							{#if filename === 'Würfel Tabelle'}

							{/if}
							<div class="de-source">
								<h3>Seite im Buch</h3>
								<input type="text" id="{'source ' + [i]}" name="dtsource" bind:value="{item.source}" disabled={!shown.source[i]}>
								{#if $isAuthenticated}
								<button on:click={() => handelClick(i, 'source')} class="btn">
									{shown.source[i] ?'safe' : 'Edit'}
								</button>
								<button on:click={() => cancelEdit(i, 'source')} hidden={!shown.source[i]} class="btn btn--color-cancel">Cancel</button>
								{:else}
									<button class="btn" on:click="{login}">Edit</button>
								{/if}				
							</div>
						</div>
					</div>
		
				</div>
			{/if}
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
