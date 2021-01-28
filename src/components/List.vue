<template>
  <div>
    <div id="list">
      <nested-draggable :items="itemsLocal" />
    </div>
    <p class="new_task" @click="addNewTask">&plus; Add new task</p>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
import NestedDraggable from "./NestedDraggable.vue";

export default {
  name: "list",
  components: {
    NestedDraggable,
  },
  data() {
    return {
      itemsLocal: [
        {
          name: "Loading items",
          items: [],
        },
      ],
    };
  },

  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  watch: {
    items(val) {
      this.itemsLocal = val;
    },
  },
  methods: {
    addNewTask() {
      let count = this.items.length;

      this.items.push({
        id: uuidv4(),
        name: `Task ${count + 1}`,
        details: `This is the task ${
          count + 1
        } - ut id urna sollicitudin, ornare mauris eu, blandit arcu. Vestibulum pharetra ligula ut bibendum accumsan`,
        selected: false,
        edit: false,
        items: [],
      });
    },
  },
};
</script>
<style>
.selected {
  font-weight: bold;
}

.new_task {
  cursor: pointer;
  text-align: right;
  padding: 0 1em;
}

ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
