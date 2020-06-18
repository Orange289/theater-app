<template>
  <label class="radio" :data-id="radioValue">
    <input type="radio"
      :name="name"
      :value="radioValue"
      @click="onRadioClick($event)"
      :data-name="data"
    >
    <span class="radio__checkmark"></span>
    <span><slot name="content"></slot></span>
  </label>
</template>

<script>
export default {
  name: 'radio',
  props: {
    name: {
      type: String
    },
    data: {
      type: String
    },
    radioValue: {
      type: String
    }
  },
  methods: {
    onRadioClick($event) {
      this.$emit('radioClick', $event.target)
    }
  }
}
</script>

<style lang="scss">
.radio {
  font-size: 22px;

  position: relative;

  display: block;

  margin-bottom: 12px;
  padding-left: 35px;

  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.radio input {
  position: absolute;

  cursor: pointer;

  opacity: 0;
}

.radio__checkmark {
  position: absolute;
  top: 2px;
  left: 0;

  width: 20px;
  height: 20px;

  transition: background-color .3s;

  border-radius: 50%;
  background-color: $color__gray-light;
}

.radio:hover input ~ .radio__checkmark {
  background-color: $color__gray;
}

.radio input:checked ~ .radio__checkmark {
  background-color: $color__secondary;
}

.radio__checkmark:after {
  position: absolute;

  display: none;

  content: '';
}

.radio input:checked ~ .radio__checkmark:after {
  display: block;
}

.radio .radio__checkmark:after {
  top: 6px;
  left: 6px;

  width: 8px;
  height: 8px;

  border-radius: 50%;
  background: white;
}

</style>
