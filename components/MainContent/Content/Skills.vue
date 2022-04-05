<template>
  <content-core :title="title" :mdCol="4">
    <template #content>
      <v-col cols="12">
        <v-row justify="center">
          <v-expansion-panels multiple tile dark>
            <v-expansion-panel v-for="(item, i) in items" :key="i">
              <v-expansion-panel-header
                ripple
                :class="`${themeColour} font-weight-bold`"
              >
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content
                v-for="(content, i) in item.content"
                :key="i"
              >
                {{ content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-col>
    </template>
  </content-core>
</template>

<script>
import ContentCore from "../ContentCore";
import { mapState } from "vuex";
export default {
  name: "SkillsContent",
  layout: "primary",
  components: { ContentCore },
  computed: {
    ...mapState({
      themeColour: (state) => state.Stores.Theme.themeColor,
    }),
  },
  data() {
    return {
      title: "Skills",
      items: {
        Languages: {
          title: "Code Languages",
          content: [
            "C#",
            "Angularjs",
            "Javascript",
            "SQL",
            "Vue.JS",
            "HTML5/CSS3",
          ],
        },
        FrameWorks: {
          title: "FrameWorks",
          content: [".Net", ".Core"],
        },
        Tools: {
          title: "Tools",
          content: [
            "DataGrip",
            "SSMS",
            "WebStorm",
            "Visual Studio",
            "Powershell",
          ],
        },
        VersionControl: {
          title: "Version Control",
          content: ["Sublime Merge", "Git"],
        },
      },
    };
  },
};
</script>

<style scoped></style>
