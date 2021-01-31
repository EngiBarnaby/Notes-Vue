import Vue from 'vue'
import Vuex from 'vuex'
import note from './modules/note'
import account from './modules/account'
import todo from './modules/todo'
import profile from "./modules/profile"
import projects from "./modules/projects"

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
    account,
    todo,
    profile,
    projects
  }
})
