<script>
// importo il componente card
import ProjectCard from "./ProjectCard.vue";

// IMPORTO LA DIPENDENZA AXIOS
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
      // facciamo questo per la paginazione all'inizio è null
      pagination: {
        links: null,
      },
    };
  },

  // registro il componente card
  components: { ProjectCard },

  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        // console.log(response.data.data);
        this.projects = response.data.data;
        // questo serve per la paginazione
        this.pagination.links = response.data.links;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container mt-3 mb-3">
    <h2 class="py-3">Lista Progetti</h2>
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
    <div class="row row-cols-4 g-4">
      <!-- stampo con un v for tante card e mando tramite props l'oggetto project per fare la base di una card -->
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
