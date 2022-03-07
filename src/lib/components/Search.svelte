<script>
    import { hideTranslated, searchQuerry } from "$lib/stores/filter";
</script>

<div class="filer">
    <label>Search:</label>
    <input type="text" id="filter" class="input-filter" bind:value={$searchQuerry} />
    <input type="checkbox" id="emptyField" bind:checked="{$hideTranslated}" />
    <label for="emptyField">zu Übersetzende Texte</label>
</div>