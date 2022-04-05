<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-left="breakPoint ? '290px' : '240px'"
    nudge-bottom="20px"
    :nudge-width="breakPoint ? 250 : 200"
    tile
    :transition="breakPoint ? 'slide-x-reverse-transition' : 'fab-transition'"
    :origin="breakPoint ? '' : 'top right'"
    dark
  >
    <template v-slot:activator="{ on, attrs }">
      <v-fab-transition>
        <v-btn
          welcome-tour-step="2"
          color="#222a42"
          fab
          dark
          small
          absolute
          bottom
          right
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-cog-outline</v-icon>
        </v-btn>
      </v-fab-transition>
    </template>

    <v-card v-if="!breakPoint" tile>
      <v-list class="menuColor">
        <v-list-item>
          <v-list-item-title class="text-center">
            Background Color
          </v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-row justify="center">
            <v-col cols="2" v-for="(color, i) in colors" :key="i">
              <v-btn
                elevation="0"
                fab
                width="20"
                height="20"
                :color="color"
                :class="currentSelectedColour(i)"
                @click="updateColorIndex(i)"
              />
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item>
          <v-col>
            <v-row justify="center">
              <v-switch
                v-model="theme"
                :color="themeColor"
                @change="updateThemeColour"
                :append-icon="switchIcon"
              />
            </v-row>
          </v-col>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card v-else>
      <v-list class="menuColor">
        <v-list-item>
          <v-row justify="center" align="center" dense>
            <v-col cols="1" v-for="(color, i) in colors" :key="i">
              <v-btn
                elevation="0"
                fab
                width="20"
                height="20"
                :color="color"
                :class="currentSelectedColour(i)"
                @click="updateColorIndex(i)"
              />
            </v-col>
            <v-spacer />
            <v-col cols="4">
              <v-switch
                v-model="theme"
                :color="themeColor"
                @change="updateThemeColour"
                :append-icon="switchIcon"
              />
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SnackWichMaker from "/Mixins/SnackwichMaker";
import ThemeChanger from "/Mixins/ThemeChanger";

export default {
  name: "MenuSettings",
  mixins: [SnackWichMaker, ThemeChanger],
  computed: {
    ...mapState({
      themeColor: (state) => state.Stores.Theme.themeColor,
      colors: (state) => state.Stores.Theme.colors,
    }),
    breakPoint() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    switchIcon() {
      return this.theme
        ? "mdi-moon-waxing-crescent"
        : "mdi-white-balance-sunny";
    },
  },
  data() {
    return {
      menu: false,
      theme: false,
    };
  },
  watch: {
    darkTheme: {
      handler() {
        this.theme = this.darkTheme;
      },
    },
  },
  methods: {
    ...mapActions({
      setThemeColour: "Stores/Theme/setThemeColour",
    }),
    updateColorIndex(index) {
      this.setThemeColour(this.colors[index]);
    },
    currentSelectedColour(index) {
      return index === this.colors.indexOf(this.themeColor)
        ? "outline"
        : "outlineColor";
    },
    updateThemeColour() {
      try {
        this.toggleDark();
      } catch (e) {
        this.newSnack(e);
      }
    },
  },
};
</script>

<style scoped>
.outline {
  border: 2px solid white !important;
}

.outlineColor {
  border: 2px solid grey !important;
}

.menuColor {
  color: #696969;
  background: linear-gradient(#222a42, #1d253b);
}
</style>
