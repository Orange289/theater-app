<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import vSelect from 'vue-select'

import container from './components/Container.vue'
import btn from './components/Button.vue'
import siteInput from './components/SiteInput.vue'
import siteSelect from './components/SiteSelect.vue'
import siteCheckbox from './components/SiteCheckbox.vue'

Vue.component('Container', container)
Vue.component('btn', btn)
Vue.component('v-select', vSelect)
Vue.component('siteInput', siteInput)
Vue.component('siteSelect', siteSelect)
Vue.component('siteCheckbox', siteCheckbox)

Vue.use(Vuelidate)

export default {
  name: 'app'

}
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

html {
  @include bp(desktop) {
    line-height: $line-height-base;
  }
  font-family: $font-family-base;
  font-size: $font-size-base;

  height: 100%;
  color: $color__text;

  -webkit-text-size-adjust: 100%;
}

body {
  position: relative;

  overflow-y: auto;

  height: 100%;
  margin: 0;
  * {
    box-sizing: border-box;
  }
}

a {
  background-color: transparent;
  color: $color__link;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

img {
  border-style: none;
}

button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;

  margin: 0;
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input {
  /* 1 */
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  padding: 0;

  border-style: none;
}

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted inherit;
}

.hidden {
  display: none;
}
</style>
