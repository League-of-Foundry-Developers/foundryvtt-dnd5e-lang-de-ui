<script>
    export let close;
    export let cancel;
</script>

<div class="overlay">
    <div class="dialog-wp">
        Wollen Sie wirklich die Bearbeitung Abbrechen?
        <div class="dialog-btn-wp">
            <button on:click={() => close()} class="btn btn--spacing">Ja</button>
            <button on:click={() => cancel()} class="btn btn--spacing btn--color-switch">Nein</button>
        </div>
    </div>
</div>