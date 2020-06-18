<template>
  <div class="performances">
    <span v-if="performancesLoading">Performances are loading…</span>
    <div v-else>
      <div :class="['performance', {'active': currentPerformanceId === performance.id}]"
        v-for="performance in performances"
        :key="performance.id">
        <div class="performance__title"
          @click="onPerformanceClick"
          :data-performance="performance.id"
          :data-performancename="performance.attributes.title">
          {{ performance.attributes.title }}
        </div>
        <div class="performance__info" v-if="currentPerformanceId === performance.id">
          <div class="performance__info-item">
            <h4>Genres:</h4>
            <span class="performance__genre"
              :data-genre="setGenre(genre)"
              v-for="(genre,index) in performance.attributes.genres"
              :key="index">
              {{ genre }}
            </span>
          </div>
          <span v-if="sessionsLoading">Sessions are loading…</span>
          <Sessions 
            v-else
            class="performance__info-item" 
            :sessions="sessions" 
            :performanceId="performance.id"
            @sessionClick="onSessionClick"
          />
        </div>
      </div>
      <Bottom :isError="isError" @nextToUserFormClick="onNextToDataClick" />
    </div>

  </div>
</template>

<script>
import Sessions from './Sessions'
import Bottom from './Bottom'

export default {
  components: {
    Sessions,
    Bottom
  },
  props: {
    performances: {
      type: Array,
      required: true
    },
    performancesLoading: {
      type: Boolean,
      required: true
    },
    sessions: {
      type: Array,
      required: true
    },
    sessionsLoading: {
      type: Boolean,
      required: true
    },
  },
  data() {
    return {
      currentPerformanceId: this.$store.state.performanceId,
      isError: false
    }
  },
  methods: {
    onPerformanceClick (e) {
      const id = e.target.dataset.performance
      const name = e.target.dataset['performancename']

      this.currentPerformanceId = id
      this.$store.commit('SET_PERFORMANCE_ID', this.currentPerformanceId)
      this.$store.commit('SET_PERFORMANCE_NAME', name)
      this.$store.commit('SET_SESSION_ID', null)
    },
    onSessionClick () {
      this.isError = false
    },
    setGenre (g) {
      switch (g) {
        case 'Комедия': return 'comedy'
        case 'Сказка': return 'fairytale'
        case 'Для детей': return 'kids'
        case 'Мюзикл': return 'musical'
      }
    },
    onNextToDataClick() {
      if (this.$store.state.sessionId) {
        this.$store.commit('setUserForm')
        this.isError = false
      } else {
        this.isError = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.performance__title {
  font-size: 18px;

  padding: 20px;

  cursor: pointer;

  background: rgba($color__gray, .3);

  .performance.active & {
    font-weight: 600;

    color: $color__primary;
    background: rgba($color__secondary, .6);
  }
}

.performance__info {
  padding: 20px;

  h4 {
    font-size: 20px;

    margin: 0;
    margin-bottom: 20px;
  }
}

.performance__info-item {
  & + & {
    margin-top: 30px;
  }
}

.performance__genre {
  display: inline-block;

  margin-right: 5px;
  padding: 3px;

  &[data-genre='musical'] {
    color: $color__pink;
    background: rgba($color__pink, .2);
  }

  &[data-genre='fairytale'] {
    color: $color__orange;
    background: rgba($color__orange, .2);
  }

  &[data-genre='comedy'] {
    color: $color__violet;
    background: rgba($color__violet, .2);
  }

  &[data-genre='kids'] {
    color: $color__green;
    background: rgba($color__green, .2);
  }
}
</style>