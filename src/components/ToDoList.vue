<template>
  <div>
    <ul>
      <ToDoEntry
        v-for="task in tasks"
        v-bind:key="task.id"
        :id="task.id"
        :name="task.name"
        :isDone="task.isDone"
      />
    </ul>
  </div>
</template>

<script>
import ToDoEntry from "./ToDoEntry.vue";
export default {
  name: "ToDoList",
  props: {
    msg: String
  },
  components: {
    ToDoEntry
  },
  data() {
    return {
      tasks: []
    };
  },
  mounted() {
    function generateUUID() {
      // Public Domain/MIT
      var d = new Date().getTime();
      if (
        typeof performance !== "undefined" &&
        typeof performance.now === "function"
      ) {
        d += performance.now(); //use high-precision timer if available
      }
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      });
    }
    let t = [];
    for (let i = 1; i <= 10; i++) {
      t.push({
        id: generateUUID(),
        name: "to do #" + i,
        isDone: i % 3 == 0
      });
    }
    this.tasks = t;
  }
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
a {
  color: #42b983;
}
</style>