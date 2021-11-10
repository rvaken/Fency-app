module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/imports/variables.scss";`,
      },
    },
  },
};
