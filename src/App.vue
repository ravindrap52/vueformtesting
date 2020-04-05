<template>
  <div class="grid--container">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  }
};
</script>
<style lang="scss">
.grid--container {
  display: $display-gird;
  grid-template-rows: 3.5rem 1fr auto;
  height: 100vh;
  grid-gap: 0.5rem;
  min-height: 100%;
}
</style>
