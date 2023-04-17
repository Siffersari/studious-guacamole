<template>
  <div>
    <h1>User Data</h1>
    <form @submit.prevent="submitData">
      <div>
        <label for="name">Name</label>
        <input type="text" v-model="enteredName" />
      </div>
      <div>
        <label for="age">Age (Years)</label>
        <input type="text" v-model="enteredAge" />
      </div>
      <div>
        <button>Add User</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  emits: ["add-user"],
  data() {
    return {
      enteredName: "",
      enteredAge: 0,
    };
  },
  methods: {
    submitData() {
      this.$emit("add-user", { name: this.enteredName, age: this.enteredAge });
    },
  },
};
</script>
