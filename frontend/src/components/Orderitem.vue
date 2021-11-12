<template>
  <section class="order-item">
    <div class="item-content">
      <p>
        <span class="amount-txt">{{ amount }}m &nbsp;</span>
        <span class="material-txt">{{ material }}</span>
        <span class="amount-txt">&nbsp; for only &nbsp;</span>
        <span class="price-txt">€{{ price }}&nbsp; &nbsp;</span>
      </p>

      <font-awesome-icon
        @click="deleteOrder(id)"
        class="item-icon"
        icon="times-circle"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Orderitem",

  data() {
    return {};
  },

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

    id: {
      type: Number,
      default: 0,
    },
  },

  computed: {},

  methods: {
    deleteOrder(e) {
      this.$store.dispatch("deleteOrder", e);
    },
  },
};
</script>

<style lang="scss">
.order-item {
  .item-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
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

    .item-icon {
      color: $red;

      &:hover {
        opacity: 0.4;
        cursor: pointer;
      }
    }
  }
}
</style>
