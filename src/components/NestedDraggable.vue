<template>
  <draggable tag="ul" :list="items" class="dragArea" :group="{ name: 'g1' }">
    <li
      v-for="item in items"
      :key="item.id"
      :class="item.selected ? 'selected' : ''"
      @click="() => select(item)"
    >
      <div v-show="item.edit == false">
        <p class="box" @dblclick="item.edit = true">{{ item.name }}</p>
      </div>
      <input
        class="box"
        v-show="item.edit == true"
        v-model="item.name"
        v-on:blur="
          item.edit = false;
          $emit('update');
        "
        @keyup.enter="
          item.edit = false;
          $emit('update');
        "
      />
      <nested-draggable v-if="item.items" :items="item.items" />
    </li>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "nested-draggable",
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
  components: {
    draggable,
  },
  methods: {
    select(selectedItem) {
      if (
        this.$store.state.items.find((item) => item.name === selectedItem.name)
      ) {
        this.$store.state.items = this.$store.state.items.map((item) => {
          if (item.name === selectedItem.name) {
            item.selected = true;
          } else {
            item.selected = false;
          }
          return item;
        });
      }
      this.itemsLocal = this.$store.state.items;
    },
  },
};
</script>
<style scoped>
.dragArea {
  min-height: 10px;
}
::v-deep .box {
  border: 1px solid rgba(0, 2, 51, 0.125);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.10196078431372549);
  background: #ffffff;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 25px;
  border-radius: 1em;
  color: #000233;
  margin: 0.5em;
  white-space: nowrap;
  padding: 0 0.5em;
  cursor: pointer;
}
li > ul {
  margin-left: 10px;
}
</style>