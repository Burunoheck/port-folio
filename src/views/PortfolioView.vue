<template>
  <v-app app>
    <v-main id="pagi">
      <router-view></router-view>
      <v-container fluid>
        <v-container class="d-flex justify-center">
          <v-card elevation="8" style="background-color: mediumslateblue">
            <v-list-item-title
              style="
                justify-content: center;
                align-items: center;
                display: flex;
              "
            >
              <h2>Utilizados</h2>
            </v-list-item-title>
            <v-item-group
              style="
                margin: 4vh;
                justify-content: center;
                align-items: center;
                display: flex;
              "
            >
              <template v-for="(task, i) in tasks">
                <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>
                <template>
                  <v-list-item :key="`${i}-${task.text}`">
                    <v-checkbox
                      style="
                        background-color: hsl(186, 80%, 93%, 0.2);
                        border-radius: 15%;
                        padding-left: 1vh;
                        padding-right: 1vh;
                        padding-top: 1vh;
                      "
                      v-model="task.done"
                      :color="(task.done && 'purple') || 'white'"
                    >
                      <template v-slot:label>
                        <div
                          :class="(task.done && 'purple--text') || '--text'"
                          v-text="task.text"
                        ></div>
                      </template>
                    </v-checkbox>
                  </v-list-item>
                </template>
              </template>
            </v-item-group>
          </v-card>
        </v-container>
        <template>
          <v-container class="pa-4 text-center">
            <v-slide-group>
              <v-slide-item>
                <v-row style="align: center; justify:center">
                  <template v-for="(item, i) in items">
                    <v-col :key="i" cols="12" md="4">
                      <v-hover v-slot="{ hover }">
                        <v-card style="background-color: purple">
                          <v-img
                            :src="item.img"
                            height="225px"
                            :elevation="hover ? 12 : 2"
                            :class="{ 'on-hover': hover }"
                            id="opacidade"
                          >
                            <v-card-title class="text-h6 black--text">
                              <v-row
                                class="fill-height flex-column"
                                justify="space-between"
                              >
                                <p class="mt-4 subheading text-left">
                                  {{ item.title }}
                                </p>

                                <div>
                                  <p
                                    class="ma-0 text-body-1 font-weight-bold font-italic text-left"
                                  >
                                    {{ item.text }}
                                  </p>
                                  <p
                                    class="text-caption font-weight-medium font-italic text-left"
                                  >
                                    {{ item.subtext }}
                                  </p>
                                </div>
                              </v-row>
                            </v-card-title>
                          </v-img>
                        </v-card>
                      </v-hover>
                    </v-col>
                  </template>
                </v-row>
              </v-slide-item>
            </v-slide-group>
          </v-container>
        </template>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "Imagem bonita uaua",
        text: `frase que motivaria qualquer um`,
        subtext: "Solução pra felicidade infinita 2.0",
        img: "https://picsum.photos/id/12/500/300",
      },
      {
        title: "Parece que tá funcionando :)",
        text: "Foto bonita né",
        subtext: "Uma frase fofinha combinaria aqui",
        img: "https://picsum.photos/id/14/500/300",
      },
      {
        title: "Oi sor, tudo certo?",
        text: "Dialogo muito legal aqui *imagine*",
        subtext:
          "Muito legal essa preda.    *ps: alterei a imagem mas era uma de preda",
        img: "https://picsum.photos/id/500/300",
      },
    ],
    tasks: [
      {
        done: false,
        text: "Html",
      },
      {
        done: false,
        text: "Css",
      },
      {
        done: false,
        text: "VueJS",
      },
      {
        model: null,
      },
    ],
  }),

  computed: {
    completedTasks() {
      return this.tasks.filter((task) => task.done).length;
    },
  },
};
</script>

<style scoped>
#opacidade:not(.on-hover) {
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}
</style>
