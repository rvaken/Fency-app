<template>
  <div class="home">
    <Map class="home__map" />
  </div>
</template>

<script>
// @ is an alias to /src

import Map from "../components/Map.vue";

export default {
  name: "Home",
  components: { Map },
};
</script>

<style lang="scss">
@import "@/assets/imports/variables.scss";

.home {
  &__map {
    margin-top: 2rem;
  }
}
</style>
