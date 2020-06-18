<template>
  <div class="response">
    <b>Thank you for your order!</b>
    <btn href="/">
      Back to home page
    </btn>
  </div>
</template>

<script>
export default {
  name: 'Response'
}
</script>

<style lang="scss" scoped>
.response {
  text-align: center;

  b {
    font-size: 30px;
  }

  .btn {
    width: 251px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>