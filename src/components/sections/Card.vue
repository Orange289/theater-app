<template>
  <div class="card">
    <siteInput 
      v-model="cardNumber"
      :v="$v.cardNumber"
      @input="onCardNumberChange"
      id="cardNumber"
      title="Card number"
      @keypress="checkNumber($event)" />
    <siteInput 
      v-model="cardDate"
      :v="$v.cardDate"
      @input="onCardDateChange"
      id="cardDate"
      title="Valid till"/>
    <siteInput 
      v-model="cardUser"
      :v="$v.cardUser"
      @input="onCardUserChange"
      id="cardUser"
      title="Card username"/>
    <Bottom 
      :isError="isError" 
      @backToUserClick="onBackToUserClick"
      @confirmClick="onConfirmClick" />
  </div>
</template>

<script>
import moment from 'moment'
import { required } from 'vuelidate/lib/validators'
import Bottom from './Bottom'

const cardDateFormat = (value) => /^\d{2}([./-])\d{2}$/.test(value) // date valid

export default {
  components: {
    Bottom,
  },
  data() {
    return {
      cardNumber: this.$store.state.cardNumber,
      cardUser: this.$store.state.cardUser,
      cardDate: this.$store.state.cardDate,
      isError: false
    }
  },
  validations: {
    cardNumber: {
      required
    },
    cardUser: {
      required
    },
    cardDate: {
      required,
      cardDateFormat
    }
  },
  mounted() {
    if (this.$store.state.isCardInitialLoad) {
      this.$store.commit('RESET_CARD_INITIAL_LOAD')
    } else {
      this.$v.$touch()
    }
  },
  methods: {
    onCardNumberChange (el) {
      this.$store.commit('setCardNumber', el)
    },

    onCardUserChange (el) {
      this.$store.commit('setCardUser', el)
    },

    onCardDateChange (el) {
      let formattedCardDate = moment(this.cardDate, 'MMYY').format('MM/YY')
      this.$store.commit('setCardDate', el)
      this.$store.commit('setFormattedCardDate', formattedCardDate)
    },

    checkNumber ($event) {
      if (($event.charCode === 0 || /\d/.test(String.fromCharCode($event.charCode)) || $event.keyCode === 8 || $event.keyCode === 46)) {
        return true
      } else {
        $event.preventDefault()
      }
    },

    onBackToUserClick () {
      this.$store.commit('setUserForm')
      this.$store.commit('setAgree')
    },

    onConfirmClick () {
      if (this.$v.$invalid) {
        this.isError = true
      } else {
        this.isError = false
        this.$store.commit('setTotalForm')
      }

    },
  },
}
</script>