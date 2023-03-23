const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      //   fullname: "",
      lastName: "",
    };
  },
  methods: {
    outPutFullname() {
      if (this.name === "" || this.lastName === "") {
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
      return this.name + " " + this.lastName;
    },
  },
  watch: {
    counter(value) {
      const that = this;
      if (value > 50) {
        setTimeout(() => {
          this.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
});

app.mount("#events");
