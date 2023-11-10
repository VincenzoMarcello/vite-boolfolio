<script>
// # IMPORTO IL COMPONENTE ProjectList
import ProjectList from "./components/projects/ProjectList.vue";

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

  components: { ProjectList },

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

<style lang="scss"></style>
