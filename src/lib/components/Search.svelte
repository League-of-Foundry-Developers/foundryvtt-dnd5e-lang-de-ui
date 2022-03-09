<script>
    import { hideTranslated, searchQuerry } from "$lib/stores/filter";
</script>

<div class="filter">
    <div class="search-area">
        <label class="search-area-label" for="filter">Search:</label>
        <input type="text" id="filter" class="input-filter" bind:value={$searchQuerry} />
    </div>
    <div class="filter-btn-wp">
        <label class="filter-btn-label sr-only" for="emptyField">zu Übersetzende Texte</label>
        <input type="checkbox" class="filter-btn-checkbox" id="emptyField" bind:checked="{$hideTranslated}" />
        <div class="filter-btn-text">zu Übersetzende Texte</div>
    </div>
</div>