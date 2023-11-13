<script>
import ProjectCard from "../components/projects/ProjectCard.vue";

import axios from "axios";

export default {
  data() {
    return {
      project: {},
      api: {
        baseUrl: "http://127.0.0.1:8000/api/",
      },
    };
  },

  components: {
    ProjectCard,
  },

  created() {
    axios
      .get(this.api.baseUrl + "projects/" + this.$route.params.id)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<template>
  <div class="container">
    <ProjectCard :project="project" v-if="project"></ProjectCard>
  </div>
</template>

<style lang="scss" scoped></style>
