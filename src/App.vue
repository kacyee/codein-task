<template>
  <div id="app">
    <img alt="Codein logo" src="./assets/logo.svg" />
    <h1>Codein To-do list</h1>
    <div class="content">
      <List />
      <Preview />
    </div>
  </div>
</template>

<script>
import List from "./components/List.vue";
import Preview from "./components/Preview.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "App",
  components: {
    List,
    Preview,
  },
  mounted() {
    try {
      this.$store.commit("pushAllItems", [
        {
          id: uuidv4(),
          name: "Task 1",
          details:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis dolor at nisl ultricies condimentum. Curabitur eget condimentum enim, a eleifend odio.",
          selected: false,
          items: [],
          edit: false,
        },
        {
          id: uuidv4(),
          name: "Task 2",
          details:
            "Ut id urna sollicitudin, ornare mauris eu, blandit arcu. Vestibulum pharetra ligula ut bibendum accumsan",
          selected: false,
          items: [],
          edit: false,
        },
        {
          id: uuidv4(),
          name: "Task 3",
          details:
            "Aliquam nulla sapien, posuere in erat sit amet, aliquet ullamcorper diam. Nam imperdiet finibus metus, vel molestie nibh dignissim nec.",
          selected: false,
          items: [],
          edit: false,
        },
      ]);
    } catch (e) {
      //catch errors
    }
  },
};
</script>
<style>
#app {
  margin-top: 60px;
}

.content {
  display: flex;
  justify-content: center;
  text-align: left;
}
</style>
