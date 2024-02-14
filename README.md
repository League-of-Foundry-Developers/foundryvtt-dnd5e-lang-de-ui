#GERMAN (English below)

# Projektankündigung zur Einstellung und Integration in das Hauptprojekt

Getreu der Idee, Übersetzungen aus dem Foundry VTT-Spielsystem so einfach wie möglich zur Verfügung zu stellen, wurde dieses Tool entwickelt, um eine gemeinsame Arbeit an den Texten zu ermöglichen. Es erlaubt jedem, der mitarbeiten möchte, dies auf einfache Weise zu tun.

## Information zum Projekt

- **Grundidee:** DnD-Implementierung, anpassbar
- **Entwicklung:** Dies war mein erstes Projekt mit Svelte, was den Entwicklungsprozess zu einer besonderen Lernerfahrung machte.

## Web-Übersetzungs-UI für [foundryvtt-dnd5e-lang-de](https://github.com/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de)

Dies ist eine Release-Version.

### Mitwirken

- **Übersetzen:** Wenn du Interesse hast, beim Übersetzen zu helfen, schreibe mir auf Discord. Du findest mich unter crash#7509.
- **Entwickeln:** Wenn du Interesse hast, an der Entwicklung dieses Projekts mitzuwirken, forke bitte dieses Projekt und erstelle nach deiner Arbeit einen Merge Request.

### Anpassbar

Das Tool ist leicht anpassbar, um es für andere Spielmodule zu verwenden.

In dem Ordner `routes` findest du die Kompendium-Dateien. In diesen Dateien findest du folgende Codezeile:

```svelte
<Translater file="dnd5e.monsters.json" dbFile="monsters.db"></Translater>
```
- **Speicherdatei**: file
- **Datenbankdatei**: dbFile
Ändere hier die Dateinamen für die Dateien, und du kannst andere Datenbankdateien laden.

## Entwicklung
Dieses Projekt wurde in Svelte mit Svelte Kit geschrieben.

Nachdem du ein Projekt erstellt und die Abhängigkeiten mit npm install (oder pnpm install oder yarn) installiert hast, starte einen Entwicklungsserver:
```
npm run dev
```

# oder starte den Server und öffne die App in einem neuen Browser-Tab
```
npm run dev -- --open
```

# Projektankündigung zur Einstellung und Integration in das Hauptprojekt

Getreu der Idee, Übersetzungen aus dem Foundry VTT-Spielsystem so einfach wie möglich zur Verfügung zu stellen, wurde dieses Tool entwickelt, um eine gemeinsame Arbeit an den Texten zu ermöglichen. Es erlaubt jedem, der mitarbeiten möchte, dies auf einfache Weise zu tun.

## Information zum Projekt

- **Grundidee:** DnD-Implementierung, anpassbar
- **Entwicklung:** Dies war mein erstes Projekt mit Svelte, was den Entwicklungsprozess zu einer besonderen Lernerfahrung machte.

## Web-Übersetzungs-UI für [foundryvtt-dnd5e-lang-de](https://github.com/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de)

Dies ist eine Release-Version.

### Mitwirken

- **Übersetzen:** Wenn du Interesse hast, beim Übersetzen zu helfen, schreibe mir auf Discord. Du findest mich unter crash#7509.
- **Entwickeln:** Wenn du Interesse hast, an der Entwicklung dieses Projekts mitzuwirken, forke bitte dieses Projekt und erstelle nach deiner Arbeit einen Merge Request.

### Anpassbar

Das Tool ist leicht anpassbar, um es für andere Spielmodule zu verwenden.

In dem Ordner `routes` findest du die Kompendium-Dateien. In diesen Dateien findest du folgende Codezeile:

```svelte
<Translater file="dnd5e.monsters.json" dbFile="monsters.db"></Translater>
```

Speicherdatei: file
Datenbankdatei: dbFile
Ändere hier die Dateinamen für die Dateien, und du kannst andere Datenbankdateien laden.

## Entwicklung
Dieses Projekt wurde in Svelte mit Svelte Kit geschrieben.

Nachdem du ein Projekt erstellt und die Abhängigkeiten mit npm install (oder pnpm install oder yarn) installiert hast, starte einen Entwicklungsserver:

```
npm run dev
```
# oder starte den Server und öffne die App in einem neuen Browser-Tab
```
npm run dev -- --open
```

## Build
Vor der Erstellung einer Produktionsversion deiner App installiere einen Adapter für deine Zielumgebung. Dann:
```
npm run build
```
Du kannst die gebaute App mit npm run preview vorab ansehen, unabhängig davon, ob du einen Adapter installiert hast. Dies sollte nicht verwendet werden, um deine App in Produktion zu betreiben.

## Fragen
Du hast Fragen? Schreibe mir auf Discord crash#7509 oder eine E-Mail an jan-dennid@outlook.at.

## Projekt Einstellung und Überführung in das Hauptprojekt
Wir möchten die Nutzer darüber informieren, dass dieses Projekt eingestellt wurde und alle Inhalte und Dateien nun vollständig in das Kernprojekt übergegangen sind. Das Hauptprojekt findest du hier: [link](https://github.com/mhilbrunner/foundryvtt-dnd5e-lang-de/).

Wir ermutigen alle Nutzer, das neue Repository zu besuchen und sich mit den dort bereitgestellten Ressourcen und Informationen vertraut zu machen. Vielen Dank an alle, die dieses Projekt unterstützt haben. Eure Beiträge waren enorm wertvoll.

# ENGLISH

# Introductory
True to the idea of providing translation from a Foundry VTT gaming system as simply as possible. In order to reach many users, there had to be an easy way to work together on the texts. For this reason this tool was created. It allows anyone who wants to work with it.

---------------------------------
## Information of the Project
- [Basic idea](#introductory)
- [DnD implementation](#foundryvtt-dnd5e-lang-de-ui)
- [Customizable](#customizable)
- [Developing](#developing)
- [Question](#question)
- 
---------------------------------------------
## foundryvtt-dnd5e-lang-de-ui

![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de-ui?label=Latest+Release)
![GitHub Downloads All Releases](https://img.shields.io/github/downloads/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de-ui/total?label=Downloads+(Total))
![GitHub Downloads Release](https://img.shields.io/github/downloads/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de-ui/latest/total?label=Downloads+(Latest))
![GitHub Release Date](https://img.shields.io/github/release-date/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de-ui?label=Release+Date)

Web translation UI for https://github.com/League-of-Foundry-Developers/foundryvtt-dnd5e-lang-de

This is a Release Version.

When you have interesst to help to Translate, write me on Discord. You find me under crash#7509

You have interesst to help to Develop this Project, than fork please this Project and after you work, create Merge Request.

-----------------------------------
## Customizable
The tool is easily adaptable to use it for other game modules.

You find at the folder routes the compendium files. 
At this files you find this code line:

```bash
<Translater file="dnd5e.monsters.json" dbFile="monsters.db"></Translater>
```
The Saving file is **file**

The Databank file is **dbFile**

Change here the file names for the files. And you can load a other Databanks files.

----------------------------------------
## Developing

This project is wirting in [Svelte](https://svelte.dev/) with [Svelte Kit](https://kit.svelte.dev/)


Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

## Project Discontinuation and Integration into the Main Project
We would like to inform users that this project has been discontinued and all content and files have now fully transitioned to the core project. You can find the main project here: [link](https://github.com/mhilbrunner/foundryvtt-dnd5e-lang-de/).

We encourage all users to visit the new repository and familiarize themselves with the resources and information provided there. Thank you to everyone who supported this project. Your contributions were immensely valuable.
> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Question
You have Question, write me on Discord crash#7509
or a Email <jan-dennid@outlook.at>
