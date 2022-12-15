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
        <v-container>
          <v-sheet class="mx-auto" elevation="8" max-width="80vh" style="background-color:transparent">
            <v-slide-group
              class="pa-4"
              center-active
              show-arrows
            >
              <v-slide-item
                v-for="n in 5"
                :key="n"
              >
                <v-card
                  hover
                  class="ma-4"
                  height="200"
                  width="100"
                  style="background-color:darkslategray"
                  v-text="aaa"
                >
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
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

<style></style>
