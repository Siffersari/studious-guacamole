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
import LearningResource from "./components/learning-resources/LearningResource.vue";

export default {
  components: {
    LearningResource,
  },
  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          name: "Official Guide",
          description: "The official Vue.js documentation",
          link: "https://www.vuejs.org",
        },
        {
          id: "google",
          name: "Google",
          description: "Learn to Google",
          link: "https://www.google.com",
        },
      ],
    };
  },
};
</script>
