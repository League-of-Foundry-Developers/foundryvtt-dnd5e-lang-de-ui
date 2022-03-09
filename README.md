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

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## Question
You have Question, write me on Discord crash#7509
or a Email <jan-dennid@outlook.at>