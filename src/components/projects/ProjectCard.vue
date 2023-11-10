<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },
  //  importo l'oggetto che contiene le varie chiavi (name,id,link ecc)
  props: { project: Object },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-header d-flex justify-content-between align-items-start">
        <span
          class="badge mx-1"
          :style="{ backgroundColor: project.type.color }"
          >{{ project.type.label }}
        </span>

        <div>
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

<style lang="scss" scoped></style>
