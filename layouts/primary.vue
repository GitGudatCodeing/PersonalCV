<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      app
      clipped
      :color="themeColor"
      dark
    >
      <v-list welcome-tour-step="3">
        <v-divider />
        <collapse-item />
        <v-divider />
        <home-item />
        <v-divider />
        <about-page />
        <v-divider />
        <experience-item />
        <v-divider />
        <skills-item />
        <v-divider />
      </v-list>
    </v-navigation-drawer>
    <v-app-bar dark clipped-left fixed app :color="themeColor">
      <v-col class="grow" v-if="$vuetify.breakpoint.smAndDown">
        <v-btn icon large @click.stop="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-col>
      <menu-settings />
      <span v-text="title" class="white--text grow" welcome-tour-step="1" />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-tour name="explanatoryTour" :steps="steps" :callbacks="callbacks" />
  </v-app>
</template>

<script>
import {mapActions, mapState} from "vuex";
import CollapseItem from "../components/SideBar/Content/Collapse";
import AboutPage from "../components/SideBar/Content/About";
import ExperienceItem from "../components/SideBar/Content/Experience";
import SkillsItem from "../components/SideBar/Content/Skills";
import HomeItem from "../components/SideBar/Content/Home";
import MenuSettings from "../components/Layout/Settings/Menu";
import ThemeChanger from "/Mixins/ThemeChanger";
import Vue from "vue";

export default {
  name: "PrimaryLayout",
  mixins: [ThemeChanger],
  components: {
    MenuSettings,
    HomeItem,
    SkillsItem,
    ExperienceItem,
    AboutPage,
    CollapseItem,
  },
  computed: {
    ...mapState({
      miniVariant: (state) => state.Stores.Layout.miniVariant,
      expand: (state) => state.Stores.Layout.expand,
      themeColor: (state) => state.Stores.Theme.themeColor,
      colors: (state) => state.Stores.Theme.colors,
      previousUser: (state) => state.Stores.Theme.previousUser,
    }),
    title() {
      return !this.$vuetify.breakpoint.smAndDown
        ? "Jason Donovan de Klerk - Full Stack Web Developer"
        : "JD de Klerk";
    },
  },
  async mounted() {
    await this.setLocalTheme();
    Vue.nextTick(() => {
      if (!this.previousUser) {
        this.$tours.explanatoryTour.start();
        this.setPreviousUser(true);
      }
    });
  },
  data() {
    return {
      showMenu: false,
      drawer: this.$vuetify.breakpoint.lgAndUp,
      theme: false,
      steps: [
        {
          target: '[welcome-tour-step="1"]',
          header: {
            title: "Getting Started",
          },
          content:
            "Hello, this is your guide on how to use the system. Please continue if you would like to experience the tour otherwise just skip.",
        },
        {
          target: '[welcome-tour-step="2"]',
          content:
            "Click on the cog wheel will give you some options to update the theme of the system.",
        },
        {
          target: '[welcome-tour-step="3"]',
          content: "This will act as you navigation between pages.",
          before: () =>
            new Promise((resolve) => {
              resolve((this.drawer = true));
            }),
        },
      ],
      callbacks: {
        onFinish: this.myCustomFinishCallBack,
        onSkip: this.myCustomSkipCallBack,
      },
    };
  },
  methods: {
    ...mapActions({
      setPreviousUser: "Stores/Theme/setPreviousUser",
    }),
    updateMenu() {
      this.showMenu = !this.showMenu;
    },
    myCustomFinishCallBack() {
      this.setPreviousUser(true);
    },
    myCustomSkipCallBack() {
      this.setPreviousUser(true);
    },
  },
};
</script>

<style scoped>
.banner {
  position: absolute;
}
</style>
