<template>
  <section>
    <div>
      <h1>Active User</h1>
      <h2>{{ name }}</h2>
      <h3>{{ age }}</h3>
    </div>
  </section>
</template>

<script>
export default {
  props: ["name", "age"],
};
</script>
