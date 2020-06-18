<template>
  <a v-if="href" :href="href" class="btn"><slot></slot></a>
  <button v-else :type="type" @click="onButtonClick" class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: 'btn',
  props: {
    href: String,
    type: String
  },
  methods: {
    onButtonClick() {
      this.$emit('click')
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  @include btn();
}

.btn--next-to-form {
  margin-left: auto;
}

a.btn {
  &:hover {
    text-decoration: none;
  }
}

.btn__text-desktop {
  display: none;

  @include bp(tablet) {
    display: inline;
  }
}
</style>
