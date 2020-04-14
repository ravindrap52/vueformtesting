<template>
  <div class="route--display--container">
    <Login data-testid="loginForm" @form-submitted="doSubmit"></Login>
  </div>
</template>

<script>
import Login from "@/views/Login.vue";

export default {
  name: "App",
  components: {
    Login
  },
  computed: {
    getLoggedInUser() {
      return this.$store.state.user;
    }
  },
  methods: {
    async doSubmit(data) {
      this.$store
        .dispatch("userLogin", data)
        .then(() => {
          if (this.getLoggedInUser) {
            console.log("no errors", this.getLoggedInUser);
          }
        })
        .catch(() => {
          console.error("error");
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
