<template>
  <main class="tickets">
    <container class="tickets__content">
      <h1 v-if="!this.$store.state.isResponseForm">Order the tickets here!</h1>
      <div class="form">
        <form
          action="action"
          @submit.prevent="submit">
          <Performances 
            v-if="isPerformancesForm"
            :performances="performances"
            :performancesLoading="performancesLoading"
            :sessions="sessions"
            :sessionsLoading="sessionsLoading"
          />

          <User v-if="isUserForm" />
          <Card v-if="isCardForm" />
          <Total v-if="isTotalForm" />
          <Response v-if="isResponseForm" />
        </form>
      </div>
    </container>
  </main>
</template>

<script>
import Performances from '@/components/sections/Performances'
import User from '@/components/sections/User'
import Card from '@/components/sections/Card'
import Total from '@/components/sections/Total'
import Response from '@/components/sections/Response'

import ServiceApi from '@/services/ServiceApi'

export default {
  metaInfo: {
    title: 'Tickets'
  },
  components: {
    Performances,
    User,
    Card,
    Total,
    Response
  },
  data () {
    return {
      action: '',
      performancesLoading: false,
      sessionsLoading: false,
      performances: [],
      sessions: [],
    }
  },
  computed: {
    isPerformancesForm () {
      return this.$store.state.isPerformancesForm
    },
    isUserForm () {
      return this.$store.state.isUserForm
    },
    isCardForm () {
      return this.$store.state.isCardForm
    },
    isTotalForm () {
      return this.$store.state.isTotalForm
    },
    isResponseForm () {
      return this.$store.state.isResponseForm
    }
  },
  created () {
    this.performancesLoading = true
    this.sessionsLoading = true

    ServiceApi.getPerformances()
      .then(performances => {
        this.performancesLoading = false
        this.performances = performances.data.performances
        this.$store.commit('SET_PERFORMANCES', performances)
      })

    ServiceApi.getSessions()
      .then(sessions => {
        this.sessionsLoading = false
        this.sessions = sessions.data.sessions
        this.$store.commit('SET_SESSIONS', sessions)
      })
  },
  methods: {
    submit () {
      console.log('submit')
      this.$store.commit('setResponseForm')
    }
  }
}
</script>

<style lang="scss">
.tickets {
  display: flex;

  height: 100vh;

  align-items: center;
  justify-content: center;
}

.tickets__content {
  h1 {
    font-size: 32px;
  }
}

.form {
  @include bp(tablet) {
    min-width: 700px;
  }
}
</style>
