<template>
  <ul>
    <LearningResource
      v-for="resource in storedResources"
      :key="resource.id"
      :title="resource.name"
      :description="resource.description"
      :link="resource.link"
    />
  </ul>
</template>

<script>
import LearningResource from "./LearningResource.vue";

export default {
  components: {
    LearningResource,
  },
  props: {
    storedResources: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
