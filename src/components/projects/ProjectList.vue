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
  <h2 class="py-3">Lista Progetti</h2>
  <div class="row row-cols-4 g-4">
    <!-- stampo con un v for tante card e mando tramite props l'oggetto project per fare la base di una card -->
    <ProjectCard v-for="project in projects" :project="project" />
  </div>
</template>

<style lang="scss" scoped></style>
