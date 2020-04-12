<template>
  <div class="route--display--container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style lang="scss" scoped>
.route--display--container {
  display: $display-flex;
  justify-content: center;
  align-self: center;
}
</style>
