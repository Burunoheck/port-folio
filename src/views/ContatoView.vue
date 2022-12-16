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
                  <h1 class="h1">Cadastro</h1>
                </v-col>
              </v-row>
              <v-row></v-row>
              <v-divider></v-divider>
              <v-divider></v-divider>
              <v-divider class="mb-8"></v-divider>
              <v-row elevation="3" class="mx-auto">
                <v-col>
                  <v-form>
                    <v-text-field
                      outlined
                      label="Nome de Usuário"
                      placeholder="Nome de Usuário"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      label="Nome"
                      placeholder="Nome"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      label="Sobrenome"
                      placeholder="Sobrenome"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      label="E-mail"
                      placeholder="usuario@gmail.com"
                    ></v-text-field>
                    <v-text-field outlined label="Senha" placeholder="Senha">
                    </v-text-field>
                    <v-divider></v-divider>
                    <v-divider></v-divider>
                    <v-divider class="mb-8"></v-divider>
                    <v-btn class="mb-4" height="50px">Cadastrar</v-btn>
                  </v-form>
                </v-col>
              </v-row>
              <v-row
                style="
                  justify-content: center;
                  align-items: center;
                  display: flex;
                "
              >
                <v-col>
                  <v-row>
                    <v-card
                      style="
                        max-width: 33%;
                        max-height: 33%;
                      "
                    >
                      <v-text>
                        vitae nulla varius consectetur lacus massa, eu fusce
                        sagittis eu nulla accumsan, varius habitant volutpat
                        ante.
                      </v-text>
                    </v-card>
                    <v-card
                      style="
                      max-width: 32%;
                      max-height: 32%;
                      "
                    >
                      <v-text>
                        Quis habitant sagittis vulputate molestie cubilia
                        consectetur aliquam proin eu iaculis ut, accumsan fames
                        velit eget aliquam himenaeos facilisis erat leo
                        curabitur, blandit fusce mattis laoreet luctus cubilia
                        hac auctor elit accumsan.
                      </v-text>
                    </v-card>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style></style>
