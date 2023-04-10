<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    phoneNumber: String,
    emailAddress: String,
    isFavorite: String,
  },
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.friendIsFavorite = this.friendIsFavorite === "1" ? "0" : "1";
    },
  },
};
</script>
