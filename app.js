const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  methods: {
    add(num) {
      this.result += num;
    },
  },
  computed: {
    num() {
      if (this.result < 37) {
        console.log("Not there yet");
      } else {
        console.log("Too much!");
      }

      return this.result;
    },
  },
  watch: {
    result() {
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
