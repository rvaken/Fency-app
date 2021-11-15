<template>
  <section class="fence-cart">
    <div class="orders">
      <Ordermenu class="orders-ordermenu" :class="{ active: orderToggle }" />
      <Extramenu :poles="poles" class="orders-extramenu" />
    </div>

    <div class="content">
      <div class="content-price">
        <h3 class="price-total">Your total is:</h3>
        <div class="price-display">
          <p>
            €
            <animated-number
              :value="price"
              :duration="duration"
              :format-value="formatToWholes"
            />
          </p>
        </div>
      </div>

      <div class="header-button" @click="basketClick">
        <div class="header-orders">
          <p>{{ orderAmt }}</p>
        </div>

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
import AnimatedNumber from "animated-number-vue";
import Ordermenu from "./Ordermenu";
import Extramenu from "./Extramenu";

export default {
  name: "FenceCart",

  components: {
    AnimatedNumber,
    Ordermenu,
    Extramenu,
  },

  data() {
    return {
      orderToggle: false,
      duration: 200,
      icons: [
        {
          id: 1,
          el: "shopping-basket",
        },
      ],
    };
  },

  computed: {
    price() {
      return this.$store.getters.getPrice;
    },

    orderAmt() {
      return this.$store.getters.getOrderAmt;
    },

    poles() {
      return this.$store.getters.getPoles;
    },
  },

  methods: {
    basketClick() {
      this.$store.dispatch("setPrice", 0);
      this.$store.dispatch("setOrders", []);
      this.orderToggle = !this.orderToggle;
    },

    formatToWholes(number) {
      return `${Number(number).toFixed(2)}</h1>`;
    },
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
  flex-direction: row;

  .orders {
    height: 75%;
    width: 100%;
    position: relative;

    .orders-ordermenu {
      position: absolute;
      left: 200px;
    }

    .orders-extramenu {
      position: absolute;
      left: 600px;
    }
  }

  .content {
    display: flex;
    align-items: center;

    padding: 50px;

    .content-price {
      display: flex;
      align-items: center;

      .price-total {
        white-space: nowrap;
        color: #fff;
        font-weight: 800;
        font-size: 40px;
      }
      .price-display {
        border: solid 2px #fff;
        margin: 25px;
        border-radius: 40px;
        min-width: 150px;
        p {
          padding: 5px 10px;
          color: #fff;
          font-family: $main-font;
          font-size: 20px;
        }
      }
    }

    .header-button {
      transition: 0.3s;
      background-color: greenyellow;
      @include shadow();
      position: relative;

      border-radius: 50%;
      padding: 50px;
      display: flex;
      justify-content: center;

      .header-orders {
        top: 5px;
        right: 5px;
        position: absolute;
        background-color: $red;
        border-radius: 50%;
        height: 35px;
        width: 35px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        p {
          color: #fff;
          font-family: $main-font;
          font-size: 14px;
          font-weight: 600;
        }
      }

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
