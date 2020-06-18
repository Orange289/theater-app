<template>
  <label class="checkbox">
    <slot name="value"></slot>
    <input type="checkbox" @click="$emit('click')">
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  name: 'siteCheckbox'
}
</script>

<style lang="scss">
.checkbox {
  font-size: 20px;

  position: relative;

  display: block;

  margin-bottom: 10px;
  padding-left: 35px;

  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkbox input {
  position: absolute;

  width: 0;
  height: 0;

  cursor: pointer;

  opacity: 0;
}

.checkmark {
  position: absolute;
  top: 3px;
  left: 0;

  width: 25px;
  height: 25px;

  background-color: $color__gray-light;
}

.checkbox:hover input ~ .checkmark {
  background-color: $color__gray;
}

.checkbox input:checked ~ .checkmark {
  background-color: $color__secondary;
}

.checkmark:after {
  position: absolute;

  display: none;

  content: '';
}

.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  top: 5px;
  left: 9px;

  width: 5px;
  height: 10px;

  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);

  border: solid $color__white;
  border-width: 0 3px 3px 0;
}

</style>
