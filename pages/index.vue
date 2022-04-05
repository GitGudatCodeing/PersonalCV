<template>
  <Transition name="fade">
    <v-container class="pa-4 text-center" v-if="show">
      <v-row class="fill-height" align="center" justify="center">
        <template v-for="(item, i) in items">
          <v-col :key="i" cols="12" md="6">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                tile
                v-ripple
                @click="moveTo(item.title)"
              >
                <v-img :src="item.img" height="300px">
                  <v-card-title :class="`text-h6 ${item.color}--text`">
                    <v-row
                      class="fill-height flex-column"
                      justify="space-between"
                    >
                      <span class="subheading text-left">
                        {{ item.title }}
                      </span>
                    </v-row>
                  </v-card-title>
                </v-img>
              </v-card>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </Transition>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      show: false,
      items: [
        {
          title: "About",
          img: "https://t4.ftcdn.net/jpg/01/33/81/63/240_F_133816396_p9R0khEqzQ3wUD6hZQ9z3hJ6EMWD63ll.jpg",
          color: "black",
        },
        {
          title: "Experience",
          img: "https://t4.ftcdn.net/jpg/00/85/59/11/240_F_85591170_Rp0fVWXIPBygpGKat9VAjRMhoBFuy6bG.jpg",
          color: "white",
        },
        {
          title: "Skills",
          img: "https://t4.ftcdn.net/jpg/02/25/08/49/240_F_225084966_hhswkk9GgkAKcr2p1n69aaiI1jETbZO9.jpg",
          color: "white",
        },
      ],
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
  created() {
    setTimeout(this.setTest, 500);
  },
  methods: {
    moveTo(path) {
      this.$router.push(`/${path}/`);
    },
    setTest() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
