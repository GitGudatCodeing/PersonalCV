<template>
  <div>
    <v-tour name="explanatoryTour" :steps="steps" :callbacks="callbacks" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Vue from "Vue";

export default {
  name: "TourPage",
  props: {
    steps: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState({
      previousUser: (state) => state.Stores.Theme.previousUser,
    }),
  },
  data() {
    return {
      overlay: false,
      shouldStartTour: false,
      callbacks: {
        onFinish: this.myCustomFinishCallBack,
        onSkip: this.myCustomSkipCallBack,
      },
    };
  },
  watch: {
    previousUser: {
      handler() {
        this.shouldStartTour = this.previousUser;
      },
    },
  },
  async mounted() {
    await this.fetchFromLocalStorage();
    Vue.nextTick(() => {
      if (!this.shouldStartTour) {
        this.$tours.explanatoryTour.start();
        this.setPreviousUser(true);
      }
    });
  },
  methods: {
    ...mapActions({
      setPreviousUser: "Stores/Theme/setPreviousUser",
      fetchFromLocalStorage: "Stores/Theme/fetchFromLocalStorage",
    }),
    myCustomFinishCallBack() {
      this.setPreviousUser(true);
    },
    myCustomSkipCallBack() {
      this.setPreviousUser(true);
    },
  },
};
</script>

<style scoped></style>
