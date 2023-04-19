<template>
  <base-card>
    <base-button @click="selectTab('stored-resources')"
      >Stored Resources</base-button
    >
    <base-button @click="selectTab('add-resource')">Add Resource</base-button>
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
  data() {
    return {
      selectedTab: "stored-resources",
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
