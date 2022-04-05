import Vue from "vue";

export const state = () => ({
  drawer: true,
  miniVariant: true,
  expand: false,
});

export const mutations = {
  set(state, { field, value }) {
    Vue.set(state, field, value);
  },
};

export const getters = {};

export const actions = {
  setExpand({ commit }, bool) {
    commit("set", {
      field: "expand",
      value: bool,
    });
  },
  setMiniVariant({ commit }, bool) {
    commit("set", {
      field: "miniVariant",
      value: bool,
    });
  },
  setDrawer({ commit }, bool) {
    commit("set", {
      field: "drawer",
      value: bool,
    });
  },
};
