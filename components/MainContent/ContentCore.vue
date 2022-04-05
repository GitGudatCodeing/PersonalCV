<template>
  <v-row justify="center">
    <heading-text :title="title" v-if="showHeading" />
    <v-col :cols="columns" :md="mdCol" :sm="smCol">
      <v-card tile :flat="flat" :color="color">
        <v-card-title v-if="showTitle" class="justify-center">
          <slot name="title" />
        </v-card-title>
        <v-card-text class="text-center">
          <slot name="content" />
        </v-card-text>
        <v-card-actions class="justify-center">
          <slot name="actions" />
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import HeadingText from "../Heading/Heading";
export default {
  name: "ContentCore",
  components: { HeadingText },
  props: {
    title: {
      type: String,
      required: true,
    },
    showHeading: {
      type: Boolean,
      default: true,
    },
    showTitle: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "transparent",
    },
    flat: {
      type: Boolean,
      default: true,
    },
    columns: {
      type: Number,
      default: 12,
    },
    mdCol: {
      type: Number,
      default: 6,
    },
    smCol: {
      type: Number,
      default: 10,
    },
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
