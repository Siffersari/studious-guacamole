const app = Vue.createApp({
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    registerInput(event) {
      this.userInput = event.target.value;
    },
    showAlert() {
      alert("Alert!");
    },
  },
});

app.mount("#assignment");
