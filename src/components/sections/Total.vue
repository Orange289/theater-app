<template>
  <div class="total">
    <h3>Dear {{ name }} {{ surname }}, you've just ordered:</h3>
    <div class="total__item">
      <b>Performance:</b> {{ performanceName }}
    </div>
    <div class="total__item">
      <b>Session:</b> {{ sessionName }}
    </div>
    <Bottom 
      @backClick="onBackClick" />
  </div>
</template>

<script>
import Bottom from './Bottom'

export default {
  components: {
    Bottom
  },
  computed: {
    name () {
      return this.$store.state.name
    },
    surname () {
      return this.$store.state.surname
    },
    performanceName () {
      return this.$store.state.performanceName
    },
    sessionName () {
      return this.$store.state.sessionName
    },
    paymentType () {
      return this.$store.state.payment
    }
  },
  methods: {
    onBackToUserClick () {
      this.$store.commit('setUserForm')
      this.$store.commit('setAgree')
    },
    onBackClick () {
      if (this.paymentType === 'card') {
        this.$store.commit('setCardForm')
      } else {
        this.onBackToUserClick()
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>