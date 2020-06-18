<template>
  <div class="input">
    <label class="input__label" :for="id">
      <input 
        class="field__input" 
        :ref="id"
        :id="id" 
        :value="value"
        @input="onInputClick"
        @keypress="onKeyPress"
      />
        <!-- @input="v.$touch()"  -->

        <!-- v-model="field" -->

      <span class="input__floating-label">{{ title }}</span>

      <div class="error" v-if="v.$error && !v.dateFormat && this.id === 'date'">{{ dateFormatErrorText }}</div>
      <div class="error" v-if="v.$error && !v.email && this.id === 'email'">{{ emailFormatErrorText }}</div>
      <div class="error" v-if="v.$error && !v.cardDate && this.id === 'cardDate'">{{ cardDateFormatErrorTest }}</div>
      <div class="error" v-if="v.$error && !v.required">{{ requiredErrorText }}</div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    v: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      default: ''
    },
    dateFormatErrorText: {
      type: String,
      default: 'Please enter date, use the same separator (. / or -), for example: 20.02.2019'
    },
    emailFormatErrorText: {
      type: String,
      default: 'Please enter email'
    },
    requiredErrorText: {
      type: String,
      default: 'Field is required'
    },
    cardDateFormatErrorTest: {
      type: String,
      default: 'Please enter date, using the separators: . / or -, for example: 12/23'
    }
  },
  mounted() {
    if (this.value !== '') {
      this.$refs[`${this.id}`].classList.add('changed')
    }
  },
  methods: {
    onInputClick($event) {
      this.v.$touch()
      this.$emit('input', $event.target.value)
      this.$refs[`${this.id}`].classList.add('changed')
    },
    onKeyPress($event) {
      this.$emit('keypress', $event)
    }
  },
  // computed: {
  //   field: {
  //     get() {
  //       return this.value
  //     },
  //     set(value) {
  //       this.$emit('input', value)
  //       this.$refs[`${this.id}`].classList.add('changed')
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.input {
  input {
    font-size: 20px;

    width: 100%;
    padding: 8px 5px;

    border: none;
    border-bottom: 1px solid rgba($color__primary, .4);
    background: transparent;

    &:focus {
      outline: none;
    }
  }
}

.input__label {
  font-size: 20px;

  position: relative;

  display: block;

  margin-bottom: 30px;

  &--agree {
    margin-bottom: 10px;
  }
}

.input__floating-label {
  font-size: 20px;

  position: absolute;
  top: 0;
  left: 0;

  cursor: text;
  transition: .2s ease all;
  letter-spacing: 1.2px;

  color: rgba($color__text, .4);

  .field__input:focus ~ &,
  .field__input.changed ~ & {
    font-size: 10px;

    top: -16px;
    left: 1px;

    color: $color__primary;
  }
}

// .input--error 
.error {
  font-size: $font-size-base;

  display: block;

  color: $color__pink;
}

.input--error input {
  border-color: $color__pink;
}

</style>