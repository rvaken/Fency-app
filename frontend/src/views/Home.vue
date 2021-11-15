<template>
  <div class="home">
    <FenceCart class="cart" />

    <Map class="home-map" />
  </div>
</template>

<script>
// @ is an alias to /src

import Map from "../components/Map.vue";
import FenceCart from "../components/FenceCart.vue";

export default {
  name: "Home",
  components: { Map, FenceCart },

  computed: {},
};
</script>

<style lang="scss">
@import "@/assets/imports/variables.scss";

body {
  cursor: default;
}

.home {
  padding: 0;
  position: relative;

  .cart {
  }

  .materials {
  }

  .home-map {
    position: fixed;
    bottom: 0;
    right: 0;
  }
}
</style>
