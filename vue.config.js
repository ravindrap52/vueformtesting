module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/scss/base/_reset.scss";
        @import "@/scss/abstracts/_variables.scss";
        @import "@/scss/base/_base.scss";
        `
      }
    }
  }
};
