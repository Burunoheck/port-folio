<template>
  <v-app>
    <v-app-bar style="color: blueviolet" class="transparent" app elevation="3">
      <v-list-item-group class="menu d-flex">
        <v-list-item>
          <h1>Portfólio</h1>
        </v-list-item>
        <v-list-item flat>
          <v-switch
            onclick="YoFunt()"
            v-model="$vuetify.theme.dark"
            inset
            persistent-hint
          ></v-switch>
        </v-list-item>
      </v-list-item-group>
      <v-list-item-group
        class="menu d-flex"
        style="
          justify-content: flex-end;
          align-items: flex-end;
          padding-left: 40vw;
        "
      >
        <v-divider vertical></v-divider>
        <v-list-item link :to="{ path: '/' }">
          <v-btn elevation="3" id="clicar"> Principal </v-btn>
        </v-list-item>
        <v-divider vertical></v-divider>
        <v-list-item link :to="{ path: '/bio' }">
          <v-btn elevation="3" id="clicar"> Biografia </v-btn>
        </v-list-item>
        <v-divider vertical></v-divider>
        <v-list-item link :to="{ path: '/portfolio' }">
          <v-btn elevation="3" id="clicar"> Portifólio </v-btn>
        </v-list-item>
        <v-divider vertical></v-divider>
        <v-list-item link :to="{ path: '/contato' }">
          <v-btn elevation="3" id="clicar"> Contato </v-btn>
        </v-list-item>
      </v-list-item-group>
    </v-app-bar>
    <v-container fluid id="pagi">
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
export default {
  YoFunt() {
    var element = document.pagi;
    element.classList.toggle("dark-mode");
  },
};
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
.dark-mode {
  background-color: indigo;
}
</style>
