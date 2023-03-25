const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInput: "",
      showTasks: true,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
    },
    toggleShowTasks() {
      this.showTasks = !this.showTasks;
    },
  },
  computed: {
    buttonCaption() {
      return this.showTasks ? "Hide List" : "Show List";
    },
  },
});

app.mount("#assignment");
