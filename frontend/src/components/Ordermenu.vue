<template>
  <section class="order-menu">
    <div class="order-content">
      <h2 class="order-content__title">Order summary</h2>
      <Orderitem
        class="content-orderitem"
        v-for="order in orders"
        :key="order.id"
        :price="order.price.toFixed(2)"
        :material="order.material"
        :amount="order.amount"
      />
    </div>
  </section>
</template>

<script>
import Orderitem from "./Orderitem";

export default {
  name: "Ordermenu",

  components: {
    Orderitem,
  },

  data() {
    return {};
  },

  computed: {
    orders() {
      return this.$store.getters.getOrders;
    },
  },
};
</script>

<style lang="scss">
.order-menu {
  background-color: #fff;
  border-radius: 5px;
  padding: 15px 50px;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;

  .order-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
    &__title {
      padding: 0;
      margin: 0;
      font-size: 20px;
    }

    .content-orderitem {
      padding: 0;
      margin: 0;
      border-bottom: solid 1px $dark;

      &:nth-last-child(1) {
        border: none;
      }
    }
  }
}
</style>
