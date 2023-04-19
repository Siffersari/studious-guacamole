<template>
  <TheHeader title="Remember Me" />
  <TheResource />
</template>

<script>
import TheResource from "./components/learning-resources/TheResource.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    TheResource,
    TheHeader,
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
  provide() {
    return {
      storedResources: this.storedResources,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
