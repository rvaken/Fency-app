<template>
  <section class="fence-cart">
    <div class="content"></div>
  </section>
</template>

<script>
export default {
  name: "FenceCart",
  components: {},
};
</script>

<style lang="scss">
.fence-cart {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30%;
  background-color: $green;
  display: flex;
  flex-direction: row-reverse;

  .content {
  }
}
</style>
