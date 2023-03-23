const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    outPutFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Khan";
    },
    resetInput() {
      this.name = "";
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
  computed: {
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Khan";
    },
  },
});

app.mount("#events");
