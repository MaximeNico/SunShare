import Vue from 'vue'
import Vuex from 'vuex'

import appState from './modules/appState'
import app from './app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appState
  }
})
