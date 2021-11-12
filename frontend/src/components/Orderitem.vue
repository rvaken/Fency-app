<template>
  <section class="order-item">
    <div class="item-content">
      <p>
        <span class="amount-txt">{{ amount }}m &nbsp;</span>
        <span class="material-txt">{{ material }}</span>
        <span class="amount-txt">&nbsp; for only &nbsp;</span>
        <span class="price-txt">€{{ price }}</span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Orderitem",

  props: {
    material: {
      type: String,
      default: "Material",
    },

    price: {
      type: String,
      default: "10",
    },

    amount: {
      type: String,
      default: "10",
    },
  },
};
</script>

<style lang="scss">
.order-item {
  .item-content {
    display: flex;
    justify-content: space-between;

    p {
      .amount-txt {
      }
      .price-txt {
        color: $green;
      }
      .material-txt {
        font-weight: 600;
      }
    }
  }
}
</style>
