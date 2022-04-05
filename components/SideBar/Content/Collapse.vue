<template>
  <v-tooltip bottom :disabled="!miniVariant">
    <template v-slot:activator="{ on }">
      <v-list-item v-on="on" @click="updateMiniVariant">
        <v-list-item-action>
          <v-icon>{{ updateMiniVariantIcon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="updateMiniVariantText" />
        </v-list-item-content>
      </v-list-item>
    </template>
    <span>{{ updateMiniVariantText }}</span>
  </v-tooltip>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CollapseItem",
  computed: {
    ...mapState({
      miniVariant: (state) => state.Stores.Layout.miniVariant,
    }),
    updateMiniVariantIcon() {
      return `mdi-chevron-${this.miniVariant ? "right" : "left"}`;
    },
    updateMiniVariantText() {
      return this.miniVariant ? "Expand" : "Collapse";
    },
  },
  methods: {
    ...mapActions({
      setMiniVariant: "Stores/Layout/setMiniVariant",
    }),
    updateMiniVariant() {
      this.setMiniVariant(!this.miniVariant);
    },
  },
};
</script>

<style scoped></style>
