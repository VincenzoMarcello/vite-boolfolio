<script>
import NavBar from "./components/ui/NavBar.vue";

export default {
  data() {
    return {};
  },

  components: { NavBar },
};
</script>

<template>
  <NavBar />
  <!-- qui mettiamo la pagina che cambia dinamicamente in base al path (una sorta di rotta) -->
  <router-view></router-view>
</template>

<style lang="scss"></style>
