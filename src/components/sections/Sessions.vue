<template>
  <div class="sessions">
    <h4>Available sessions:</h4>
    <Radio
      class="session__item"
      name="session"
      v-for="(session, index) in sessions"
      :key="index"
      :radio-value="session.id"
      @radioClick="sessionClick"
      v-show="session.relationships.performance.data.id === performanceId"
      :data="`${getTime(session.attributes.from)} - ${getTime(session.attributes.to)}`"
      :ref="`radio${session.id}`">
        <template slot="content">
          <span class="session__date">
            {{ getDate(session.attributes.from) }}
          </span>
          <span class="session__time">
            {{
              `${getTime(session.attributes.from)} - ${getTime(session.attributes.to)}`
            }}
          </span>
        </template>
    </Radio>
  </div>
</template>

<script>
import moment from 'moment'
import Radio from '@/components/Radio'

export default {
  props: {
    sessions: {
      type: Array,
      required: true
    },
    performanceId: {
      type: String,
      required: true
    }
  },
  components: {
    Radio
  },
  mounted(){
    if (this.$store.state.sessionId && this.$store.state.isPerformancesForm) {
      this.$refs[`radio${this.$store.state.sessionId}`][0].$el.childNodes[0].checked = true
    }
  },
  methods: {
    sessionClick (el) {
      this.$emit('sessionClick')
      this.$store.commit('SET_SESSION_ID', el.value)
      this.$store.commit('SET_SESSION_NAME', el.dataset.name)
    },
    getDate (d) {
      return moment(d).format('DD/MM/YYYY')
    },
    getTime (d) {
      return moment(d).format('HH:mm')
    }
  }
}
</script>

<style lang="scss" scoped>
.session__item {
  font-size: $font-size-base;

  input:checked ~ .radio__checkmark {
    background: $color__secondary;
  }
}
</style>