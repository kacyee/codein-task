<template>
  <div class="preview-box" style="width: 50vw; height: auto">
    {{
      content
        ? content
        : "Select a task from the left pane to preview the details"
    }}
  </div>
</template>
<script>
export default {
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  data() {
    return {
      content: null,
    };
  },
  watch: {
    items() {
      this.content = this.items.find((i) => i.selected)?.details;
    },
  },
};
</script>
<style>
.preview-box {
  padding: 1em 0.5em;
  border: 1px solid #ffffff;
}
</style>
