<template>
  <label class="label" for="card">
    {{ title }}
    <v-select
      :options="options"
      :searchable="false"
      :filterable="false"
      :clearable="false"
      @input="$emit('input', source)"
      v-model="source">
    </v-select>
  </label>
</template>

<script>
export default {
  data() {
    return {
      source: this.value
    }
  },
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
.label {
  font-size: 20px;

  position: relative;

  display: block;

  margin-bottom: 30px;

  &--agree {
    margin-bottom: 10px;
  }
}
</style>