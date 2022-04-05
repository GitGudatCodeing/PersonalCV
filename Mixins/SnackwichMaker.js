import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      createSnack: "Stores/Snacks/newSnack",
    }),
    async newSnack(e) {
      const message = {
        error: "error",
        message: e.message,
      };
      this.createSnack(message);
    },
  },
};
