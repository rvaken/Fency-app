<template>
  <section class="modal">
    <div class="content">
      <h2 class="content__title">Suggestions</h2>
      <div class="content__text">
        <p>You should need &nbsp;</p>
        <span>{{ poles }}</span>
        <p>&nbsp;poles</p>
      </div>
      <div class="buttons">
        <div class="cancel-button"><p>cancel</p></div>
        <div @click="orderPole" class="order-button"><p>Buy!</p></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Extramenu",

  props: {
    poles: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    orderPole() {
      if (this.poles > 0) {
        this.$store.dispatch("addOrder", {
          // id: this.orderId,
          material: "Pole",
          price: 30.0 * this.poles,
          amount: this.poles,
        });
      }
    },
  },

  // computed: {
  //   poles() {
  //     return this.$store.getters.getPoles;
  //   },
  // },
};
</script>

<style lang="scss">
.modal {
  background-color: #fff;
  border-radius: 5px;
  padding: 15px 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  @include shadow();
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 0;
    margin: 0;

    &__title {
      padding: 0;
      margin: 0;
      font-size: 20px;
      background-color: $dark;
      padding: 5px 8px;
      color: #fff;
      border-radius: 4px;
    }

    &__text {
      display: flex;
      align-items: center;
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .cancel-button {
        border-radius: 40px;
        background-color: $red;
        transition: 0.3s;
        p {
          text-align: center;
          padding: 2px 10px;
          color: #fff;
          font-family: $main-font;
          font-size: 20px;
        }

        &:hover {
          cursor: pointer;
          @include shadow;
          transform: scale(1.05);
          transition: 0.3s;
        }
      }

      .order-button {
        border-radius: 40px;
        background-color: $green;
        transition: 0.3s;
        p {
          text-align: center;
          padding: 2px 10px;
          color: #fff;
          font-family: $main-font;
          font-size: 20px;
        }

        &:hover {
          cursor: pointer;
          @include shadow;
          transform: scale(1.05);
          transition: 0.3s;
        }
      }
    }
  }
}
</style>
