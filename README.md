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

- ora proviamo a importare il componente ProjectList all'interno di App.vue e vediamo se funziona:

```html
<script>
  import ProjectList from "./components/projects/ProjectList.vue";  <----- IMPORTIAMO

  export default {
    data() {
      return {
        title: "Home",
      };
    },

    components: {
      ProjectList,   <----- REGISTRIAMO
    },
  };
</script>

<template>
  <h1>title</h1>
  <ProjectList /> <----- USIAMO
</template>

<style lang="scss"></style>
```

- ora dobbiamo fare la chiamata axios per prendere i projects dal back-office, per prima cosa installiamo axios:

```
npm i axios
```

- ora importiamolo dove vogliamo fare la chiamata nel nostro caso in App.vue

```
import axios from 'axios';
```

- proviamo a fare la chiamata e a ricevere i dati al caricamento della pagina quindi nel created:

```html
<script>
  export default {
    data() {
      return {
        // METTIAMO UN PROJECTS VUOTO CHE SI RIEMPIRA'
        projects: [],
      };
    },

    components: { ProjectList },

    created() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {  <--- FACCIAMO LA CHIAMATA
        // console.log(response.data.data);

        // METTIAMO L' ARRAY PROJECTS CHE CI ARRIVA DALLA CHIAMATA NEL PROJECTS VUOTO IN DATA
        this.projects = response.data.data;
      });
    },
  };
</script>
```

- ora spostiamo la chiamata in un metodo:

```js
......
  methods: {
    fetchProjects() {
      axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
        // console.log(response.data.data);
        this.projects = response.data.data;
      });
    },
  },

   created() {
    this.fetchProjects();
  },
......
```

- al posto del url statico rendiamolo dinamico in maniera tale da poter mettere più pagine, la prima parte dell'url siccome è sempre uguale mettiamola dentro una variabile e passiamo un parametro al get che di default sarà quello della pagina 1 ma se gli diamo un nuovo url prenderà quello:

```js
  data() {
    return {
      projects: [],
      api: {                            <-----------
        baseUrl: "http://127.0.0.1:8000/api/", <----------
      },
    };
  },


  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {  <-----
      axios.get(uri).then((response) => {
        // console.log(response.data.data);
        this.projects = response.data.data;
      });
    },
  },

   created() {
    this.fetchProjects("inseriamo ad esempio l'url della pagina 2");
  },
```

- ora dobbiamo passare l'array di projects ricevuto dalla chiamata axios al componente ProjectsList per stamparli in delle card a schermo:
<!-- in App.vue passiamo la prop -->

```js
<template>
  <h1>Hello World</h1>
  <ProjectList :projects="projects" /> <------
</template>
```

<!-- in Project.List -->

```js
<script>
....
 props: {
    projects: Array,
  },
....
</script>

<template>
  <div class="container">
    <h2>Lista Progetti</h2>
    <div class="row row-cols-4 g-4">
      <div class="col" v-for="project in projects"> <----
        <div class="card h-100">
          <div class="card-body">
            <h4>{{ project.name }}</h4> <----
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
```

- ora siccome abbiamo un componente PostCard spostiamo la card all'interno di quest'ultimo:
<!-- in Project.Card -->

```js
......
//  importo l'oggetto che contiene le varie chiavi (name,id,link ecc)
  props: { project: Object },
......

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h4>{{ project.name }}</h4>
      </div>
    </div>
  </div>
</template>
```

<!-- in Project.List -->

````js
<script>
// importo il componente card
import ProjectCard from "./ProjectCard.vue";

export default {
  data() {
    return {};
  },
  // importo l'array di oggetti projects da App.vue che arriveranno
  // tramite chiamata axios a App.vue dal back-end
  props: { projects: Array },

  // registro il componente card
  components: { ProjectCard },
};
</script>

<template>
  <div class="container">
    <h2>Lista Progetti</h2>
    <div class="row row-cols-4 g-4">
      <!-- stampo con un v for tante card e mando tramite props l'oggetto project per fare la base di una card -->
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
```
````

- ora dobbiamo spostarci su laravel-api per inviare anche i badge types e le tecnologies.

- in ProjectCard:

```html
<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between align-items-start">
        <!-- in style stampo il color dei type e poi stampo il label -->
        <span
          class="badge mx-1"
          :style="{ backgroundColor: project.type.color }"
          >{{ project.type.label }}
        </span>

        <div>
          <!-- stessa cosa ma siccome sono più tecnologie metto un v-for -->
          <span
            class="badge roudend-pill mx-1"
            v-for="technology in project.technologies"
            :style="{ backgroundColor: technology.color }"
            >{{ technology.label }}
          </span>
        </div>
      </div>
      <div class="card-body">
        <p><strong>Nome Progetto: </strong>{{ project.name }}</p>
        <p><strong>Link: </strong>{{ project.link }}</p>
        <p><strong>Descrizione: </strong>{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>
```

- ora facciamo la paginazione:
<!-- in App.vue -->

```js
// facciamo questo per la paginazione all'inizio è null
      pagination: {
        links: null,
      },
```

```html
<template>
  <div class="container">
    <h1>Boolfolio</h1>
    <hr class="mb-0" />
    <ProjectList :projects="projects" />

    <!-- qui mettiamo la navigation per la paginazione -->
    <nav class="py-3">
      <ul class="pagination">
        <li
          v-for="link in pagination.links"
          @click="fetchProjects(link.url)"
          class="page-item"
        >
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>
```
