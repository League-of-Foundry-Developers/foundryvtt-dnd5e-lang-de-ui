<script>
    export let saveClose;
    export let notSave;
    export let closeThis;
</script>

<div class="overlay">
    <div class="dialog-wp">
        Wollen Sie den Text speichern?
        <div class="dialog-btn-wp">
            <button on:click={() => saveClose()} class="btn btn--spacing">ja</button>
            <button on:click={() => notSave()} class="btn btn--spacing btn--color-switch">nein</button>
            <button on:click={() => closeThis()} class="btn btn--spacing btn--color-cancel">Abbrechen</button>
        </div>
    </div>
</div>