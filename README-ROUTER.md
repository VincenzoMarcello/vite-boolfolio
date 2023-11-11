# TRACCIA

Oggi continuate a lavorare nelle repo laravel-api e vite-boolfolio.

## Milestone 1 (Vue)

Installate Vue Router, realizzate il file router.js come nelle slides o usate la cartella router/index.js come visto insieme.
Ricordate di
importarlo e usarlo anche in main.js
di usare il componente <router-view> in App.vue

## Milestone 2 (Vue)

Realizzare una cartella pages, inserite al suo interno 3 pagine: homepage, portfolio, project-detail.
La homepage è da realizzare a piacere (per ultima)
Il portfolio conterrà una lista di projects impaginati
Il project-detail conterrà il dettaglio di un singolo progetto (da utilizzare quindi un parametro nell'url e nei <router-link>)
NB: In questa milestone basterà vedere le pagine, non serve aggiungere il contenuto.

## Milestone 3 (Vue)

Aggiungere una navbar e tutti i router-link per permettere la navigazione

## Milestone 4 (Laravel)

Realizzare e testare le chiamate API (Api\ProjectController, metodi index e show).

## Milestone 5 (Vue)

Effettuare chiamate alle API da Axios e aggiungere il contenuto alle pagine portfolio e project-detail

## Bonus

Completare la homepage

## Bonus 2

Realizzare un form dei contatti che invii una mail con la configurazione di mailtrap

# SVOLGIMENTO

## ROUTER

- andiamo ora a fare il router che serve per rendere quest'app di vue da single page app a multi page app cioè ci permette di navigare tra più pagine tipo le rotte di Laravel, fa una sorta di v-if sulla parte finale dell'url e se corrisponde alla richiesta che facciamo ci porta su quella pagina:

- prima cosa da fare è installare il router:

```
npm install vue-router@4
```

- mettiamo in App.vue nel template la pagina <router-view></router-view> questa cambia dinamicamente in base al path:

```html
<template>
  <div class="container">
    <h1>Boolfolio</h1>

    <hr class="mb-0" />
    <ProjectList :projects="projects" />

    <router-view></router-view> <--------
    <!--  -->
  </div>
</template>
```

- poi ci facciamo una cartella router in src in cui metteremo un file index.js in cui gestiremo le varie rotte alle pagine e importeremo i vari componenti:

```js
// la createWebHistory salva le pagine nella cronologia
import { createWebHistory, createRouter } from "vue-router";

// qui importiamo componenti

const router = createRouter({
  // qui aggiungiamo la history
  // qui aggiungiamo le rotte
});

export { router };
```