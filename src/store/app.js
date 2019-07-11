const state = {
  redirectUrl: 'https://linky.sunshare.fr',
  token: {
    accessToken: null,
    typeToken: null,
    refreshToken: null
  }
}

const getters = {
  redirectUrl: state => state.redirectUrl,
  tokenAccessor: state => state.token
}

const actions = {
  setToken: function ({ commit }, token) {

  },
  refreshToken: function ({ commit }) {

  }
}

export default {
  state,
  getters,
  actions
}
