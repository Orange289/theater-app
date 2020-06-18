<template>
  <div :class="['bottom', {'bottom--form' : isUserForm || isCardForm}]">
    <template v-if="isPerformancesForm">
      <div class="bottom__error" v-if="isError">
        You need to choose the session!
      </div>
      <btn type="button" @click="onNextToUserForm" class="btn--next-to-form">
        Next to the form
      </btn>
    </template>
    <template v-else-if="isUserForm">
      <div class="bottom__error bottom__error--form" v-if="isError">
        Fix the errors in the form!
      </div>
      <btn type="button" @click="onBackToPerformancesClick">
        Back <span class="btn__text-desktop">to performances</span>
      </btn>
      <btn type="button" @click="onFinishClick">
        Finish <span class="btn__text-desktop">order</span>
      </btn>
    </template>
    <template v-else-if="isCardForm">
      <div class="bottom__error bottom__error--form" v-if="isError">
        Fix the errors in the form!
      </div>
      <btn type="button" @click="onBackToUserClick">
        Back <span class="btn__text-desktop">to user form</span>
      </btn>
      <btn type="button" @click="onConfirmClick">
        Confirm
      </btn>
    </template>
    <template v-else-if="isTotalForm">
      <btn type="button" @click="onBackClick">
        Back
      </btn>
      <btn>Submit</btn>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    isError: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      isPerformancesForm: this.$store.state.isPerformancesForm,
      isUserForm: this.$store.state.isUserForm,
      isCardForm: this.$store.state.isCardForm,
      isTotalForm: this.$store.state.isTotalForm
    }
  },
  methods: {
    onNextToUserForm() {
      this.$emit('nextToUserFormClick')
    },
    onBackToPerformancesClick() {
      this.$emit('backToPerformancesClick')
    },
    onFinishClick() {
      this.$emit('finishClick')
    },
    onBackToUserClick() {
      this.$emit('backToUserClick')
    },
    onConfirmClick() {
      this.$emit('confirmClick')
    },
    onBackClick() {
      this.$emit('backClick')
    },
    onSubmitClick() {
      this.$emit('submit')
    }
  },
}
</script>

<style lang="scss" scoped>
.bottom {
  display: flex;

  align-items: center;
  justify-content: space-between;

  &--form {
    flex-wrap: wrap;
  }
}

.bottom__error {
  color: $color__pink;

  &--form {
    width: 100%;
  }
}
</style>