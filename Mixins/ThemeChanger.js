import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      darkTheme: (state) => state.Stores.Theme.darkTheme,
    }),
  },
  methods: {
    ...mapActions({
      toggleDarkTheme: "Stores/Theme/toggleDarkTheme",
      fetchFromLocalStorage: "Stores/Theme/fetchFromLocalStorage",
    }),
    async toggleDark() {
      await this.toggleDarkTheme();
      this.$vuetify.theme.dark = this.darkTheme;
    },
    async setLocalTheme() {
      await this.fetchFromLocalStorage();
      this.$vuetify.theme.dark = this.darkTheme;
    },
  },
};
