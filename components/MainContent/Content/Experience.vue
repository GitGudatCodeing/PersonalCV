<template>
  <content-core :title="title" :mdCol="8">
    <template #content>
      <v-timeline :dense="breakPoint" data-v-step="1">
        <v-timeline-item
          v-for="(item, i) in items"
          :key="i"
          :color="themeColor === 'darkgrey' ? 'white' : themeColor"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${themeColor}--text`"
              v-text="item.year"
            />
          </template>
          <v-expansion-panels multiple tile dark>
            <v-expansion-panel>
              <v-expansion-panel-header
                ripple
                :class="`${themeColor} font-weight-bold`"
              >
                {{ item.title }}
              </v-expansion-panel-header>
              <v-expansion-panel-content
                :class="`pt-4 text-left ${themeColor}--text font-weight-bold`"
              >
                @{{ item.company }}
              </v-expansion-panel-content>
              <v-expansion-panel-content
                v-for="(content, i) in item.content"
                :key="i"
                class="text-left"
              >
                {{ content }}
              </v-expansion-panel-content>
              <v-expansion-panel-content
                :class="`text-left ${themeColor}--text font-weight-bold`"
              >
                {{ item.ref }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-timeline-item>
      </v-timeline>
    </template>
  </content-core>
</template>

<script>
import ContentCore from "../ContentCore";
import { mapState } from "vuex";
export default {
  name: "ExperienceContent",
  layout: "primary",
  components: { ContentCore },
  computed: {
    ...mapState({
      themeColor: (state) => state.Stores.Theme.themeColor,
    }),
    breakPoint() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  data() {
    return {
      title: "Experience",
      items: [
        {
          title: "Full Stack Developer",
          year: "Current",
          content: [
            "Remained up-to-date with industry-standard technologies & mentored 2 intern developers",
            "Wrote structured, tested, readable, & maintainable code following the SOLID Principles",
            "Helped maintain code quality, organization, & atomization for the monolith system",
            "Developed on the monolith application & components using Angularjs, html5 & .Net C#",
            "Implemented a Micro Services using Nuxt.js & .Core C#, to break up the monolith system(Still currently under development)",
          ],
          company: "Bsure Africa Insurance Brokers",
          ref: "Dylan ODougherty - 0323213450",
        },
        {
          title: "Jr Full Stack Developer",
          year: "08/2019 to 12/2021",
          content: [
            "Designed & built features/components using Angularjs, html5 & .Net C#",
            "Ensured the performance, quality, and responsiveness of the Insurance system and reporting system",
            "Identified and corrected 10+ bottlenecks and 100+ bug fixes which reduced support",
            "Participated in weekly code reviews / code tests to ensure code quality",
            "Presented ideas on how to improve performance and quality",
          ],
          company: "Bsure Africa Insurance Brokers",
          ref: "Dylan ODougherty - 0323213450",
        },
        {
          title: "Coach",
          year: "08/2018 to 04/2020",
          content: [
            "Educate individuals of the main functions of League of legends as well as sportsmanship and team coordination. (This Job was worked alongside with CCC AutoEngineering after hours)",
          ],
          company: "NAG Academy",
          ref: "Johan van Brendan - 0824698207",
        },
        {
          title: "Business Analyst / Mechanist",
          year: "01/2016 to 09/2019",
          content: [
            "Developed a desktop app to track stock within the company",
            "Cylinder head overhauling",
            "Pressure testing",
            "Line boring of cylinder heads and blocks",
            "Reboring blocks",
            "Re-Sleeving blocks",
            "Skimming blocks",
          ],
          company: "CCC Auto Engineering",
          ref: "Douw de Klerk - 0825596819",
        },
        {
          title: "Barman / Waiter",
          year: "2013 - 2015",
          content: [
            "Interact with customers to sell a product/brand in this case being food of the restaurant",
          ],
          company: "Labella",
          ref: "Charlene - 0733581545",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
