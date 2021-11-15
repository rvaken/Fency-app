<template>
  <section class="material">
    <div class="content" :style="background">
      <p>
        <span>€{{ price }}/m</span>
      </p>
      <p class="content-name">{{ name }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Material",

  props: {
    color: {
      type: String,
      default: "$green",
    },

    name: {
      type: String,
      default: "Fence",
    },
    price: {
      type: Number,
      default: 10.0,
    },
  },

  computed: {
    background() {
      return "background-color: " + this.color;
    },
  },
};
</script>

<style lang="scss">
.material {
  .content {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    padding: 15px 25px;
    max-width: 300px;

    .content-image {
      // -webkit-filter: grayscale(100%);
      // filter: grayscale(100%);
      width: 20%;
      margin-left: 15px;
    }

    .content-name {
      font-weight: 800;
      margin: 0;
      padding: 5px;
      margin-left: 15px;
    }

    span {
    }
  }

  &:hover {
    border-right: solid 10px $dark;
    @include shadow();
    cursor: pointer;
  }
}
</style>
