<script>
import ProjectList from "../components/projects/ProjectList.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  components: { ProjectList },
};
</script>

<template>
  <ProjectList />
</template>

<style lang="scss" scoped></style>
