const app = Vue.createApp({
  data() {
    return {
      boxSelected: false,
    };
  },
  computed: {
    boxClasses() {
      return { active: this.boxSelected };
    },
  },
  methods: {
    boxSelect() {
      this.boxSelected = !this.boxSelected;
    },
  },
});

app.mount("#styling");
