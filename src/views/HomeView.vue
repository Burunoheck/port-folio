<template>
  <v-app id="pagi">
    <v-container>
      <v-app-bar
        style="color: blueviolet"
        class="transparent"
        app
        elevation="3"
      >
        <v-list-item>
          <h1>Portfólio</h1>
        </v-list-item>
        <v-list-item-group class="menu d-flex">
          <v-divider vertical></v-divider>
          <v-list-item link :to="{ path: '/treinos' }">
            <v-btn id="clicar"> Principal </v-btn>
          </v-list-item>
          <v-divider vertical></v-divider>
          <v-list-item link :to="{ path: '/treinos' }">
            <v-btn id="clicar"> Biografia </v-btn>
          </v-list-item>
          <v-divider vertical></v-divider>
          <v-list-item link :to="{ path: '/treinos' }">
            <v-btn id="clicar"> Portifólio </v-btn>
          </v-list-item>
          <v-divider vertical></v-divider>
          <v-list-item link :to="{ path: '/treinos' }">
            <v-btn id="clicar"> Contato </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-app-bar>
    </v-container>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style>
#clicar {
  background-color: transparent;
}
#pagi {
  background: linear-gradient(
    90deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );
}
</style>
