<template>
  <div>in dashboard {{ getLoginPersonID }}</div>
</template>

<script>
export default {
  computed: {
    getLoginPersonID() {
      return this.$store.state.loginUserID;
    }
  }
};
</script>

<style></style>
