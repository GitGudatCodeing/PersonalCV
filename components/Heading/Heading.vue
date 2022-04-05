<template>
  <v-col cols="12">
    <v-card color="transparent" tile flat>
      <v-card-title class="justify-center pa-6">
        <span class="text-h2 font-italic">{{ title }}</span>
      </v-card-title>
      <v-card-subtitle class="text-center" v-if="subtitle">
        <span class="subtitle-Text">{{ subtitle }}</span>
      </v-card-subtitle>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: "HeadingText",
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
