<template>
  <li>
    <Checkbox
      :id="data.id"
      :label="data.name"
      :checked="data.isDone"
      v-on:change="(v)=>data.isDone=v"
    />
  </li>
</template>

<script>
import Checkbox from "./Checkbox";
export default {
  name: "ToDoEntry",
  props: {
    id: String,
    name: String,
    isDone: Boolean
  },
  data() {
    return {
      data: {
        id: this.id,
        name: this.name,
        isDone: this.isDone
      }
    };
  },
  components: {
    Checkbox
  }
};
</script>

<style scoped>
li {
  display: flex;
  margin: 10px 0;
}
</style>