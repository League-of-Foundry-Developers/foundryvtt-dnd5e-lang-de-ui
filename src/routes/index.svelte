<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
import { isAuthenticated, login } from '$lib/auth';
import { user } from '$lib/store';
import { readCookie, setCookie, translatorUser } from '$lib/cookie';

import Translater from '$lib/components/Translater.svelte';
import { src_url_equal } from 'svelte/internal';
if ($isAuthenticated) {  
  if ($user) {
    setCookie(translatorUser, $user.email, 10);
  }
}

</script>
<!-- <Translater file="dnd5e.tradegoods.json" dbFile="tradegoods.db"></Translater> -->
<div>
	<h1 class="w-100">Willkommen auf Translator.Gilneas.at</h1>
	{#if !$isAuthenticated}
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <div class="jumbotron">
          <p>Diese Seite wurde erstellt um das DnD5e System und sein Kompendium vom Englischen ins Deutsche zu übersetzen.</p>
          <p>
            Wir haben es uns zur Aufgabe gemacht, allen Spielern einen einfachen Zugang zu den DnD5e Regeln, Zaubern, Gegenständen, Völkern, Monstern und Charakteren zu ermöglichen.
            Falls du uns unterstützen möchtest, registriere dich und hilf beim Übersetzen.
          </p>
          <p>
            Sobald du eingeloggt bist, erhältst du weitere Informationen.
            Du hast vorab Fragen? Dann scheib mir über <a href="https://discord.com/">Discord</a> unter crash#7509 oder auf <a href="https://twitter.com/crashoverried">Twitter</a>.
          </p>      
          <button class="btn btn--login" on:click="{login}">Log In</button>
        </div>
      </div>
    </div>
  </div>
  {:else}
    <div class="text-white">
      <h2>Willkommen {$user.name} ({$user.email})</h2>
    </div>
    <div>
      <p>
        Krümelchen, [27.10.21 22:04]
  Großartig, dass du uns bei der Übersetzung von DnD unterstützen möchtest. 
        Die Seite befindet sich aktuell in einer Beta, daher kann es zu kleinen Problemen kommen.
        Du hast einen Fehler entdeckt oder einen Vorschlag für Verbesserung? Dann erstelle bitte ein Issue:
        <a href="https://github.com/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de-ui/issues">github</a>
      </p>
      <p>
        Die Seite ist ganz einfach aufgebaut. Auf der linken Seite findest du das englische Original, auf der rechten Seite den Bereich für die Übersetzung.
        <img src="/img/Eng-Deu.jpg" alt="example for page view" >
      </p>
      <p>
        Einfach auf Edit gehen und man kann anfangen zu übersetzen.
      </p>
      <p>
        Wir haben die Erlaubnis, die Texte aus dem Buch zu verwenden, wodurch es ein Zitat wird. Es muss aber immer die Buchseite angegeben werden.
      </p>
    </div>

  {/if}
</div>
