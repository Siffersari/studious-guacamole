<template>
  <base-card>
    <base-button
      @click="selectTab('stored-resources')"
      :mode="storedResButtonMode"
      >Stored Resources</base-button
    >
    <base-button @click="selectTab('add-resource')" :mode="addResButtonMode"
      >Add Resource</base-button
    >
    <component :is="selectedTab" />
  </base-card>
</template>

<script>
import StoredResources from "./StoredResources.vue";
import AddResource from "./AddResource.vue";

export default {
  components: {
    StoredResources,
    AddResource,
  },
  provide() {
    return {
      storedResources: this.storedResources,
    };
  },
  data() {
    return {
      selectedTab: "stored-resources",
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
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
