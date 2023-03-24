const app = Vue.createApp({
  data() {
    return {
      boxSelected: false,
    };
  },
  methods: {
    boxSelect() {
      this.boxSelected = !this.boxSelected;
    },
  },
});

app.mount("#styling");
