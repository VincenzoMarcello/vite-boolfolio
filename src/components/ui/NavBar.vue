<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" :to="{ name: 'portfolio' }"
        >Boolfolio</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'homepage' }"
              >Homepage</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" :to="{ name: 'portfolio' }"
              >Portfolio</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
