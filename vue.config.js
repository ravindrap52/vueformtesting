module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
              @import "@/scss/base/_variables.scss";
              @import "@/scss/base/_reset.scss";
            `
      }
    }
  }
};
