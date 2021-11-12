<template>
  <section class="order-menu">
    <div class="order-content">
      <h2 class="order-content__title">Orders</h2>
      <div class="sad-wrapper" v-if="sadIcon">
        <font-awesome-icon
          class="sad-wrapper__icon"
          v-for="icon in icons"
          :key="icon.id"
          :icon="icon.el"
        />
        <p>You have no orders yet</p>
      </div>
      <Orderitem
        class="content-orderitem"
        v-for="order in orders"
        :key="order.id"
        :id="order.id"
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
    return {
      icons: [
        {
          id: 1,
          el: "sad-tear",
        },
      ],
    };
  },

  computed: {
    sadIcon() {
      if (this.orders.length > 0) {
        return false;
      } else {
        return true;
      }
    },

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
  @include shadow();

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
      background-color: $dark;
      padding: 5px 8px;
      color: #fff;
      border-radius: 4px;
    }

    .sad-wrapper {
      &__icon {
        width: 50px;
        height: 50px;
        color: $green;
        margin-top: 35px;
      }
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
