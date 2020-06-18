import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const initialState = {
  performances: [],
  sessions: [],
  performanceId: null,
  sessionId: null,
  performanceName: '',
  sessionName: '',
  isPerformancesForm: true,
  isUserInitialLoad: true,
  isCardInitialLoad: true,
  isUserForm: false,
  isCardForm: false,
  isTotalForm: false,
  isResponseForm: false,
  email: '',
  name: '',
  surname: '',
  birthDate: '',
  formattedBirthDate: '',
  agree: false,
  payment: 'cash',
  cardNumber: '',
  cardUser: '',
  cardDate: '',
  formattedCardDate: ''
}

export default new Vuex.Store({
  state: Vue.util.extend({}, initialState),

  mutations: {
    RESET_USER_INITIAL_LOAD(state) {
      state.isUserInitialLoad = false
    },
    RESET_CARD_INITIAL_LOAD(state) {
      state.isCardInitialLoad = false
    },
    SET_PERFORMANCES (state, performances) {
      state.performances = performances
    },
    SET_SESSIONS (state, sessions) {
      state.sessions = sessions
    },
    SET_PERFORMANCE_ID (state, id) {
      state.performanceId = id
    },
    SET_PERFORMANCE_NAME (state, name) {
      state.performanceName = name
    },
    SET_SESSION_ID (state, id) {
      state.sessionId = id
    },
    SET_SESSION_NAME (state, name) {
      state.sessionName = name
    },
    SET_PERFORMANCES_FORM (state) {
      state.isPerformancesForm = true
      state.isUserForm = false
      state.isResponseForm = false
      state.isTotalForm = false
    },
    setUserForm (state) {
      state.isUserForm = true
      state.isPerformancesForm = false
      state.isCardForm = false
      state.isTotalForm = false
      state.isResponseForm = false
    },
    setCardForm (state) {
      state.isUserForm = false
      state.isCardForm = true
      state.isTotalForm = false
      state.isResponseForm = false
    },
    setTotalForm (state) {
      state.isUserForm = false
      state.isCardForm = false
      state.isTotalForm = true
      state.isResponseForm = false
    },
    setResponseForm (state) {
      state.isTotalForm = false
      state.isResponseForm = true
    },
    setName (state, name) {
      state.name = name
    },
    setSurname (state, surname) {
      state.surname = surname
    },
    setEmail (state, email) {
      state.email = email
    },
    setBirthDate (state, date) {
      state.birthDate = date
    },
    setFormattedBirthDate (state, date) {
      state.formattedBirthDate = date
    },
    setAgree (state) {
      state.agree = true
    },
    resetAgree (state) {
      state.agree = false
    },
    setPayment (state, payment) {
      state.payment = payment
    },
    setCardNumber (state, num) {
      state.cardNumber = num
    },
    setCardUser (state, user) {
      state.cardUser = user
    },
    setCardDate (state, date) {
      state.cardDate = date
    },
    setFormattedCardDate (state, date) {
      state.formattedCardDate = date
    },
    RESET_STATE (state) {
      for (let f in state) {
        Vue.set(state, f, initialState[f])
      }
    }
  },

  plugins: [createPersistedState()]
})
