const app = Vue.createApp({
  data() {
    return {
      userClass: "",
      userColor: "",
      isVisible: true,
    };
  },
  computed: {
    visibilityClasses() {
      return { visible: this.isVisible, hidden: !this.isVisible };
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
