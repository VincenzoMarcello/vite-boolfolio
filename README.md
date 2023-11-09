# Continuiamo l'esercizio di laravel:

la seconda parte dell'esercizio vuole:

Iniziamo ad occuparci della parte front-office della nostra applicazione: creiamo un nuovo progetto Vue 3 con Vite e installiamo axios.
Colleghiamo questo progetto ad una repo separata.

## Milestone 4

Nel componente principale della nostra Vue App facciamo una chiamata API all'endpoint costruito nel progetto Laravel (milestone 1) e recuperiamo tutti i progetti dal nostro back-end.
Stampiamo in console i risultati e verifichiamo di ricevere i dati correttamente.

## Milestone 5

Creiamo un nuovo componente ProjectCard, che corrisponde ad una card per visualizzare un progetto. Utilizziamo questo componente per visualizzare tutti i progetti ricevuti tramite API.

# SVOLGIMENTO

- quindi prima cosa da fare è installare vite, installare pacchetti, e far partire il server:

```
npm create vite@latest .
```

```
npm i
e
npm run dev
```

- ora svutiamo App.vue
- e installiamo SASS:

```
npm add -D sass
```

- cancelliamo lo style.css e andiamo in assets e ci creiamo una cartella scss con dentro un file style.scss
- cambiamo l'import nel main.js con:

```
import "./assets/scss/style.scss";
```

- ora importiamo bootstrap, per prima cosa va installato:

```
npm i bootstrap@5.3.2
```

- importiamo il js di bootstrap in main.js:

```
import * as bootstrap from 'bootstrap'
```

- importiamo lo style di bootstrap dentro lo style.scss

```
@import "bootstrap/scss/bootstrap";
```

- ora bootstrap è pronto

- iniziamo a crearci dei componenti ora, ci creiamo la cartellina projects e dentro due componenti ProjectCard e ProjectList
