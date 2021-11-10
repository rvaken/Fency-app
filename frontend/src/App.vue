<template>
  <div id="app">
    <GridDebug />
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import GridDebug from "./components/GridDebug.vue";

export default {
  name: "App",
  components: {
    Navbar,
    GridDebug,
  },
};
</script>

<style lang="scss">
@import "@/assets/imports/variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: $max-width;
  margin: 0 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
