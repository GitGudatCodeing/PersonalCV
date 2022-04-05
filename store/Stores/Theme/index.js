import Vue from "Vue";

export const state = () => ({
  themeColor: "darkgrey",
  colors: ["darkgrey", "blue", "red", "green", "purple"],
  darkTheme: false,
  previousUser: false,
});

export const mutations = {
  set(state, { field, value }) {
    Vue.set(state, field, value);
  },
};

export const getters = {};

export const actions = {
  async setThemeColour({ commit, dispatch }, colour) {
    commit("set", { field: "themeColor", value: colour });
    await dispatch("saveToLocalStorage");
  },
  async setPreviousUser({ commit }, bool) {
    commit("set", { field: "previousUser", value: bool });
    localStorage.setItem("previous-User", bool);
  },
  async toggleDarkTheme({ state, commit, dispatch }) {
    const dark = state.darkTheme;
    await commit("set", { field: "darkTheme", value: !dark });
    await dispatch("saveToLocalStorage");
  },
  saveToLocalStorage({ state }) {
    if (localStorage) {
      localStorage.setItem("dark-mode", state.darkTheme);
      localStorage.setItem("theme-Colour", state.themeColor);
    }
  },
  async fetchFromLocalStorage({ commit }) {
    if (localStorage) {
      const darkTheme = localStorage.getItem("dark-mode") === "true";
      const themeColour = localStorage.getItem("theme-Colour");
      const user = localStorage.getItem("previous-User") === "true";

      if (themeColour)
        await commit("set", { field: "themeColor", value: themeColour });

      if (darkTheme)
        await commit("set", { field: "darkTheme", value: darkTheme });

      if (user) await commit("set", { field: "previousUser", value: user });
    }
  },
};
