<template>
  <TheHeader title="Remember Me" />
  <StoredResources :storedResources="storedResources" />
</template>

<script>
import StoredResources from "./components/learning-resources/StoredResources.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    StoredResources,
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
