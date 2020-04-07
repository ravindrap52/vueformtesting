<template>
  <div class="route--display--container">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.route--display--container {
  display: $display-flex;
  justify-content: center;
  align-self: center;
}
</style>
