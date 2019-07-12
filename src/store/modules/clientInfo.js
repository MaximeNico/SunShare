import * as types from '../mutation-types'

const state = {
  clientId: null
}

const getters = {
  getClientInfos: state => state.clientId
}

const actions = {
  setClientId: function ({ commit }, inputContent) {
    commit(types.SET_CLIENT_ID, inputContent)
  }
}

const mutations = {
  [types.SET_CLIENT_ID] (state, inputContent) {
    state.clientId = inputContent
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}