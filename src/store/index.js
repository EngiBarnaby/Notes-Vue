import Vue from 'vue'
import Vuex from 'vuex'
import note from './modules/note'
import account from './modules/account'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    note,
    account
  }
})
