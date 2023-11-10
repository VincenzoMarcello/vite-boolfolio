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
    };
  },

  components: { ProjectList },

  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        // console.log(response.data.data);
        this.projects = response.data.data;
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
  </div>
</template>

<style lang="scss"></style>
