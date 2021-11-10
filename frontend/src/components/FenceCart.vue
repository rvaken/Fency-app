<template>
  <section class="fence-cart">
    <div class="content">
      <div class="header-button">
        <font-awesome-icon
          class="header-button__icon"
          v-for="icon in icons"
          :key="icon.id"
          :icon="icon.el"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FenceCart",

  components: {},

  data() {
    return {
      icons: [
        {
          id: 1,
          el: "shopping-basket",
        },
      ],
    };
  },
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
    display: flex;
    align-items: center;
    padding: 50px;

    .header-button {
      transition: 0.3s;
      background-color: greenyellow;
      @include shadow();

      border-radius: 50%;
      padding: 50px;
      display: flex;
      justify-content: center;
      align-items: ce;
      &__icon {
        height: 40px;
        width: 40px;
        color: $green;
      }

      &:hover {
        transform: scale(1.1);
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
}
</style>
