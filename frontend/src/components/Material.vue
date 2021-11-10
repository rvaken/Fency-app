<template>
  <section class="material">
    <div class="content">
      <img
        class="content-image"
        :src="require('@/assets/images/materials/' + image + '')"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "Material",

  props: {
    image: {
      type: String,
      default: "steel.jpg",
    },
  },
};
</script>

<style lang="scss">
.material {
  .content {
    .content-image {
    }
  }

  &:hover {
  }
}
</style>
