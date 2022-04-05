<template>
  <v-app dark>
    <v-app-bar dark :clipped-left="clipped" fixed app :color="themeColor">
      <span v-text="title" class="white--text" />
    </v-app-bar>
    <v-main>
      <v-container fill-height fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import ThemeChanger from "/Mixins/ThemeChanger";
export default {
  name: "DefaultLayout",
  mixins: [ThemeChanger],
  computed: {
    ...mapState({
      miniVariant: (state) => state.Stores.Layout.miniVariant,
      themeColor: (state) => state.Stores.Theme.themeColor,
    }),
  },
  async mounted() {
    await this.setLocalTheme();
  },
  data() {
    return {
      clipped: true,
      title: "Jason Donovan de Klerk - Full Stack Web Developer",
    };
  },
};
</script>

<style scoped></style>
