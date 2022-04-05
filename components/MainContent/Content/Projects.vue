<template>
  <content-core :title="title">
    <template #content>
      <span>Content to still be added.</span>
    </template>
  </content-core>
</template>

<script>
import ContentCore from "../ContentCore";
export default {
  name: "ProjectsContent",
  layout: "primary",
  components: { ContentCore },
  data() {
    return {
      title: "Projects",
    };
  },
};
</script>

<style scoped></style>
