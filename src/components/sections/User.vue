<template>
  <div class="user">
    <siteInput 
      v-model="name"
      :v="$v.name"
      @input="onNameChange"
      id="name"
      title="Name"/>
    <siteInput 
      v-model="surname"
      :v="$v.surname"
      @input="onSurnameChange"
      id="surname"
      title="Surname"/>
    <siteInput 
      v-model="birthDate"
      :v="$v.birthDate"
      @input="onBirthDateChange"
      id="date"
      title="Date of birth"/>
    <siteInput 
      v-model="email"
      :v="$v.email"
      @input="onEmailChange"
      id="email"
      title="Email"/>
    <siteSelect
      class="user__card"
      title="Please choose the payment method:"
      :options="payment.options"
      :value="payment.source"
      @input="inputCard"
    />
    <div :class="['user__agree', { 'user__agree--error': !isAgree && isFinishClicked }]">
      <siteCheckbox @click="onAgreeClick" ref="agree">
        <template slot="value">
          Agree with conditions
        </template>
      </siteCheckbox>
      <div class="error" v-if="!isAgree && isFinishClicked">You need to be agree with our conditions if you want to order</div>
    </div>

    <Bottom 
      :isError="isError" 
      @finishClick="onFinishClick"
      @backToPerformancesClick="onBackToPerformancesClick" />
  </div>
</template>

<script>
import moment from 'moment'
import { required, email } from 'vuelidate/lib/validators'
import Bottom from './Bottom'

const dateFormat = (value) => /^\d{2}([./-])\d{2}\1\d{4}$/.test(value) // date valid

export default {
  name: 'User',
  components: {
    Bottom
  },
  data() {
    return {
      name: this.$store.state.name,
      surname: this.$store.state.surname,
      email: this.$store.state.email,
      birthDate: this.$store.state.birthDate,
      payment: {
        source: this.$store.state.payment,
        result: null,
        options: ['card', 'cash']
      },
      isFinishClicked: false,
      isError: false
    }
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      required
    },
    surname: {
      required
    },
    birthDate: {
      required,
      dateFormat
    }
  },
  computed: {
    isAgree () {
      return this.$store.state.agree
    },
    paymentType () {
      return this.$store.state.payment
    }
  },
  mounted() {
    this.checkAgree()
    
    if (this.$store.state.isUserInitialLoad) {
      this.$store.commit('RESET_USER_INITIAL_LOAD')
    } else {
      this.$v.$touch()
    }
  },
  methods: {
    onNameChange (el) {
      this.$store.commit('setName', el)
    },
    onSurnameChange (el) {
      this.$store.commit('setSurname', el)
    },
    onBirthDateChange (el) {
      let formattedBirthDate = moment(this.birthDate, 'DDMMYYYY').format('YYYY.MM.DD')
      this.$store.commit('setBirthDate', el)
      this.$store.commit('setFormattedBirthDate', formattedBirthDate)
    },
    onEmailChange (el) {
      this.$store.commit('setEmail', el)
    },
    inputCard (el) {
      this.$store.commit('setPayment', el)
    },
    onAgreeClick () {
      if (this.isAgree) {
        this.$store.commit('resetAgree')
      } else {
        this.$store.commit('setAgree')
      }
    },
    checkAgree() {
      if (this.isAgree) {
        this.$refs.agree.$el.children[0].checked = true
      }
    },
    onBackToPerformancesClick () {
      this.$store.commit('SET_PERFORMANCES_FORM')
    },
    onFinishClick () {
      this.isFinishClicked = true

      if (this.$v.$invalid || !this.isAgree) {
        this.isError = true
      } else {
        this.isError = false

        this.paymentType === 'card' ? 
          this.$store.commit('setCardForm') :
          this.$store.commit('setTotalForm')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.user__card {
  ::v-deep .v-select {
    width: 200px;
    margin-top: 20px;
  }

  ::v-deep .vs__dropdown-toggle {
    border-color: rgba($color__primary, .4);
  }

  ::v-deep .vs__open-indicator {
    fill: $color__primary;
  }
}

.user__agree--error .error {
  font-size: $font-size-base;

  display: block;

  color: $color__pink;
}
</style>