<template>
  <content-core :title="title" :show-title="true">
    <template #title>
      <v-avatar
        :color="themeColour === 'darkgrey' ? 'white' : themeColour"
        size="136"
      >
        <v-img
          src="https://scontent.fjnb10-1.fna.fbcdn.net/v/t1.6435-9/61921251_2504736612871452_6332749048239357952_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeE4AoyKdTZdEOnCdLNMM3q6GS4bq1YIvS4ZLhurVgi9LkTOrdsC_MAWkvMUPxjYOz55O1QUCo8tQpvSm8A8TFqf&_nc_ohc=F_9BBLWfYaUAX8IjhEU&_nc_ht=scontent.fjnb10-1.fna&oh=00_AT8Eo8560hIZYx88cwbpOYezewfjORAfdyE2bkVfsEv44w&oe=626947F4"
          max-height="128"
          max-width="128"
        />
      </v-avatar>
    </template>
    <template #content>
      <v-col cols="12">
        <v-row justify="center">
          <p class="font-weight-bold">
            After more than {{ developerForYears }} years as a Software
            Developer, I've realised that working with people is so much more
            important than just writing code. What I have discovered is that
            supporting peoples growth, challenging them with constructive
            feedback helps one further themselves.
          </p>
        </v-row>
        <br />
        <v-row justify="center">
          <span class="font-weight-bold">
            I am a firm believer in being a team player and agile in preference
            to being "A"gile wherein they comply with a particular framework to
            the letter as it worked at every other corporation. Teams want to
            discover what works for them and constantly iterate on it. Putting
            in approaches that matters to the team may be pivotal to supporting
            what teams decide they are going to work on next.
          </span>
        </v-row>
      </v-col>
    </template>
    <template #actions>
      <v-col cols="12">
        <v-row justify="center">
          <v-btn tile text large @click="goToLink(github)">
            <v-icon :color="themeColour">
              {{ "mdi-github" }}
            </v-icon>
            <span>GitHub</span>
          </v-btn>
          <v-btn tile text large @click="goToLink(linkden)">
            <span>L</span>
            <v-icon :color="themeColour">
              {{ "mdi-linkedin" }}
            </v-icon>
            <span>kdin</span>
          </v-btn>
          <v-btn tile text large @click="goToLink(facebook)">
            <v-icon :color="themeColour">
              {{ "mdi-facebook" }}
            </v-icon>
            <span>aceBook</span>
          </v-btn>
        </v-row>
        <v-row justify="center">
          <v-btn
            text
            tile
            large
            @click="
              goToLink(
                'https://drive.google.com/file/d/1_uLNLpHvKxZgdsV70vUpq4zLu7LIXPeD/view?usp=sharing'
              )
            "
          >
            <v-icon :color="themeColour">{{ "mdi-google-drive" }}</v-icon>
            CV
          </v-btn>
        </v-row>
      </v-col>
    </template>
  </content-core>
</template>

<script>
import ContentCore from "../ContentCore";
import { mapState } from "vuex";
import moment from "moment";
export default {
  name: "AboutContent",
  components: { ContentCore },
  computed: {
    ...mapState({
      themeColour: (state) => state.Stores.Theme.themeColor,
    }),
    developerForYears() {
      return moment().diff(moment("2019-10-08"), "year");
    },
  },
  data() {
    return {
      title: "About",
      facebook: "https://www.facebook.com/Donovanhjd",
      linkden: "https://www.linkedin.com/in/donovan-de-klerk-01a38139/",
      github: "https://github.com/GitGudatCodeing",
      startingYear: "2019-10-08",
    };
  },
  methods: {
    goToLink(URL) {
      window.open(URL, "_blank");
    },
  },
};
</script>

<style scoped></style>
