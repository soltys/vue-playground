<template>
  <div id="app">
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";

export default {
  name: "app",
  components: {
    ToDoList
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
