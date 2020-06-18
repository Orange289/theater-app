<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  max-width: $container__max-width + 2 * $padding-base;
  margin: 0 auto;
  padding-right: $padding-base;
  padding-left: $padding-base;

  @include bp(mobile) {
    padding-left: 74px;
    padding-right: 74px;
  }

  @include bp(tablet) {
    width: auto;
    max-width: calc(#{$container__max-width}px + 2 * #{$container__padding--tablet});
    padding-right: $container__padding--tablet;
    padding-left: $container__padding--tablet;
  }

  @include bp(desktop) {
    max-width: 1410px;
  }
}

</style>
