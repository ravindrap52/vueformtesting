<template>
  <div class="route--display--container">
    <Login @form-submitted="doSubmit"></Login>
  </div>
</template>

<script>
import Login from "@/views/Login.vue";

export default {
  name: "App",
  components: {
    Login
  },
  methods: {
    doSubmit(data) {
      this.$store
        .dispatch("userLogin", data)
        .then(response => {
          console.error("response", response);
        })
        .catch(error => {
          console.error("error", error);
        });
    }
  }
};
</script>
<style lang="scss">
.route--display--container {
  display: $display-flex;
  justify-content: center;
  align-self: center;
}
</style>
