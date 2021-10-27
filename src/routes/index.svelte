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
        Großartig das du uns bei der übersetzung von DnD unterstützen möchtest. 
        Die Seite befindet sich Aktuell in einer Beta, daher kann es zu kleinen Problemen kommen.
        Du hast einen fehler entdeckt oder hast einen vorschlag für verbesserung, dann schreib bitte ein Issu auf:
        <a href="https://github.com/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de-ui/issues">github</a>
      </p>
      <p>
        Das System ist ganz einfach aufgebaut. Auf der Linken Seite findet man das Englische Original, auf der Rechten Seite den Bereich um den Text zu Übersetzen.
        <img src="src/img/Eng-Deu.jpg" alt="example for page view" >
      </p>
      <p>
        Einfach auf Edit gehen und man kann anfangen zu übersetzen.
      </p>
      <p>
        Wir dürfen die Texte aus dem Buch verwenden, es muss aber immer die Seite Angegeben werden. Somit Zittieren wir die Texte.
      </p>
    </div>

  {/if}
</div>
