const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number > 37) {
        return "Too much!";
      }

      return this.number;
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
