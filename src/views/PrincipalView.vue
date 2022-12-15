<template>
  <v-app app>
    <v-main id="pagi">
      <v-container fluid>
        <router-view></router-view>
        <v-container>
          <v-row>
            <v-col>
              <div class="imagem"></div>
            </v-col>
            <v-col style="justify-content:center; align-items:center; display:flex;">
              <h1>Bruno e Baum</h1>
            </v-col>
            <v-col>
              <div class="imag"></div>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
.imagem{
  height: 50vh;
  width: 50vh;
  display: flex;
  background-image: url(https://i.pinimg.com/564x/bf/ea/71/bfea7133e1e431edab3e38639d0fa5f6.jpg);
  border-radius: 50% 50% 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
.imag{
  height: 50vh;
  width: 50vh;
  display: flex;
  background-image: url(../assets/aran.webp);
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
