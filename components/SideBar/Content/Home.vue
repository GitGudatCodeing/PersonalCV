<template>
  <v-tooltip bottom :disabled="!miniVariant">
    <template v-slot:activator="{ on }">
      <v-list-item v-on="on" @click="moveToPage('/')">
        <v-list-item-action>
          <v-icon>{{ "mdi-home" }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="title" />
        </v-list-item-content>
      </v-list-item>
    </template>
    <span>{{ title }}</span>
  </v-tooltip>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeItem",
  computed: {
    ...mapState({
      miniVariant: (state) => state.Stores.Layout.miniVariant,
    }),
  },
  data() {
    return {
      title: "Home",
    };
  },
  methods: {
    moveToPage(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped></style>
