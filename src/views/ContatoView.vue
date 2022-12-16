<template>
  <v-app app>
    <v-main id="pagi">
      <router-view></router-view>
      <v-container fluid>
        <v-container class="d-flex justify-center text-center" fluid>
          <v-col md="4">
            <v-container class="transparent">
              <v-row>
                <v-col>
                  <h1 class="h1">Contato</h1>
                </v-col>
              </v-row>
              <v-row></v-row>
              <v-divider></v-divider>
              <v-divider></v-divider>
              <v-divider class="mb-8"></v-divider>
              <v-row
                elevation="3"
                class="mx-auto"
                style="
                  align-items: center;
                  justify-content: center;
                  display: flex;
                "
              >
                <v-form>
                  <v-col>
                    <v-row>
                      <v-text-field
                        outlined
                        style="max-width: 45%"
                        label="Nome"
                        placeholder="Nome"
                      ></v-text-field>
                      <v-spacer></v-spacer>
                      <v-text-field
                        style="max-width: 45%"
                        outlined
                        label="Sobrenome"
                        placeholder="Sobrenome"
                      ></v-text-field>
                    </v-row>
                  </v-col>
                  <v-col>
                    <v-row>
                      <v-text-field
                        outlined
                        style="max-width: 45%"
                        label="E-mail"
                        placeholder="E-mail"
                      ></v-text-field>
                      <v-spacer></v-spacer>
                      <v-text-field
                        style="max-width: 45%"
                        outlined
                        label="Contato"
                        placeholder="Contato"
                      ></v-text-field>
                    </v-row>
                  </v-col>
                  <v-col
                    style="
                      justify-content: center;
                      display: flex;
                      align-items: center;
                    "
                  >
                    <v-text-field
                      style="max-width: 50%"
                      outlined
                      label="Caixa em branco"
                      placeholder="Caixa em branco"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col>
                    <v-item-group
                      style="
                        justify-content: center;
                        align-items: center;
                        display: flex;
                      "
                    >
                      <template v-for="(task, i) in tasks">
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
                                  :class="
                                    (task.done && 'purple--text') || '--text'
                                  "
                                  v-text="task.text"
                                ></div>
                              </template>
                            </v-checkbox>
                          </v-list-item>
                        </template>
                      </template>
                    </v-item-group>
                  </v-col>
                  <v-col>
                    <v-btn height="50px">Aplicar</v-btn>
                  </v-col>
                </v-form>
              </v-row>
            </v-container>
          </v-col>
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
