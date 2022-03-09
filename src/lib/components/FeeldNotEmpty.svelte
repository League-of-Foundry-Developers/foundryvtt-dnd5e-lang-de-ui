<script>
    export let finalSave;
    export let dontShow;
    export let closeShow;
</script>
<div class="overlay">
    <div class="dialog-wp">
        Es ist schon Text vorhanden, wollen Sie diesen ändern?
        <div class="dialog-btn-wp">
            <button on:click={() => finalSave()} class="btn btn--spacing">ja</button>
            <button on:click={() => dontShow()} class="btn btn--spacing btn--color-switch">nein</button>
            <button on:click={() => closeShow()} class="btn btn--spacing btn--color-cancel">Abbrechen</button>
        </div>
    </div>
</div>
