<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  YoFunt() {
    var element = document.pagi;
    element.classList.toggle("dark-mode");
  },
}
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